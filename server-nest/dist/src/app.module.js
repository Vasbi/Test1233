"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const risk_module_1 = require("./risk/risk.module");
const critical_date_module_1 = require("./critical-date/critical-date.module");
const issue_module_1 = require("./issue/issue.module");
const project_module_1 = require("./project/project.module");
const user_module_1 = require("./user/user.module");
const task_risk_link_module_1 = require("./task-risk-link/task-risk-link.module");
const project_task_module_1 = require("./project-task/project-task.module");
const document_upload_module_1 = require("./document-upload/document-upload.module");
const critical_date_document_module_1 = require("./critical-date-document/critical-date-document.module");
const external_access_token_module_1 = require("./external-access-token/external-access-token.module");
const external_access_permission_module_1 = require("./external-access-permission/external-access-permission.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    url: configService.get('DATABASE_URL'),
                    autoLoadEntities: true,
                    synchronize: configService.get('NODE_ENV') !== 'production',
                }),
            }),
            risk_module_1.RiskModule,
            critical_date_module_1.CriticalDateModule,
            issue_module_1.IssueModule,
            project_module_1.ProjectModule,
            user_module_1.UserModule,
            task_risk_link_module_1.TaskRiskLinkModule,
            project_task_module_1.ProjectTaskModule,
            document_upload_module_1.DocumentUploadModule,
            critical_date_document_module_1.CriticalDateDocumentModule,
            external_access_token_module_1.ExternalAccessTokenModule,
            external_access_permission_module_1.ExternalAccessPermissionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map