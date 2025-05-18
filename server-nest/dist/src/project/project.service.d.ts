import { Repository } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
export declare class ProjectService {
    private readonly projectRepository;
    constructor(projectRepository: Repository<Project>);
    create(createProjectDto: CreateProjectDto): Promise<Project>;
    findAll(): Promise<Project[]>;
    findOne(id: number): Promise<Project | null>;
    update(id: number, updateProjectDto: UpdateProjectDto): Promise<Project | null>;
    remove(id: number): Promise<boolean>;
    advancedFindAll({ organization, projectManager, registerName, fromRegisterDate, toRegisterDate, }: {
        organization?: string;
        projectManager?: string;
        registerName?: string;
        fromRegisterDate?: string;
        toRegisterDate?: string;
    }): Promise<Project[]>;
    batchCreate(projects: CreateProjectDto[]): Promise<Project[]>;
}
