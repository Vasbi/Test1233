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
exports.RiskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const risk_entity_1 = require("./risk.entity");
let RiskService = class RiskService {
    riskRepository;
    constructor(riskRepository) {
        this.riskRepository = riskRepository;
    }
    async create(createRiskDto) {
        const risk = this.riskRepository.create(createRiskDto);
        return this.riskRepository.save(risk);
    }
    async findAll() {
        return this.riskRepository.find();
    }
    async findOne(id) {
        const result = await this.riskRepository.findOneBy({ id });
        return result === null ? undefined : result;
    }
    async update(id, updateDto) {
        await this.riskRepository.update(id, updateDto);
        return this.findOne(id);
    }
    async remove(id) {
        const result = await this.riskRepository.delete(id);
        return !!result.affected && result.affected > 0;
    }
    async advancedFindAll({ projectId, riskStatus, riskCategory, fromDate, toDate, }) {
        const where = {};
        if (projectId)
            where.projectId = projectId;
        if (riskStatus)
            where.riskStatus = riskStatus;
        if (riskCategory)
            where.riskCategory = riskCategory;
        if (fromDate && toDate) {
            where.openDate = (0, typeorm_2.Between)(fromDate, toDate);
        }
        else if (fromDate) {
            where.openDate = (0, typeorm_2.Between)(fromDate, new Date().toISOString());
        }
        else if (toDate) {
            where.openDate = (0, typeorm_2.Between)('1970-01-01', toDate);
        }
        return this.riskRepository.find({ where });
    }
    async batchCreate(risks) {
        const created = this.riskRepository.create(risks);
        return this.riskRepository.save(created);
    }
};
exports.RiskService = RiskService;
exports.RiskService = RiskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(risk_entity_1.Risk)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RiskService);
//# sourceMappingURL=risk.service.js.map