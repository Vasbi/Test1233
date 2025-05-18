import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskRiskLink } from './task-risk-link.entity';
import { CreateTaskRiskLinkDto } from './dto/create-task-risk-link.dto';
import { UpdateTaskRiskLinkDto } from './dto/update-task-risk-link.dto';

@Injectable()
export class TaskRiskLinkService {
  constructor(
    @InjectRepository(TaskRiskLink)
    private readonly taskRiskLinkRepository: Repository<TaskRiskLink>,
  ) {}

  async create(createDto: CreateTaskRiskLinkDto): Promise<TaskRiskLink> {
    const link = this.taskRiskLinkRepository.create(createDto);
    return this.taskRiskLinkRepository.save(link);
  }

  async findAll(): Promise<TaskRiskLink[]> {
    return this.taskRiskLinkRepository.find();
  }

  async findOne(id: number): Promise<TaskRiskLink | null> {
    return this.taskRiskLinkRepository.findOneBy({ id });
  }

  async findByTask(taskId: number): Promise<TaskRiskLink[]> {
    return this.taskRiskLinkRepository.find({ where: { taskId } });
  }

  async findByRisk(riskId: number): Promise<TaskRiskLink[]> {
    return this.taskRiskLinkRepository.find({ where: { riskId } });
  }

  async update(
    id: number,
    updateDto: UpdateTaskRiskLinkDto,
  ): Promise<TaskRiskLink | null> {
    const link = await this.taskRiskLinkRepository.findOneBy({ id });
    if (!link) return null;
    Object.assign(link, updateDto);
    return this.taskRiskLinkRepository.save(link);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.taskRiskLinkRepository.delete(id);
    return result.affected !== 0;
  }

  async advancedFindAll({
    taskId,
    riskId,
  }: {
    taskId?: number;
    riskId?: number;
  }): Promise<TaskRiskLink[]> {
    const qb = this.taskRiskLinkRepository.createQueryBuilder('link');
    if (taskId) qb.andWhere('link.taskId = :taskId', { taskId });
    if (riskId) qb.andWhere('link.riskId = :riskId', { riskId });
    return qb.getMany();
  }

  async batchCreate(links: CreateTaskRiskLinkDto[]): Promise<TaskRiskLink[]> {
    const created = this.taskRiskLinkRepository.create(links);
    return this.taskRiskLinkRepository.save(created);
  }

  async batchUpdate(
    updates: { id: number; update: UpdateTaskRiskLinkDto }[],
  ): Promise<TaskRiskLink[]> {
    const results: TaskRiskLink[] = [];
    for (const { id, update } of updates) {
      await this.taskRiskLinkRepository.update(id, update);
      const updated = await this.findOne(id);
      if (updated) results.push(updated);
    }
    return results;
  }

  async batchDelete(ids: number[]): Promise<number> {
    const result = await this.taskRiskLinkRepository.delete(ids);
    return result.affected || 0;
  }
}
