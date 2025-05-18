"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriticalDateModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const critical_date_service_1 = require("./critical-date.service");
const critical_date_controller_1 = require("./critical-date.controller");
const critical_date_entity_1 = require("./critical-date.entity");
let CriticalDateModule = class CriticalDateModule {
};
exports.CriticalDateModule = CriticalDateModule;
exports.CriticalDateModule = CriticalDateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([critical_date_entity_1.CriticalDate])],
        controllers: [critical_date_controller_1.CriticalDateController],
        providers: [critical_date_service_1.CriticalDateService],
        exports: [critical_date_service_1.CriticalDateService],
    })
], CriticalDateModule);
//# sourceMappingURL=critical-date.module.js.map