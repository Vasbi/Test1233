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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const project_entity_1 = require("./project.entity");
let ProjectService = class ProjectService {
    projectRepository;
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async create(createProjectDto) {
        const project = this.projectRepository.create(createProjectDto);
        return this.projectRepository.save(project);
    }
    async findAll() {
        return this.projectRepository.find();
    }
    async findOne(id) {
        return this.projectRepository.findOneBy({ id });
    }
    async update(id, updateProjectDto) {
        const project = await this.projectRepository.findOneBy({ id });
        if (!project)
            return null;
        Object.assign(project, updateProjectDto);
        return this.projectRepository.save(project);
    }
    async remove(id) {
        const result = await this.projectRepository.delete(id);
        return result.affected !== 0;
    }
    async advancedFindAll({ organization, projectManager, registerName, fromRegisterDate, toRegisterDate, }) {
        const where = {};
        if (organization)
            where.organization = organization;
        if (projectManager)
            where.projectManager = projectManager;
        if (registerName)
            where.registerName = registerName;
        if (fromRegisterDate && toRegisterDate) {
            where.registerDate = (0, typeorm_2.Between)(fromRegisterDate, toRegisterDate);
        }
        else if (fromRegisterDate) {
            where.registerDate = (0, typeorm_2.Between)(fromRegisterDate, new Date().toISOString());
        }
        else if (toRegisterDate) {
            where.registerDate = (0, typeorm_2.Between)('1970-01-01', toRegisterDate);
        }
        return this.projectRepository.find({ where });
    }
    async batchCreate(projects) {
        const created = this.projectRepository.create(projects);
        return this.projectRepository.save(created);
    }
};
exports.ProjectService = ProjectService;
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.Project)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectService);
//# sourceMappingURL=project.service.js.map