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
exports.IssueService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const issue_entity_1 = require("./issue.entity");
let IssueService = class IssueService {
    issueRepository;
    constructor(issueRepository) {
        this.issueRepository = issueRepository;
    }
    async create(createIssueDto) {
        const issue = this.issueRepository.create({ ...createIssueDto });
        return this.issueRepository.save(issue);
    }
    async findAll() {
        return this.issueRepository.find();
    }
    async findOne(id) {
        const result = await this.issueRepository.findOneBy({ id });
        return result === null ? undefined : result;
    }
    async update(id, updateDto) {
        await this.issueRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.issueRepository.delete(id);
        return !!result.affected && result.affected > 0;
    }
    async advancedFindAll({ projectId, status, category, fromDate, toDate, title, description, assignedTo, }) {
        const where = {};
        if (projectId)
            where.projectId = projectId;
        if (status)
            where.status = status;
        if (category)
            where.category = category;
        if (fromDate && toDate) {
            where.issueDate = (0, typeorm_2.Between)(fromDate, toDate);
        }
        else if (fromDate) {
            where.issueDate = (0, typeorm_2.Between)(fromDate, new Date().toISOString());
        }
        else if (toDate) {
            where.issueDate = (0, typeorm_2.Between)('1970-01-01', toDate);
        }
        const qb = this.issueRepository.createQueryBuilder('issue').where(where);
        if (title) {
            qb.andWhere('issue.title ILIKE :title', {
                title: `%${title}%`,
            });
        }
        if (description) {
            qb.andWhere('issue.description ILIKE :description', {
                description: `%${description}%`,
            });
        }
        if (assignedTo) {
            qb.andWhere('issue.assignedTo = :assignedTo', { assignedTo });
        }
        return qb.getMany();
    }
    async batchCreate(issues) {
        const created = this.issueRepository.create(issues);
        return this.issueRepository.save(created);
    }
    async batchUpdate(updates) {
        const results = [];
        for (const { id, update } of updates) {
            await this.issueRepository.update(id, update);
            const updated = await this.findOne(id);
            if (updated)
                results.push(updated);
        }
        return results;
    }
    async batchDelete(ids) {
        const result = await this.issueRepository.delete(ids);
        return result.affected || 0;
    }
};
exports.IssueService = IssueService;
exports.IssueService = IssueService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(issue_entity_1.Issue)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], IssueService);
//# sourceMappingURL=issue.service.js.map