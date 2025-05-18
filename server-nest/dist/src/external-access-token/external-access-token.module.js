"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAccessTokenModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const external_access_token_service_1 = require("./external-access-token.service");
const external_access_token_controller_1 = require("./external-access-token.controller");
const external_access_token_entity_1 = require("./external-access-token.entity");
let ExternalAccessTokenModule = class ExternalAccessTokenModule {
};
exports.ExternalAccessTokenModule = ExternalAccessTokenModule;
exports.ExternalAccessTokenModule = ExternalAccessTokenModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([external_access_token_entity_1.ExternalAccessToken])],
        controllers: [external_access_token_controller_1.ExternalAccessTokenController],
        providers: [external_access_token_service_1.ExternalAccessTokenService],
        exports: [external_access_token_service_1.ExternalAccessTokenService],
    })
], ExternalAccessTokenModule);
//# sourceMappingURL=external-access-token.module.js.map