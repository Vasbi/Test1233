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
exports.ProjectTaskController = void 0;
const common_1 = require("@nestjs/common");
const project_task_service_1 = require("./project-task.service");
const create_project_task_dto_1 = require("./dto/create-project-task.dto");
const update_project_task_dto_1 = require("./dto/update-project-task.dto");
let ProjectTaskController = class ProjectTaskController {
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
    findByProject(projectId) {
        return this.service.findByProject(Number(projectId));
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
    batchCreate(tasks) {
        return this.service.batchCreate(tasks);
    }
    batchUpdate(updates) {
        return this.service.batchUpdate(updates);
    }
    batchDelete(ids) {
        return this.service.batchDelete(ids);
    }
};
exports.ProjectTaskController = ProjectTaskController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_task_dto_1.CreateProjectTaskDto]),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('by-project/:projectId'),
    __param(0, (0, common_1.Param)('projectId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "findByProject", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_project_task_dto_1.UpdateProjectTaskDto]),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('advanced'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "advancedFindAll", null);
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "batchCreate", null);
__decorate([
    (0, common_1.Post)('batch-update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "batchUpdate", null);
__decorate([
    (0, common_1.Post)('batch-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ProjectTaskController.prototype, "batchDelete", null);
exports.ProjectTaskController = ProjectTaskController = __decorate([
    (0, common_1.Controller)('project-task'),
    __metadata("design:paramtypes", [project_task_service_1.ProjectTaskService])
], ProjectTaskController);
//# sourceMappingURL=project-task.controller.js.map