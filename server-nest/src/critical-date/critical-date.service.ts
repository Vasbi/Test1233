import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Between } from 'typeorm';
import { CriticalDate } from './critical-date.entity';
import { CreateCriticalDateDto } from './dto/create-critical-date.dto';
import { UpdateCriticalDateDto } from './dto/update-critical-date.dto';

@Injectable()
export class CriticalDateService {
  constructor(
    @InjectRepository(CriticalDate)
    private readonly criticalDateRepository: Repository<CriticalDate>,
  ) {}

  async create(
    createCriticalDateDto: CreateCriticalDateDto,
  ): Promise<CriticalDate> {
    const criticalDate = this.criticalDateRepository.create({
      ...createCriticalDateDto,
    });
    return this.criticalDateRepository.save(criticalDate);
  }

  async findAll(): Promise<CriticalDate[]> {
    return this.criticalDateRepository.find();
  }

  async findOne(id: number): Promise<CriticalDate | undefined> {
    const result = await this.criticalDateRepository.findOneBy({ id });
    return result === null ? undefined : result;
  }

  async update(
    id: number,
    updateDto: UpdateCriticalDateDto,
  ): Promise<CriticalDate | undefined> {
    await this.criticalDateRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.criticalDateRepository.delete(id);
    return !!result.affected && result.affected > 0;
  }

  async advancedFindAll({
    projectName,
    status,
    department,
    fromDueDate,
    toDueDate,
  }: {
    projectName?: string;
    status?: string;
    department?: string;
    fromDueDate?: string;
    toDueDate?: string;
  }): Promise<CriticalDate[]> {
    const where: FindOptionsWhere<CriticalDate> = {};
    if (projectName) where.projectName = projectName;
    if (status) where.status = status;
    if (department) where.department = department;
    if (fromDueDate && toDueDate) {
      where.dueDate = Between(new Date(fromDueDate), new Date(toDueDate));
    } else if (fromDueDate) {
      where.dueDate = Between(new Date(fromDueDate), new Date());
    } else if (toDueDate) {
      where.dueDate = Between(new Date('1970-01-01'), new Date(toDueDate));
    }
    return this.criticalDateRepository.find({ where });
  }

  async batchCreate(
    criticalDates: CreateCriticalDateDto[],
  ): Promise<CriticalDate[]> {
    const created = this.criticalDateRepository.create(criticalDates);
    return this.criticalDateRepository.save(created);
  }

  async batchUpdate(
    updates: { id: number; update: UpdateCriticalDateDto }[],
  ): Promise<CriticalDate[]> {
    const results: CriticalDate[] = [];
    for (const { id, update } of updates) {
      await this.criticalDateRepository.update(id, update);
      const updated = await this.findOne(id);
      if (updated) results.push(updated);
    }
    return results;
  }

  async batchDelete(ids: number[]): Promise<number> {
    const result = await this.criticalDateRepository.delete(ids);
    return result.affected || 0;
  }
}
