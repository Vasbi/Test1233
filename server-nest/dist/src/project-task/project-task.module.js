"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTaskModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const project_task_service_1 = require("./project-task.service");
const project_task_controller_1 = require("./project-task.controller");
const project_task_entity_1 = require("./project-task.entity");
let ProjectTaskModule = class ProjectTaskModule {
};
exports.ProjectTaskModule = ProjectTaskModule;
exports.ProjectTaskModule = ProjectTaskModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([project_task_entity_1.ProjectTask])],
        controllers: [project_task_controller_1.ProjectTaskController],
        providers: [project_task_service_1.ProjectTaskService],
        exports: [project_task_service_1.ProjectTaskService],
    })
], ProjectTaskModule);
//# sourceMappingURL=project-task.module.js.map