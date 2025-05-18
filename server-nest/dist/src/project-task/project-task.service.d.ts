import { Repository } from 'typeorm';
import { ProjectTask } from './project-task.entity';
import { CreateProjectTaskDto } from './dto/create-project-task.dto';
import { UpdateProjectTaskDto } from './dto/update-project-task.dto';
export declare class ProjectTaskService {
    private readonly projectTaskRepository;
    constructor(projectTaskRepository: Repository<ProjectTask>);
    create(createDto: CreateProjectTaskDto): Promise<ProjectTask>;
    findAll(): Promise<ProjectTask[]>;
    findOne(id: number): Promise<ProjectTask | null>;
    findByProject(projectId: number): Promise<ProjectTask[]>;
    update(id: number, updateDto: UpdateProjectTaskDto): Promise<ProjectTask | null>;
    remove(id: number): Promise<boolean>;
    advancedFindAll({ projectId, status, title, assignedTo, fromDueDate, toDueDate, }: {
        projectId?: number;
        status?: string;
        title?: string;
        assignedTo?: number;
        fromDueDate?: string;
        toDueDate?: string;
    }): Promise<ProjectTask[]>;
    batchCreate(tasks: CreateProjectTaskDto[]): Promise<ProjectTask[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateProjectTaskDto;
    }[]): Promise<ProjectTask[]>;
    batchDelete(ids: number[]): Promise<number>;
}
