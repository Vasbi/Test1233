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
exports.IssueController = void 0;
const common_1 = require("@nestjs/common");
const issue_service_1 = require("./issue.service");
const create_issue_dto_1 = require("./dto/create-issue.dto");
const update_issue_dto_1 = require("./dto/update-issue.dto");
let IssueController = class IssueController {
    issueService;
    constructor(issueService) {
        this.issueService = issueService;
    }
    create(createIssueDto) {
        return this.issueService.create(createIssueDto);
    }
    findAll(projectId, status, category, fromDate, toDate, title, description, assignedTo) {
        return this.issueService.advancedFindAll({
            projectId,
            status,
            category,
            fromDate,
            toDate,
            title,
            description,
            assignedTo,
        });
    }
    findOne(id) {
        return this.issueService.findOne(Number(id));
    }
    update(id, updateIssueDto) {
        return this.issueService.update(Number(id), updateIssueDto);
    }
    remove(id) {
        return this.issueService.remove(Number(id));
    }
    batchCreate(issues) {
        return this.issueService.batchCreate(issues);
    }
    batchUpdate(updates) {
        return this.issueService.batchUpdate(updates);
    }
    batchDelete(ids) {
        return this.issueService.batchDelete(ids);
    }
};
exports.IssueController = IssueController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_issue_dto_1.CreateIssueDto]),
    __metadata("design:returntype", void 0)
], IssueController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('projectId')),
    __param(1, (0, common_1.Query)('status')),
    __param(2, (0, common_1.Query)('category')),
    __param(3, (0, common_1.Query)('fromDate')),
    __param(4, (0, common_1.Query)('toDate')),
    __param(5, (0, common_1.Query)('title')),
    __param(6, (0, common_1.Query)('description')),
    __param(7, (0, common_1.Query)('assignedTo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String, String, String, String, String, Number]),
    __metadata("design:returntype", void 0)
], IssueController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IssueController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_issue_dto_1.UpdateIssueDto]),
    __metadata("design:returntype", void 0)
], IssueController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], IssueController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('batch'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], IssueController.prototype, "batchCreate", null);
__decorate([
    (0, common_1.Post)('batch-update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], IssueController.prototype, "batchUpdate", null);
__decorate([
    (0, common_1.Post)('batch-delete'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], IssueController.prototype, "batchDelete", null);
exports.IssueController = IssueController = __decorate([
    (0, common_1.Controller)('issue'),
    __metadata("design:paramtypes", [issue_service_1.IssueService])
], IssueController);
//# sourceMappingURL=issue.controller.js.map