import { Repository } from 'typeorm';
import { CriticalDate } from './critical-date.entity';
import { CreateCriticalDateDto } from './dto/create-critical-date.dto';
import { UpdateCriticalDateDto } from './dto/update-critical-date.dto';
export declare class CriticalDateService {
    private readonly criticalDateRepository;
    constructor(criticalDateRepository: Repository<CriticalDate>);
    create(createCriticalDateDto: CreateCriticalDateDto): Promise<CriticalDate>;
    findAll(): Promise<CriticalDate[]>;
    findOne(id: number): Promise<CriticalDate | undefined>;
    update(id: number, updateDto: UpdateCriticalDateDto): Promise<CriticalDate | undefined>;
    remove(id: number): Promise<boolean>;
    advancedFindAll({ projectName, status, department, fromDueDate, toDueDate, }: {
        projectName?: string;
        status?: string;
        department?: string;
        fromDueDate?: string;
        toDueDate?: string;
    }): Promise<CriticalDate[]>;
    batchCreate(criticalDates: CreateCriticalDateDto[]): Promise<CriticalDate[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateCriticalDateDto;
    }[]): Promise<CriticalDate[]>;
    batchDelete(ids: number[]): Promise<number>;
}
