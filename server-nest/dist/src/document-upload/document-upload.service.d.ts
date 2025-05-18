import { Repository } from 'typeorm';
import { DocumentUpload } from './document-upload.entity';
import { CreateDocumentUploadDto } from './dto/create-document-upload.dto';
import { UpdateDocumentUploadDto } from './dto/update-document-upload.dto';
export declare class DocumentUploadService {
    private readonly documentUploadRepository;
    constructor(documentUploadRepository: Repository<DocumentUpload>);
    create(createDto: CreateDocumentUploadDto): Promise<DocumentUpload>;
    findAll(): Promise<DocumentUpload[]>;
    findOne(id: number): Promise<DocumentUpload | null>;
    update(id: number, updateDto: UpdateDocumentUploadDto): Promise<DocumentUpload | null>;
    remove(id: number): Promise<boolean>;
    advancedFindAll({ uploadedBy, analysisStatus, fromDate, toDate, originalFilename, mimeType, }: {
        uploadedBy?: number;
        analysisStatus?: string;
        fromDate?: string;
        toDate?: string;
        originalFilename?: string;
        mimeType?: string;
    }): Promise<DocumentUpload[]>;
    batchCreate(docs: CreateDocumentUploadDto[]): Promise<DocumentUpload[]>;
    batchUpdate(updates: {
        id: number;
        update: UpdateDocumentUploadDto;
    }[]): Promise<DocumentUpload[]>;
    batchDelete(ids: number[]): Promise<number>;
    findByCriticalDate(criticalDateId: number): Promise<DocumentUpload[]>;
}
