"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAccessPermissionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const external_access_permission_entity_1 = require("./external-access-permission.entity");
const external_access_permission_service_1 = require("./external-access-permission.service");
const external_access_permission_controller_1 = require("./external-access-permission.controller");
let ExternalAccessPermissionModule = class ExternalAccessPermissionModule {
};
exports.ExternalAccessPermissionModule = ExternalAccessPermissionModule;
exports.ExternalAccessPermissionModule = ExternalAccessPermissionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([external_access_permission_entity_1.ExternalAccessPermission])],
        providers: [external_access_permission_service_1.ExternalAccessPermissionService],
        controllers: [external_access_permission_controller_1.ExternalAccessPermissionController],
        exports: [external_access_permission_service_1.ExternalAccessPermissionService],
    })
], ExternalAccessPermissionModule);
//# sourceMappingURL=external-access-permission.module.js.map