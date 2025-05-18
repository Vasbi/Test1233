import { TaskRiskLinkService } from './task-risk-link.service';
import { CreateTaskRiskLinkDto } from './dto/create-task-risk-link.dto';
import { UpdateTaskRiskLinkDto } from './dto/update-task-risk-link.dto';
export declare class TaskRiskLinkController {
    private readonly service;
    constructor(service: TaskRiskLinkService);
    create(dto: CreateTaskRiskLinkDto): Promise<import("./task-risk-link.entity").TaskRiskLink>;
    findAll(): Promise<import("./task-risk-link.entity").TaskRiskLink[]>;
    findOne(id: string): Promise<import("./task-risk-link.entity").TaskRiskLink | null>;
    findByTask(taskId: string): Promise<import("./task-risk-link.entity").TaskRiskLink[]>;
    findByRisk(riskId: string): Promise<import("./task-risk-link.entity").TaskRiskLink[]>;
    update(id: string, dto: UpdateTaskRiskLinkDto): Promise<import("./task-risk-link.entity").TaskRiskLink | null>;
    remove(id: string): Promise<boolean>;
    advancedFindAll(body: {
        taskId?: number;
        riskId?: number;
    }): Promise<import("./task-risk-link.entity").TaskRiskLink[]>;
    batchCreate(links: CreateTaskRiskLinkDto[]): Promise<import("./task-risk-link.entity").TaskRiskLink[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateTaskRiskLinkDto;
    }[]): Promise<import("./task-risk-link.entity").TaskRiskLink[]>;
    batchDelete(ids: number[]): Promise<number>;
}
