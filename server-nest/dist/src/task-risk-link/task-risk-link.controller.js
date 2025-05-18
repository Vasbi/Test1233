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
exports.TaskRiskLinkController = void 0;
const common_1 = require("@nestjs/common");
const task_risk_link_service_1 = require("./task-risk-link.service");
const create_task_risk_link_dto_1 = require("./dto/create-task-risk-link.dto");
const update_task_risk_link_dto_1 = require("./dto/update-task-risk-link.dto");
let TaskRiskLinkController = class TaskRiskLinkController {
    service;
    constructor(service) {
        this.service = service;
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
    findByTask(taskId) {
        return this.service.findByTask(Number(taskId));
    }
    findByRisk(riskId) {
        return this.service.findByRisk(Number(riskId));
    }
    update(id, dto) {
        return this.service.update(Number(id), dto);
    }
    remove(id) {
        return this.service.remove(Number(id));
    }
    advancedFindAll(body) {
        return this.service.advancedFindAll(body);
    }
    batchCreate(links) {
        return this.service.batchCreate(links);
    }
    batchUpdate(updates) {
        return this.service.batchUpdate(updates);
    }
    batchDelete(ids) {
        return this.service.batchDelete(ids);
    }
};
exports.TaskRiskLinkController = TaskRiskLinkController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_task_risk_link_dto_1.CreateTaskRiskLinkDto]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('by-task/:taskId'),
    __param(0, (0, common_1.Param)('taskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "findByTask", null);
__decorate([
    (0, common_1.Get)('by-risk/:riskId'),
    __param(0, (0, common_1.Param)('riskId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "findByRisk", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_task_risk_link_dto_1.UpdateTaskRiskLinkDto]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('advanced'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "advancedFindAll", null);
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "batchCreate", null);
__decorate([
    (0, common_1.Post)('batch-update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "batchUpdate", null);
__decorate([
    (0, common_1.Post)('batch-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], TaskRiskLinkController.prototype, "batchDelete", null);
exports.TaskRiskLinkController = TaskRiskLinkController = __decorate([
    (0, common_1.Controller)('task-risk-link'),
    __metadata("design:paramtypes", [task_risk_link_service_1.TaskRiskLinkService])
], TaskRiskLinkController);
//# sourceMappingURL=task-risk-link.controller.js.map