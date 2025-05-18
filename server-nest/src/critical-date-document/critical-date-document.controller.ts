import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CriticalDateDocumentService } from './critical-date-document.service';
import { CreateCriticalDateDocumentDto } from './dto/create-critical-date-document.dto';
import { UpdateCriticalDateDocumentDto } from './dto/update-critical-date-document.dto';

@Controller('critical-date-document')
export class CriticalDateDocumentController {
  constructor(private readonly service: CriticalDateDocumentService) {}

  @Post()
  create(@Body() dto: CreateCriticalDateDocumentDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateCriticalDateDocumentDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }

  @Post('advanced')
  advancedFindAll(
    @Body()
    body: {
      criticalDateId?: number;
      uploadedBy?: number;
      fromDate?: string;
      toDate?: string;
      filename?: string;
    },
  ) {
    return this.service.advancedFindAll(body);
  }

  @Post('batch')
  batchCreate(@Body() docs: CreateCriticalDateDocumentDto[]) {
    return this.service.batchCreate(docs);
  }

  @Post('batch-update')
  batchUpdate(
    @Body() updates: { id: number; update: UpdateCriticalDateDocumentDto }[],
  ) {
    return this.service.batchUpdate(updates);
  }

  @Post('batch-delete')
  batchDelete(@Body() ids: number[]) {
    return this.service.batchDelete(ids);
  }
}
