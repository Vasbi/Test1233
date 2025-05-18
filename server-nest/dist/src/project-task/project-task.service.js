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
exports.ProjectTaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_task_entity_1 = require("./project-task.entity");
let ProjectTaskService = class ProjectTaskService {
    projectTaskRepository;
    constructor(projectTaskRepository) {
        this.projectTaskRepository = projectTaskRepository;
    }
    async create(createDto) {
        const task = this.projectTaskRepository.create(createDto);
        return this.projectTaskRepository.save(task);
    }
    async findAll() {
        return this.projectTaskRepository.find();
    }
    async findOne(id) {
        return this.projectTaskRepository.findOneBy({ id });
    }
    async findByProject(projectId) {
        return this.projectTaskRepository.find({ where: { projectId } });
    }
    async update(id, updateDto) {
        const task = await this.projectTaskRepository.findOneBy({ id });
        if (!task)
            return null;
        Object.assign(task, updateDto);
        return this.projectTaskRepository.save(task);
    }
    async remove(id) {
        const result = await this.projectTaskRepository.delete(id);
        return result.affected !== 0;
    }
    async advancedFindAll({ projectId, status, title, assignedTo, fromDueDate, toDueDate, }) {
        const qb = this.projectTaskRepository.createQueryBuilder('task');
        if (projectId)
            qb.andWhere('task.projectId = :projectId', { projectId });
        if (status)
            qb.andWhere('task.status = :status', { status });
        if (title)
            qb.andWhere('task.title ILIKE :title', { title: `%${title}%` });
        if (assignedTo) {
            qb.andWhere('task.assignedTo = :assignedTo', { assignedTo });
        }
        if (fromDueDate && toDueDate) {
            qb.andWhere('task.dueDate BETWEEN :fromDueDate AND :toDueDate', {
                fromDueDate,
                toDueDate,
            });
        }
        else if (fromDueDate) {
            qb.andWhere('task.dueDate >= :fromDueDate', { fromDueDate });
        }
        else if (toDueDate) {
            qb.andWhere('task.dueDate <= :toDueDate', { toDueDate });
        }
        return qb.getMany();
    }
    async batchCreate(tasks) {
        const created = this.projectTaskRepository.create(tasks);
        return this.projectTaskRepository.save(created);
    }
    async batchUpdate(updates) {
        const results = [];
        for (const { id, update } of updates) {
            await this.projectTaskRepository.update(id, update);
            const updated = await this.findOne(id);
            if (updated)
                results.push(updated);
        }
        return results;
    }
    async batchDelete(ids) {
        const result = await this.projectTaskRepository.delete(ids);
        return result.affected || 0;
    }
};
exports.ProjectTaskService = ProjectTaskService;
exports.ProjectTaskService = ProjectTaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_task_entity_1.ProjectTask)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectTaskService);
//# sourceMappingURL=project-task.service.js.map