import { CriticalDateDocumentService } from './critical-date-document.service';
import { CreateCriticalDateDocumentDto } from './dto/create-critical-date-document.dto';
import { UpdateCriticalDateDocumentDto } from './dto/update-critical-date-document.dto';
export declare class CriticalDateDocumentController {
    private readonly service;
    constructor(service: CriticalDateDocumentService);
    create(dto: CreateCriticalDateDocumentDto): Promise<import("./critical-date-document.entity").CriticalDateDocument>;
    findAll(): Promise<import("./critical-date-document.entity").CriticalDateDocument[]>;
    findOne(id: string): Promise<import("./critical-date-document.entity").CriticalDateDocument | null>;
    update(id: string, dto: UpdateCriticalDateDocumentDto): Promise<import("./critical-date-document.entity").CriticalDateDocument | null>;
    remove(id: string): Promise<boolean>;
    advancedFindAll(body: {
        criticalDateId?: number;
        uploadedBy?: number;
        fromDate?: string;
        toDate?: string;
        filename?: string;
    }): Promise<import("./critical-date-document.entity").CriticalDateDocument[]>;
    batchCreate(docs: CreateCriticalDateDocumentDto[]): Promise<import("./critical-date-document.entity").CriticalDateDocument[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateCriticalDateDocumentDto;
    }[]): Promise<import("./critical-date-document.entity").CriticalDateDocument[]>;
    batchDelete(ids: number[]): Promise<number>;
}
