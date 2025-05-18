import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DocumentUpload } from './document-upload.entity';
import { CreateDocumentUploadDto } from './dto/create-document-upload.dto';
import { UpdateDocumentUploadDto } from './dto/update-document-upload.dto';
import { CriticalDateDocument } from '../critical-date-document/critical-date-document.entity';

@Injectable()
export class DocumentUploadService {
  constructor(
    @InjectRepository(DocumentUpload)
    private readonly documentUploadRepository: Repository<DocumentUpload>,
  ) {}

  async create(createDto: CreateDocumentUploadDto): Promise<DocumentUpload> {
    const doc = this.documentUploadRepository.create(createDto);
    return this.documentUploadRepository.save(doc);
  }

  async findAll(): Promise<DocumentUpload[]> {
    return this.documentUploadRepository.find();
  }

  async findOne(id: number): Promise<DocumentUpload | null> {
    return this.documentUploadRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateDto: UpdateDocumentUploadDto,
  ): Promise<DocumentUpload | null> {
    const doc = await this.documentUploadRepository.findOneBy({ id });
    if (!doc) return null;
    Object.assign(doc, updateDto);
    return this.documentUploadRepository.save(doc);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.documentUploadRepository.delete(id);
    return result.affected !== 0;
  }

  async advancedFindAll({
    uploadedBy,
    analysisStatus,
    fromDate,
    toDate,
    originalFilename,
    mimeType,
  }: {
    uploadedBy?: number;
    analysisStatus?: string;
    fromDate?: string;
    toDate?: string;
    originalFilename?: string;
    mimeType?: string;
  }): Promise<DocumentUpload[]> {
    const qb = this.documentUploadRepository.createQueryBuilder('doc');
    if (uploadedBy) qb.andWhere('doc.uploadedBy = :uploadedBy', { uploadedBy });
    if (analysisStatus) {
      qb.andWhere('doc.analysisStatus = :analysisStatus', { analysisStatus });
    }
    if (originalFilename) {
      qb.andWhere('doc.originalFilename ILIKE :originalFilename', {
        originalFilename: `%${originalFilename}%`,
      });
    }
    if (mimeType) qb.andWhere('doc.mimeType = :mimeType', { mimeType });
    if (fromDate && toDate) {
      qb.andWhere('doc.uploadedAt BETWEEN :fromDate AND :toDate', {
        fromDate,
        toDate,
      });
    } else if (fromDate) {
      qb.andWhere('doc.uploadedAt >= :fromDate', { fromDate });
    } else if (toDate) {
      qb.andWhere('doc.uploadedAt <= :toDate', { toDate });
    }
    return qb.getMany();
  }

  async batchCreate(
    docs: CreateDocumentUploadDto[],
  ): Promise<DocumentUpload[]> {
    const created = this.documentUploadRepository.create(docs);
    return this.documentUploadRepository.save(created);
  }

  async batchUpdate(
    updates: { id: number; update: UpdateDocumentUploadDto }[],
  ): Promise<DocumentUpload[]> {
    const results: DocumentUpload[] = [];
    for (const { id, update } of updates) {
      await this.documentUploadRepository.update(id, update);
      const updated = await this.findOne(id);
      if (updated) results.push(updated);
    }
    return results;
  }

  async batchDelete(ids: number[]): Promise<number> {
    const result = await this.documentUploadRepository.delete(ids);
    return result.affected || 0;
  }

  async findByCriticalDate(criticalDateId: number): Promise<DocumentUpload[]> {
    // Join with critical_date_documents to find all DocumentUpload records linked to the given criticalDateId
    return this.documentUploadRepository
      .createQueryBuilder('doc')
      .innerJoin(
        CriticalDateDocument,
        'cdd',
        'cdd.documentId = doc.id AND cdd.criticalDateId = :criticalDateId',
        { criticalDateId },
      )
      .getMany();
  }
}
