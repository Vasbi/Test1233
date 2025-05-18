import { ProjectTaskService } from './project-task.service';
import { CreateProjectTaskDto } from './dto/create-project-task.dto';
import { UpdateProjectTaskDto } from './dto/update-project-task.dto';
export declare class ProjectTaskController {
    private readonly service;
    constructor(service: ProjectTaskService);
    create(dto: CreateProjectTaskDto): Promise<import("./project-task.entity").ProjectTask>;
    findAll(): Promise<import("./project-task.entity").ProjectTask[]>;
    findOne(id: string): Promise<import("./project-task.entity").ProjectTask | null>;
    findByProject(projectId: string): Promise<import("./project-task.entity").ProjectTask[]>;
    update(id: string, dto: UpdateProjectTaskDto): Promise<import("./project-task.entity").ProjectTask | null>;
    remove(id: string): Promise<boolean>;
    advancedFindAll(body: {
        projectId?: number;
        status?: string;
        title?: string;
        assignedTo?: number;
        fromDueDate?: string;
        toDueDate?: string;
    }): Promise<import("./project-task.entity").ProjectTask[]>;
    batchCreate(tasks: CreateProjectTaskDto[]): Promise<import("./project-task.entity").ProjectTask[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateProjectTaskDto;
    }[]): Promise<import("./project-task.entity").ProjectTask[]>;
    batchDelete(ids: number[]): Promise<number>;
}
