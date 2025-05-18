import { DocumentUploadService } from './document-upload.service';
import { CreateDocumentUploadDto } from './dto/create-document-upload.dto';
import { UpdateDocumentUploadDto } from './dto/update-document-upload.dto';
import { ConfigService } from '@nestjs/config';
export declare class DocumentUploadController {
    private readonly service;
    private readonly configService;
    constructor(service: DocumentUploadService, configService: ConfigService);
    create(dto: CreateDocumentUploadDto): Promise<import("./document-upload.entity").DocumentUpload>;
    findAll(): Promise<import("./document-upload.entity").DocumentUpload[]>;
    findOne(id: string): Promise<import("./document-upload.entity").DocumentUpload | null>;
    update(id: string, dto: UpdateDocumentUploadDto): Promise<import("./document-upload.entity").DocumentUpload | null>;
    deleteDocument(id: string): Promise<{
        success: boolean;
    }>;
    advancedFindAll(body: {
        uploadedBy?: number;
        analysisStatus?: string;
        fromDate?: string;
        toDate?: string;
        originalFilename?: string;
        mimeType?: string;
    }): Promise<import("./document-upload.entity").DocumentUpload[]>;
    batchCreate(docs: CreateDocumentUploadDto[]): Promise<import("./document-upload.entity").DocumentUpload[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateDocumentUploadDto;
    }[]): Promise<import("./document-upload.entity").DocumentUpload[]>;
    batchDelete(ids: number[]): Promise<number>;
    analyse(body: {
        documentIds: number[];
        criticalDateId?: number;
        temporaryDocuments?: any;
    }): Promise<{
        success: boolean;
        message: string;
        analysisResults?: undefined;
    } | {
        success: boolean;
        analysisResults: Record<string, unknown>;
        message?: undefined;
    }>;
    findByCriticalDate(criticalDateId: string): Promise<import("./document-upload.entity").DocumentUpload[]>;
}
