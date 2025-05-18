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
exports.ExternalAccessPermissionController = void 0;
const common_1 = require("@nestjs/common");
const external_access_permission_service_1 = require("./external-access-permission.service");
const create_external_access_permission_dto_1 = require("./dto/create-external-access-permission.dto");
const update_external_access_permission_dto_1 = require("./dto/update-external-access-permission.dto");
let ExternalAccessPermissionController = class ExternalAccessPermissionController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll(tokenId, projectId, criticalDateId) {
        if (tokenId) {
            return this.service.findByTokenId(tokenId);
        }
        if (projectId) {
            return this.service.findByProjectId(Number(projectId));
        }
        if (criticalDateId) {
            return this.service.findByCriticalDateId(Number(criticalDateId));
        }
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
    batchCreate(dtos) {
        return Promise.all(dtos.map((dto) => this.service.create(dto)));
    }
};
exports.ExternalAccessPermissionController = ExternalAccessPermissionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_external_access_permission_dto_1.CreateExternalAccessPermissionDto]),
    __metadata("design:returntype", void 0)
], ExternalAccessPermissionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('tokenId')),
    __param(1, (0, common_1.Query)('projectId')),
    __param(2, (0, common_1.Query)('criticalDateId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], ExternalAccessPermissionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExternalAccessPermissionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_external_access_permission_dto_1.UpdateExternalAccessPermissionDto]),
    __metadata("design:returntype", void 0)
], ExternalAccessPermissionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExternalAccessPermissionController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], ExternalAccessPermissionController.prototype, "batchCreate", null);
exports.ExternalAccessPermissionController = ExternalAccessPermissionController = __decorate([
    (0, common_1.Controller)('external-access-permission'),
    __metadata("design:paramtypes", [external_access_permission_service_1.ExternalAccessPermissionService])
], ExternalAccessPermissionController);
//# sourceMappingURL=external-access-permission.controller.js.map