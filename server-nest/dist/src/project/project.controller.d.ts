import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(createProjectDto: CreateProjectDto): Promise<import("./project.entity").Project>;
    findAll(organization?: string, projectManager?: string, registerName?: string, fromRegisterDate?: string, toRegisterDate?: string): Promise<import("./project.entity").Project[]>;
    findOne(id: string): Promise<import("./project.entity").Project | null>;
    update(id: string, updateProjectDto: UpdateProjectDto): Promise<import("./project.entity").Project | null>;
    remove(id: string): Promise<boolean>;
    batchCreate(projects: CreateProjectDto[]): Promise<import("./project.entity").Project[]>;
}
