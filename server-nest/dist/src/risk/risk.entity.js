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
exports.Risk = void 0;
const typeorm_1 = require("typeorm");
let Risk = class Risk {
    id;
    priorityRank;
    riskId;
    issueId;
    openDate;
    raisedBy;
    ownedBy;
    riskCause;
    riskEvent;
    riskEffect;
    riskCategory;
    probability;
    impact;
    riskRating;
    adjustedRiskRating;
    riskStatus;
    responseType;
    mitigation;
    prevention;
    comment;
    registerType;
    department;
    actionBy;
    dueDate;
    contingency;
    responseOwner;
    statusChangeDate;
    criticalDateId;
    includeCost;
    optimisticCost;
    mostLikelyCost;
    pessimisticCost;
    expectedCost;
    emv;
    costAllocationModel;
    contractDetails;
    dayType;
    optimisticDuration;
    mostLikelyDuration;
    pessimisticDuration;
    expectedDuration;
    calculatedBusinessDays;
    calculatedCalendarDays;
    probabilityAdjustedDuration;
    delayDuration;
    delayClassification;
    criticalPathImpact;
    floatConsumption;
    initialRiskRating;
    residualRiskRating;
    projectId;
    createdAt;
    updatedAt;
};
exports.Risk = Risk;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Risk.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Risk.prototype, "priorityRank", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "riskId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "issueId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "openDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "raisedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "ownedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "riskCause", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "riskEvent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "riskEffect", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "riskCategory", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Risk.prototype, "probability", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Risk.prototype, "impact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Risk.prototype, "riskRating", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "adjustedRiskRating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "riskStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "responseType", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "mitigation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Risk.prototype, "prevention", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'default' }),
    __metadata("design:type", String)
], Risk.prototype, "registerType", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'default' }),
    __metadata("design:type", String)
], Risk.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "actionBy", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "contingency", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "responseOwner", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "statusChangeDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "criticalDateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Risk.prototype, "includeCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "optimisticCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "mostLikelyCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "pessimisticCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "expectedCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "emv", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "costAllocationModel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "contractDetails", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "dayType", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "optimisticDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "mostLikelyDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "pessimisticDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "expectedDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "calculatedBusinessDays", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "calculatedCalendarDays", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "probabilityAdjustedDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "delayDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Risk.prototype, "delayClassification", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Risk.prototype, "criticalPathImpact", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "floatConsumption", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "initialRiskRating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Risk.prototype, "residualRiskRating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Risk.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Risk.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Risk.prototype, "updatedAt", void 0);
exports.Risk = Risk = __decorate([
    (0, typeorm_1.Entity)('risks')
], Risk);
//# sourceMappingURL=risk.entity.js.map