import { CriticalDateService } from './critical-date.service';
import { CreateCriticalDateDto } from './dto/create-critical-date.dto';
import { UpdateCriticalDateDto } from './dto/update-critical-date.dto';
export declare class CriticalDateController {
    private readonly criticalDateService;
    constructor(criticalDateService: CriticalDateService);
    create(createCriticalDateDto: CreateCriticalDateDto): Promise<import("./critical-date.entity").CriticalDate>;
    findAll(projectName?: string, status?: string, department?: string, fromDueDate?: string, toDueDate?: string): Promise<import("./critical-date.entity").CriticalDate[]>;
    findOne(id: string): Promise<import("./critical-date.entity").CriticalDate | undefined>;
    update(id: string, updateCriticalDateDto: UpdateCriticalDateDto): Promise<import("./critical-date.entity").CriticalDate | undefined>;
    remove(id: string): Promise<boolean>;
    batchCreate(criticalDates: CreateCriticalDateDto[]): Promise<import("./critical-date.entity").CriticalDate[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateCriticalDateDto;
    }[]): Promise<import("./critical-date.entity").CriticalDate[]>;
    batchDelete(ids: number[]): Promise<number>;
}
