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
exports.Issue = void 0;
const typeorm_1 = require("typeorm");
let Issue = class Issue {
    id;
    priorityRank;
    uniqueId;
    riskId;
    issueDate;
    raisedBy;
    ownedBy;
    issueEvent;
    issueEffect;
    resolution;
    category;
    impact;
    status;
    assignedTo;
    closedDate;
    comments;
    criticalDateId;
    dueDate;
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
exports.Issue = Issue;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Issue.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Issue.prototype, "priorityRank", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issue.prototype, "uniqueId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Issue.prototype, "riskId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issue.prototype, "issueDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issue.prototype, "raisedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issue.prototype, "ownedBy", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issue.prototype, "issueEvent", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issue.prototype, "issueEffect", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Issue.prototype, "resolution", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issue.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Issue.prototype, "impact", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issue.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Issue.prototype, "assignedTo", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Issue.prototype, "closedDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Issue.prototype, "comments", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "criticalDateId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Issue.prototype, "dueDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Issue.prototype, "includeCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "optimisticCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "mostLikelyCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "pessimisticCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "expectedCost", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "emv", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Issue.prototype, "costAllocationModel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Issue.prototype, "contractDetails", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Issue.prototype, "dayType", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "optimisticDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "mostLikelyDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "pessimisticDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "expectedDuration", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "calculatedBusinessDays", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "calculatedCalendarDays", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "probabilityAdjustedDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "delayDuration", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Issue.prototype, "delayClassification", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Issue.prototype, "criticalPathImpact", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "floatConsumption", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "initialRiskRating", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Issue.prototype, "residualRiskRating", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Issue.prototype, "projectId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Issue.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Issue.prototype, "updatedAt", void 0);
exports.Issue = Issue = __decorate([
    (0, typeorm_1.Entity)('issues')
], Issue);
//# sourceMappingURL=issue.entity.js.map