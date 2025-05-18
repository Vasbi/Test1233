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
exports.DocumentUploadService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const document_upload_entity_1 = require("./document-upload.entity");
const critical_date_document_entity_1 = require("../critical-date-document/critical-date-document.entity");
let DocumentUploadService = class DocumentUploadService {
    documentUploadRepository;
    constructor(documentUploadRepository) {
        this.documentUploadRepository = documentUploadRepository;
    }
    async create(createDto) {
        const doc = this.documentUploadRepository.create(createDto);
        return this.documentUploadRepository.save(doc);
    }
    async findAll() {
        return this.documentUploadRepository.find();
    }
    async findOne(id) {
        return this.documentUploadRepository.findOneBy({ id });
    }
    async update(id, updateDto) {
        const doc = await this.documentUploadRepository.findOneBy({ id });
        if (!doc)
            return null;
        Object.assign(doc, updateDto);
        return this.documentUploadRepository.save(doc);
    }
    async remove(id) {
        const result = await this.documentUploadRepository.delete(id);
        return result.affected !== 0;
    }
    async advancedFindAll({ uploadedBy, analysisStatus, fromDate, toDate, originalFilename, mimeType, }) {
        const qb = this.documentUploadRepository.createQueryBuilder('doc');
        if (uploadedBy)
            qb.andWhere('doc.uploadedBy = :uploadedBy', { uploadedBy });
        if (analysisStatus) {
            qb.andWhere('doc.analysisStatus = :analysisStatus', { analysisStatus });
        }
        if (originalFilename) {
            qb.andWhere('doc.originalFilename ILIKE :originalFilename', {
                originalFilename: `%${originalFilename}%`,
            });
        }
        if (mimeType)
            qb.andWhere('doc.mimeType = :mimeType', { mimeType });
        if (fromDate && toDate) {
            qb.andWhere('doc.uploadedAt BETWEEN :fromDate AND :toDate', {
                fromDate,
                toDate,
            });
        }
        else if (fromDate) {
            qb.andWhere('doc.uploadedAt >= :fromDate', { fromDate });
        }
        else if (toDate) {
            qb.andWhere('doc.uploadedAt <= :toDate', { toDate });
        }
        return qb.getMany();
    }
    async batchCreate(docs) {
        const created = this.documentUploadRepository.create(docs);
        return this.documentUploadRepository.save(created);
    }
    async batchUpdate(updates) {
        const results = [];
        for (const { id, update } of updates) {
            await this.documentUploadRepository.update(id, update);
            const updated = await this.findOne(id);
            if (updated)
                results.push(updated);
        }
        return results;
    }
    async batchDelete(ids) {
        const result = await this.documentUploadRepository.delete(ids);
        return result.affected || 0;
    }
    async findByCriticalDate(criticalDateId) {
        return this.documentUploadRepository
            .createQueryBuilder('doc')
            .innerJoin(critical_date_document_entity_1.CriticalDateDocument, 'cdd', 'cdd.documentId = doc.id AND cdd.criticalDateId = :criticalDateId', { criticalDateId })
            .getMany();
    }
};
exports.DocumentUploadService = DocumentUploadService;
exports.DocumentUploadService = DocumentUploadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(document_upload_entity_1.DocumentUpload)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DocumentUploadService);
//# sourceMappingURL=document-upload.service.js.map