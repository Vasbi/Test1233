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
exports.TaskRiskLinkService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_risk_link_entity_1 = require("./task-risk-link.entity");
let TaskRiskLinkService = class TaskRiskLinkService {
    taskRiskLinkRepository;
    constructor(taskRiskLinkRepository) {
        this.taskRiskLinkRepository = taskRiskLinkRepository;
    }
    async create(createDto) {
        const link = this.taskRiskLinkRepository.create(createDto);
        return this.taskRiskLinkRepository.save(link);
    }
    async findAll() {
        return this.taskRiskLinkRepository.find();
    }
    async findOne(id) {
        return this.taskRiskLinkRepository.findOneBy({ id });
    }
    async findByTask(taskId) {
        return this.taskRiskLinkRepository.find({ where: { taskId } });
    }
    async findByRisk(riskId) {
        return this.taskRiskLinkRepository.find({ where: { riskId } });
    }
    async update(id, updateDto) {
        const link = await this.taskRiskLinkRepository.findOneBy({ id });
        if (!link)
            return null;
        Object.assign(link, updateDto);
        return this.taskRiskLinkRepository.save(link);
    }
    async remove(id) {
        const result = await this.taskRiskLinkRepository.delete(id);
        return result.affected !== 0;
    }
    async advancedFindAll({ taskId, riskId, }) {
        const qb = this.taskRiskLinkRepository.createQueryBuilder('link');
        if (taskId)
            qb.andWhere('link.taskId = :taskId', { taskId });
        if (riskId)
            qb.andWhere('link.riskId = :riskId', { riskId });
        return qb.getMany();
    }
    async batchCreate(links) {
        const created = this.taskRiskLinkRepository.create(links);
        return this.taskRiskLinkRepository.save(created);
    }
    async batchUpdate(updates) {
        const results = [];
        for (const { id, update } of updates) {
            await this.taskRiskLinkRepository.update(id, update);
            const updated = await this.findOne(id);
            if (updated)
                results.push(updated);
        }
        return results;
    }
    async batchDelete(ids) {
        const result = await this.taskRiskLinkRepository.delete(ids);
        return result.affected || 0;
    }
};
exports.TaskRiskLinkService = TaskRiskLinkService;
exports.TaskRiskLinkService = TaskRiskLinkService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_risk_link_entity_1.TaskRiskLink)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaskRiskLinkService);
//# sourceMappingURL=task-risk-link.service.js.map