import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DocumentUploadService } from './document-upload.service';
import { CreateDocumentUploadDto } from './dto/create-document-upload.dto';
import { UpdateDocumentUploadDto } from './dto/update-document-upload.dto';
import { OpenAI } from 'openai';
import * as fs from 'fs';
import { ConfigService } from '@nestjs/config';

@Controller('document-upload')
export class DocumentUploadController {
  constructor(
    private readonly service: DocumentUploadService,
    private readonly configService: ConfigService,
  ) {}

  @Post()
  create(@Body() dto: CreateDocumentUploadDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDocumentUploadDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  async deleteDocument(@Param('id') id: string) {
    // Remove document from DB and filesystem if needed
    const doc = await this.service.findOne(Number(id));
    if (doc && doc.filePath && fs.existsSync(doc.filePath)) {
      fs.unlinkSync(doc.filePath);
    }
    await this.service.remove(Number(id));
    return { success: true };
  }

  @Post('advanced')
  advancedFindAll(
    @Body()
    body: {
      uploadedBy?: number;
      analysisStatus?: string;
      fromDate?: string;
      toDate?: string;
      originalFilename?: string;
      mimeType?: string;
    },
  ) {
    return this.service.advancedFindAll(body);
  }

  @Post('batch')
  batchCreate(@Body() docs: CreateDocumentUploadDto[]) {
    return this.service.batchCreate(docs);
  }

  @Post('batch-update')
  batchUpdate(
    @Body() updates: { id: number; update: UpdateDocumentUploadDto }[],
  ) {
    return this.service.batchUpdate(updates);
  }

  @Post('batch-delete')
  batchDelete(@Body() ids: number[]) {
    return this.service.batchDelete(ids);
  }

  @Post('analyse')
  async analyse(
    @Body()
    body: {
      documentIds: number[];
      criticalDateId?: number;
      temporaryDocuments?: any;
    },
  ) {
    // 1. Fetch documents by IDs
    const documents = [];
    for (const docId of body.documentIds) {
      const doc = await this.service.findOne(docId);
      if (doc) documents.push(doc);
    }
    if (documents.length === 0) {
      return { success: false, message: 'No documents available for analysis' };
    }
    // 2. Use OpenAI API key from environment
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      return { success: false, message: 'OpenAI API key is not configured.' };
    }
    const openai = new OpenAI({ apiKey: openaiApiKey });
    // 3. For now, analyze the first document only (expand as needed)
    const document = documents[0];
    // 4. Read file content (simulate PDF/Excel/text handling)
    let fileContent = '';
    if (document.filePath && fs.existsSync(document.filePath)) {
      if (
        document.mimeType === 'application/pdf' ||
        document.originalFilename?.toLowerCase().endsWith('.pdf')
      ) {
        fileContent = `This is a sample extracted from PDF file: ${document.originalFilename}`;
      } else if (
        document.mimeType ===
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        document.originalFilename?.toLowerCase().endsWith('.xlsx')
      ) {
        fileContent = `This is an Excel file: ${document.originalFilename}`;
      } else {
        fileContent = fs.readFileSync(document.filePath, { encoding: 'utf-8' });
      }
    }
    if (!fileContent) {
      throw new Error('File content is missing for analysis.');
    }
    // 5. Truncate if too large
    const MAX_SIZE = 30000;
    if (fileContent.length > MAX_SIZE) {
      const beginning = fileContent.substring(0, Math.floor(MAX_SIZE * 0.7));
      const end = fileContent.substring(
        fileContent.length - Math.floor(MAX_SIZE * 0.25),
      );
      fileContent =
        beginning + '\n\n[...CONTENT TRUNCATED FOR ANALYSIS...]\n\n' + end;
    }
    // 6. Prepare OpenAI prompt
    const analysisPrompt =
      'You are a legal and commercial contract analysis assistant...\n---\n✂️ TEXT TO ANALYSE:\n' +
      fileContent;
    // 7. Call OpenAI
    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            'You are a contract analysis assistant specializing in extracting critical dates and important information from legal documents.',
        },
        { role: 'user', content: analysisPrompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    });
    let analysisResults: Record<string, unknown> = {};
    try {
      const content = response.choices[0].message.content;
      if (!content) throw new Error('Empty response from OpenAI');
      analysisResults = JSON.parse(content) as Record<string, unknown>;
    } catch (parseError) {
      analysisResults = {
        error: 'Failed to parse analysis results',
        errorMessage:
          parseError instanceof Error ? parseError.message : 'Unknown error',
      };
    }
    // 8. Return results (expand to update DB as needed)
    return { success: true, analysisResults };
  }

  @Get('by-critical-date/:criticalDateId')
  findByCriticalDate(@Param('criticalDateId') criticalDateId: string) {
    // Fetch documents linked to the given critical date
    return this.service.findByCriticalDate(Number(criticalDateId));
  }
}
