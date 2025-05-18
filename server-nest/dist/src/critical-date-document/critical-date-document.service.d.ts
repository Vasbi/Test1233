import { Repository } from 'typeorm';
import { CriticalDateDocument } from './critical-date-document.entity';
import { CreateCriticalDateDocumentDto } from './dto/create-critical-date-document.dto';
import { UpdateCriticalDateDocumentDto } from './dto/update-critical-date-document.dto';
export declare class CriticalDateDocumentService {
    private readonly repo;
    constructor(repo: Repository<CriticalDateDocument>);
    create(dto: CreateCriticalDateDocumentDto): Promise<CriticalDateDocument>;
    findAll(): Promise<CriticalDateDocument[]>;
    findOne(id: number): Promise<CriticalDateDocument | null>;
    update(id: number, dto: UpdateCriticalDateDocumentDto): Promise<CriticalDateDocument | null>;
    remove(id: number): Promise<boolean>;
    advancedFindAll({ criticalDateId, uploadedBy, fromDate, toDate, filename, }: {
        criticalDateId?: number;
        uploadedBy?: number;
        fromDate?: string;
        toDate?: string;
        filename?: string;
    }): Promise<CriticalDateDocument[]>;
    batchCreate(docs: CreateCriticalDateDocumentDto[]): Promise<CriticalDateDocument[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateCriticalDateDocumentDto;
    }[]): Promise<CriticalDateDocument[]>;
    batchDelete(ids: number[]): Promise<number>;
}
