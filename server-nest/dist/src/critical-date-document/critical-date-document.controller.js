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
exports.CriticalDateDocumentController = void 0;
const common_1 = require("@nestjs/common");
const critical_date_document_service_1 = require("./critical-date-document.service");
const create_critical_date_document_dto_1 = require("./dto/create-critical-date-document.dto");
const update_critical_date_document_dto_1 = require("./dto/update-critical-date-document.dto");
let CriticalDateDocumentController = class CriticalDateDocumentController {
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
    update(id, dto) {
        return this.service.update(Number(id), dto);
    }
    remove(id) {
        return this.service.remove(Number(id));
    }
    advancedFindAll(body) {
        return this.service.advancedFindAll(body);
    }
    batchCreate(docs) {
        return this.service.batchCreate(docs);
    }
    batchUpdate(updates) {
        return this.service.batchUpdate(updates);
    }
    batchDelete(ids) {
        return this.service.batchDelete(ids);
    }
};
exports.CriticalDateDocumentController = CriticalDateDocumentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_critical_date_document_dto_1.CreateCriticalDateDocumentDto]),
    __metadata("design:returntype", void 0)
], CriticalDateDocumentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CriticalDateDocumentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CriticalDateDocumentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_critical_date_document_dto_1.UpdateCriticalDateDocumentDto]),
    __metadata("design:returntype", void 0)
], CriticalDateDocumentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CriticalDateDocumentController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('advanced'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CriticalDateDocumentController.prototype, "advancedFindAll", null);
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], CriticalDateDocumentController.prototype, "batchCreate", null);
__decorate([
    (0, common_1.Post)('batch-update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], CriticalDateDocumentController.prototype, "batchUpdate", null);
__decorate([
    (0, common_1.Post)('batch-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], CriticalDateDocumentController.prototype, "batchDelete", null);
exports.CriticalDateDocumentController = CriticalDateDocumentController = __decorate([
    (0, common_1.Controller)('critical-date-document'),
    __metadata("design:paramtypes", [critical_date_document_service_1.CriticalDateDocumentService])
], CriticalDateDocumentController);
//# sourceMappingURL=critical-date-document.controller.js.map