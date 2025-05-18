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
exports.CriticalDateController = void 0;
const common_1 = require("@nestjs/common");
const critical_date_service_1 = require("./critical-date.service");
const create_critical_date_dto_1 = require("./dto/create-critical-date.dto");
const update_critical_date_dto_1 = require("./dto/update-critical-date.dto");
let CriticalDateController = class CriticalDateController {
    criticalDateService;
    constructor(criticalDateService) {
        this.criticalDateService = criticalDateService;
    }
    async create(createCriticalDateDto) {
        return await this.criticalDateService.create(createCriticalDateDto);
    }
    async findAll(projectName, status, department, fromDueDate, toDueDate) {
        return await this.criticalDateService.advancedFindAll({
            projectName,
            status,
            department,
            fromDueDate,
            toDueDate,
        });
    }
    async findOne(id) {
        return await this.criticalDateService.findOne(Number(id));
    }
    async update(id, updateCriticalDateDto) {
        return await this.criticalDateService.update(Number(id), updateCriticalDateDto);
    }
    async remove(id) {
        return await this.criticalDateService.remove(Number(id));
    }
    async batchCreate(criticalDates) {
        return await this.criticalDateService.batchCreate(criticalDates);
    }
    async batchUpdate(updates) {
        return await this.criticalDateService.batchUpdate(updates);
    }
    async batchDelete(ids) {
        return await this.criticalDateService.batchDelete(ids);
    }
};
exports.CriticalDateController = CriticalDateController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_critical_date_dto_1.CreateCriticalDateDto]),
    __metadata("design:returntype", Promise)
], CriticalDateController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('projectName')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('department')),
    __param(3, (0, common_1.Query)('fromDueDate')),
    __param(4, (0, common_1.Query)('toDueDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], CriticalDateController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CriticalDateController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_critical_date_dto_1.UpdateCriticalDateDto]),
    __metadata("design:returntype", Promise)
], CriticalDateController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CriticalDateController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CriticalDateController.prototype, "batchCreate", null);
__decorate([
    (0, common_1.Post)('batch-update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CriticalDateController.prototype, "batchUpdate", null);
__decorate([
    (0, common_1.Post)('batch-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CriticalDateController.prototype, "batchDelete", null);
exports.CriticalDateController = CriticalDateController = __decorate([
    (0, common_1.Controller)('critical-date'),
    __metadata("design:paramtypes", [critical_date_service_1.CriticalDateService])
], CriticalDateController);
//# sourceMappingURL=critical-date.controller.js.map