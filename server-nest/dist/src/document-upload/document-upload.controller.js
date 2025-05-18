"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUploadController = void 0;
const common_1 = require("@nestjs/common");
const document_upload_service_1 = require("./document-upload.service");
const create_document_upload_dto_1 = require("./dto/create-document-upload.dto");
const update_document_upload_dto_1 = require("./dto/update-document-upload.dto");
const openai_1 = require("openai");
const fs = require("fs");
const config_1 = require("@nestjs/config");
let DocumentUploadController = class DocumentUploadController {
    service;
    configService;
    constructor(service, configService) {
        this.service = service;
        this.configService = configService;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findOne(id) {
        return this.service.findOne(Number(id));
    }
    update(id, dto) {
        return this.service.update(Number(id), dto);
    }
    async deleteDocument(id) {
        const doc = await this.service.findOne(Number(id));
        if (doc && doc.filePath && fs.existsSync(doc.filePath)) {
            fs.unlinkSync(doc.filePath);
        }
        await this.service.remove(Number(id));
        return { success: true };
    }
    advancedFindAll(body) {
        return this.service.advancedFindAll(body);
    }
    batchCreate(docs) {
        return this.service.batchCreate(docs);
    }
    batchUpdate(updates) {
        return this.service.batchUpdate(updates);
    }
    batchDelete(ids) {
        return this.service.batchDelete(ids);
    }
    async analyse(body) {
        const documents = [];
        for (const docId of body.documentIds) {
            const doc = await this.service.findOne(docId);
            if (doc)
                documents.push(doc);
        }
        if (documents.length === 0) {
            return { success: false, message: 'No documents available for analysis' };
        }
        const openaiApiKey = process.env.OPENAI_API_KEY;
        if (!openaiApiKey) {
            return { success: false, message: 'OpenAI API key is not configured.' };
        }
        const openai = new openai_1.OpenAI({ apiKey: openaiApiKey });
        const document = documents[0];
        let fileContent = '';
        if (document.filePath && fs.existsSync(document.filePath)) {
            if (document.mimeType === 'application/pdf' ||
                document.originalFilename?.toLowerCase().endsWith('.pdf')) {
                fileContent = `This is a sample extracted from PDF file: ${document.originalFilename}`;
            }
            else if (document.mimeType ===
                'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                document.originalFilename?.toLowerCase().endsWith('.xlsx')) {
                fileContent = `This is an Excel file: ${document.originalFilename}`;
            }
            else {
                fileContent = fs.readFileSync(document.filePath, { encoding: 'utf-8' });
            }
        }
        if (!fileContent) {
            throw new Error('File content is missing for analysis.');
        }
        const MAX_SIZE = 30000;
        if (fileContent.length > MAX_SIZE) {
            const beginning = fileContent.substring(0, Math.floor(MAX_SIZE * 0.7));
            const end = fileContent.substring(fileContent.length - Math.floor(MAX_SIZE * 0.25));
            fileContent =
                beginning + '\n\n[...CONTENT TRUNCATED FOR ANALYSIS...]\n\n' + end;
        }
        const analysisPrompt = 'You are a legal and commercial contract analysis assistant...\n---\n✂️ TEXT TO ANALYSE:\n' +
            fileContent;
        const response = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
                {
                    role: 'system',
                    content: 'You are a contract analysis assistant specializing in extracting critical dates and important information from legal documents.',
                },
                { role: 'user', content: analysisPrompt },
            ],
            response_format: { type: 'json_object' },
            temperature: 0.3,
        });
        let analysisResults = {};
        try {
            const content = response.choices[0].message.content;
            if (!content)
                throw new Error('Empty response from OpenAI');
            analysisResults = JSON.parse(content);
        }
        catch (parseError) {
            analysisResults = {
                error: 'Failed to parse analysis results',
                errorMessage: parseError instanceof Error ? parseError.message : 'Unknown error',
            };
        }
        return { success: true, analysisResults };
    }
    findByCriticalDate(criticalDateId) {
        return this.service.findByCriticalDate(Number(criticalDateId));
    }
};
exports.DocumentUploadController = DocumentUploadController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_upload_dto_1.CreateDocumentUploadDto]),
    __metadata("design:returntype", void 0)
], DocumentUploadController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocumentUploadController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentUploadController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_upload_dto_1.UpdateDocumentUploadDto]),
    __metadata("design:returntype", void 0)
], DocumentUploadController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DocumentUploadController.prototype, "deleteDocument", null);
__decorate([
    (0, common_1.Post)('advanced'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DocumentUploadController.prototype, "advancedFindAll", null);
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], DocumentUploadController.prototype, "batchCreate", null);
__decorate([
    (0, common_1.Post)('batch-update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], DocumentUploadController.prototype, "batchUpdate", null);
__decorate([
    (0, common_1.Post)('batch-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], DocumentUploadController.prototype, "batchDelete", null);
__decorate([
    (0, common_1.Post)('analyse'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DocumentUploadController.prototype, "analyse", null);
__decorate([
    (0, common_1.Get)('by-critical-date/:criticalDateId'),
    __param(0, (0, common_1.Param)('criticalDateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentUploadController.prototype, "findByCriticalDate", null);
exports.DocumentUploadController = DocumentUploadController = __decorate([
    (0, common_1.Controller)('document-upload'),
    __metadata("design:paramtypes", [document_upload_service_1.DocumentUploadService,
        config_1.ConfigService])
], DocumentUploadController);
//# sourceMappingURL=document-upload.controller.js.map