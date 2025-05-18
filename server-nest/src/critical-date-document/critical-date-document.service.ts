import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CriticalDateDocument } from './critical-date-document.entity';
import { CreateCriticalDateDocumentDto } from './dto/create-critical-date-document.dto';
import { UpdateCriticalDateDocumentDto } from './dto/update-critical-date-document.dto';

@Injectable()
export class CriticalDateDocumentService {
  constructor(
    @InjectRepository(CriticalDateDocument)
    private readonly repo: Repository<CriticalDateDocument>,
  ) {}

  async create(
    dto: CreateCriticalDateDocumentDto,
  ): Promise<CriticalDateDocument> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async findAll(): Promise<CriticalDateDocument[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<CriticalDateDocument | null> {
    return this.repo.findOneBy({ id });
  }

  async update(
    id: number,
    dto: UpdateCriticalDateDocumentDto,
  ): Promise<CriticalDateDocument | null> {
    const entity = await this.repo.findOneBy({ id });
    if (!entity) return null;
    Object.assign(entity, dto);
    return this.repo.save(entity);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return result.affected !== 0;
  }

  async advancedFindAll({
    criticalDateId,
    uploadedBy,
    fromDate,
    toDate,
    filename,
  }: {
    criticalDateId?: number;
    uploadedBy?: number;
    fromDate?: string;
    toDate?: string;
    filename?: string;
  }): Promise<CriticalDateDocument[]> {
    const qb = this.repo.createQueryBuilder('doc');
    if (criticalDateId)
      qb.andWhere('doc.criticalDateId = :criticalDateId', { criticalDateId });
    if (uploadedBy) qb.andWhere('doc.uploadedBy = :uploadedBy', { uploadedBy });
    if (filename) {
      qb.andWhere('doc.filename ILIKE :filename', {
        filename: `%${filename}%`,
      });
    }
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
    docs: CreateCriticalDateDocumentDto[],
  ): Promise<CriticalDateDocument[]> {
    const created = this.repo.create(docs);
    return this.repo.save(created);
  }

  async batchUpdate(
    updates: { id: number; update: UpdateCriticalDateDocumentDto }[],
  ): Promise<CriticalDateDocument[]> {
    const results: CriticalDateDocument[] = [];
    for (const { id, update } of updates) {
      await this.repo.update(id, update);
      const updated = await this.findOne(id);
      if (updated) results.push(updated);
    }
    return results;
  }

  async batchDelete(ids: number[]): Promise<number> {
    const result = await this.repo.delete(ids);
    return result.affected || 0;
  }
}
