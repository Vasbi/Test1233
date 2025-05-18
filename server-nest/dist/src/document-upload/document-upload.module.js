"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentUploadModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const document_upload_service_1 = require("./document-upload.service");
const document_upload_controller_1 = require("./document-upload.controller");
const document_upload_entity_1 = require("./document-upload.entity");
let DocumentUploadModule = class DocumentUploadModule {
};
exports.DocumentUploadModule = DocumentUploadModule;
exports.DocumentUploadModule = DocumentUploadModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([document_upload_entity_1.DocumentUpload]), config_1.ConfigModule],
        controllers: [document_upload_controller_1.DocumentUploadController],
        providers: [document_upload_service_1.DocumentUploadService],
        exports: [document_upload_service_1.DocumentUploadService],
    })
], DocumentUploadModule);
//# sourceMappingURL=document-upload.module.js.map