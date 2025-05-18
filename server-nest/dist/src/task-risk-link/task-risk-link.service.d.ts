import { Repository } from 'typeorm';
import { TaskRiskLink } from './task-risk-link.entity';
import { CreateTaskRiskLinkDto } from './dto/create-task-risk-link.dto';
import { UpdateTaskRiskLinkDto } from './dto/update-task-risk-link.dto';
export declare class TaskRiskLinkService {
    private readonly taskRiskLinkRepository;
    constructor(taskRiskLinkRepository: Repository<TaskRiskLink>);
    create(createDto: CreateTaskRiskLinkDto): Promise<TaskRiskLink>;
    findAll(): Promise<TaskRiskLink[]>;
    findOne(id: number): Promise<TaskRiskLink | null>;
    findByTask(taskId: number): Promise<TaskRiskLink[]>;
    findByRisk(riskId: number): Promise<TaskRiskLink[]>;
    update(id: number, updateDto: UpdateTaskRiskLinkDto): Promise<TaskRiskLink | null>;
    remove(id: number): Promise<boolean>;
    advancedFindAll({ taskId, riskId, }: {
        taskId?: number;
        riskId?: number;
    }): Promise<TaskRiskLink[]>;
    batchCreate(links: CreateTaskRiskLinkDto[]): Promise<TaskRiskLink[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateTaskRiskLinkDto;
    }[]): Promise<TaskRiskLink[]>;
    batchDelete(ids: number[]): Promise<number>;
}
