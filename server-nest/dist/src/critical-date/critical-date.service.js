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
exports.CriticalDateService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const critical_date_entity_1 = require("./critical-date.entity");
let CriticalDateService = class CriticalDateService {
    criticalDateRepository;
    constructor(criticalDateRepository) {
        this.criticalDateRepository = criticalDateRepository;
    }
    async create(createCriticalDateDto) {
        const criticalDate = this.criticalDateRepository.create({
            ...createCriticalDateDto,
        });
        return this.criticalDateRepository.save(criticalDate);
    }
    async findAll() {
        return this.criticalDateRepository.find();
    }
    async findOne(id) {
        const result = await this.criticalDateRepository.findOneBy({ id });
        return result === null ? undefined : result;
    }
    async update(id, updateDto) {
        await this.criticalDateRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.criticalDateRepository.delete(id);
        return !!result.affected && result.affected > 0;
    }
    async advancedFindAll({ projectName, status, department, fromDueDate, toDueDate, }) {
        const where = {};
        if (projectName)
            where.projectName = projectName;
        if (status)
            where.status = status;
        if (department)
            where.department = department;
        if (fromDueDate && toDueDate) {
            where.dueDate = (0, typeorm_2.Between)(new Date(fromDueDate), new Date(toDueDate));
        }
        else if (fromDueDate) {
            where.dueDate = (0, typeorm_2.Between)(new Date(fromDueDate), new Date());
        }
        else if (toDueDate) {
            where.dueDate = (0, typeorm_2.Between)(new Date('1970-01-01'), new Date(toDueDate));
        }
        return this.criticalDateRepository.find({ where });
    }
    async batchCreate(criticalDates) {
        const created = this.criticalDateRepository.create(criticalDates);
        return this.criticalDateRepository.save(created);
    }
    async batchUpdate(updates) {
        const results = [];
        for (const { id, update } of updates) {
            await this.criticalDateRepository.update(id, update);
            const updated = await this.findOne(id);
            if (updated)
                results.push(updated);
        }
        return results;
    }
    async batchDelete(ids) {
        const result = await this.criticalDateRepository.delete(ids);
        return result.affected || 0;
    }
};
exports.CriticalDateService = CriticalDateService;
exports.CriticalDateService = CriticalDateService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(critical_date_entity_1.CriticalDate)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CriticalDateService);
//# sourceMappingURL=critical-date.service.js.map