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
exports.CriticalDate = void 0;
const typeorm_1 = require("typeorm");
let CriticalDate = class CriticalDate {
    id;
    title;
    status;
    entity;
    department;
    state;
    contractValue;
    criticalIssue;
    criticalIssueDescription;
    reminderType;
    projectName;
    projectAddress;
    agreementType;
    agreementDate;
    agreementReference;
    dueDate;
    reminderScheduling;
    occurrenceFrequency;
    occurrenceStartDate;
    occurrenceLastNotificationDate;
    reminder1Days;
    reminder2Days;
    reminder3Days;
    reminder4Days;
    postTriggerDateReminderDays;
    hasRelatedClause;
    relatedClauseAndContractDetails;
    relatedClauseAction;
    relatedAgreementType;
    relatedAgreementDate;
    blueCHPResponsiblePerson;
    blueCHPManager;
    externalResponsiblePartyEmail;
    emails;
    createdAt;
    updatedAt;
    createdBy;
    lastModifiedBy;
};
exports.CriticalDate = CriticalDate;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CriticalDate.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CriticalDate.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CriticalDate.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "entity", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: true }),
    __metadata("design:type", Number)
], CriticalDate.prototype, "contractValue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "criticalIssue", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "criticalIssueDescription", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "reminderType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "projectName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "projectAddress", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "agreementType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CriticalDate.prototype, "agreementDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "agreementReference", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], CriticalDate.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "reminderScheduling", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "occurrenceFrequency", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CriticalDate.prototype, "occurrenceStartDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CriticalDate.prototype, "occurrenceLastNotificationDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CriticalDate.prototype, "reminder1Days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CriticalDate.prototype, "reminder2Days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CriticalDate.prototype, "reminder3Days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CriticalDate.prototype, "reminder4Days", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CriticalDate.prototype, "postTriggerDateReminderDays", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', default: false }),
    __metadata("design:type", Boolean)
], CriticalDate.prototype, "hasRelatedClause", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "relatedClauseAndContractDetails", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "relatedClauseAction", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "relatedAgreementType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], CriticalDate.prototype, "relatedAgreementDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "blueCHPResponsiblePerson", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "blueCHPManager", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], CriticalDate.prototype, "externalResponsiblePartyEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { array: true, nullable: true }),
    __metadata("design:type", Array)
], CriticalDate.prototype, "emails", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CriticalDate.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CriticalDate.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CriticalDate.prototype, "createdBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], CriticalDate.prototype, "lastModifiedBy", void 0);
exports.CriticalDate = CriticalDate = __decorate([
    (0, typeorm_1.Entity)('critical_dates')
], CriticalDate);
//# sourceMappingURL=critical-date.entity.js.map