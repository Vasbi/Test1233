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
exports.CriticalDateDocumentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const critical_date_document_entity_1 = require("./critical-date-document.entity");
let CriticalDateDocumentService = class CriticalDateDocumentService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(dto) {
        const entity = this.repo.create(dto);
        return this.repo.save(entity);
    }
    async findAll() {
        return this.repo.find();
    }
    async findOne(id) {
        return this.repo.findOneBy({ id });
    }
    async update(id, dto) {
        const entity = await this.repo.findOneBy({ id });
        if (!entity)
            return null;
        Object.assign(entity, dto);
        return this.repo.save(entity);
    }
    async remove(id) {
        const result = await this.repo.delete(id);
        return result.affected !== 0;
    }
    async advancedFindAll({ criticalDateId, uploadedBy, fromDate, toDate, filename, }) {
        const qb = this.repo.createQueryBuilder('doc');
        if (criticalDateId)
            qb.andWhere('doc.criticalDateId = :criticalDateId', { criticalDateId });
        if (uploadedBy)
            qb.andWhere('doc.uploadedBy = :uploadedBy', { uploadedBy });
        if (filename) {
            qb.andWhere('doc.filename ILIKE :filename', {
                filename: `%${filename}%`,
            });
        }
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
        const created = this.repo.create(docs);
        return this.repo.save(created);
    }
    async batchUpdate(updates) {
        const results = [];
        for (const { id, update } of updates) {
            await this.repo.update(id, update);
            const updated = await this.findOne(id);
            if (updated)
                results.push(updated);
        }
        return results;
    }
    async batchDelete(ids) {
        const result = await this.repo.delete(ids);
        return result.affected || 0;
    }
};
exports.CriticalDateDocumentService = CriticalDateDocumentService;
exports.CriticalDateDocumentService = CriticalDateDocumentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(critical_date_document_entity_1.CriticalDateDocument)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CriticalDateDocumentService);
//# sourceMappingURL=critical-date-document.service.js.map