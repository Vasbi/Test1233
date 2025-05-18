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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalAccessPermission = void 0;
const typeorm_1 = require("typeorm");
const external_access_token_entity_1 = require("../external-access-token/external-access-token.entity");
const critical_date_entity_1 = require("../critical-date/critical-date.entity");
const project_entity_1 = require("../project/project.entity");
let ExternalAccessPermission = class ExternalAccessPermission {
    id;
    tokenId;
    criticalDateId;
    projectId;
    canView;
    canEdit;
    createdAt;
    token;
    criticalDate;
    project;
};
exports.ExternalAccessPermission = ExternalAccessPermission;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ExternalAccessPermission.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], ExternalAccessPermission.prototype, "tokenId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ExternalAccessPermission.prototype, "criticalDateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], ExternalAccessPermission.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ExternalAccessPermission.prototype, "canView", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ExternalAccessPermission.prototype, "canEdit", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], ExternalAccessPermission.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => external_access_token_entity_1.ExternalAccessToken, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'tokenId' }),
    __metadata("design:type", external_access_token_entity_1.ExternalAccessToken)
], ExternalAccessPermission.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => critical_date_entity_1.CriticalDate, { onDelete: 'CASCADE', nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'criticalDateId' }),
    __metadata("design:type", critical_date_entity_1.CriticalDate)
], ExternalAccessPermission.prototype, "criticalDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'projectId' }),
    __metadata("design:type", project_entity_1.Project)
], ExternalAccessPermission.prototype, "project", void 0);
exports.ExternalAccessPermission = ExternalAccessPermission = __decorate([
    (0, typeorm_1.Entity)('external_access_permissions')
], ExternalAccessPermission);
//# sourceMappingURL=external-access-permission.entity.js.map