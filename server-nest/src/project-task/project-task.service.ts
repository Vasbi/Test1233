import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProjectTask } from './project-task.entity';
import { CreateProjectTaskDto } from './dto/create-project-task.dto';
import { UpdateProjectTaskDto } from './dto/update-project-task.dto';

@Injectable()
export class ProjectTaskService {
  constructor(
    @InjectRepository(ProjectTask)
    private readonly projectTaskRepository: Repository<ProjectTask>,
  ) {}

  async create(createDto: CreateProjectTaskDto): Promise<ProjectTask> {
    const task = this.projectTaskRepository.create(createDto);
    return this.projectTaskRepository.save(task);
  }

  async findAll(): Promise<ProjectTask[]> {
    return this.projectTaskRepository.find();
  }

  async findOne(id: number): Promise<ProjectTask | null> {
    return this.projectTaskRepository.findOneBy({ id });
  }

  async findByProject(projectId: number): Promise<ProjectTask[]> {
    return this.projectTaskRepository.find({ where: { projectId } });
  }

  async update(
    id: number,
    updateDto: UpdateProjectTaskDto,
  ): Promise<ProjectTask | null> {
    const task = await this.projectTaskRepository.findOneBy({ id });
    if (!task) return null;
    Object.assign(task, updateDto);
    return this.projectTaskRepository.save(task);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.projectTaskRepository.delete(id);
    return result.affected !== 0;
  }

  async advancedFindAll({
    projectId,
    status,
    title,
    assignedTo,
    fromDueDate,
    toDueDate,
  }: {
    projectId?: number;
    status?: string;
    title?: string;
    assignedTo?: number;
    fromDueDate?: string;
    toDueDate?: string;
  }): Promise<ProjectTask[]> {
    const qb = this.projectTaskRepository.createQueryBuilder('task');
    if (projectId) qb.andWhere('task.projectId = :projectId', { projectId });
    if (status) qb.andWhere('task.status = :status', { status });
    if (title) qb.andWhere('task.title ILIKE :title', { title: `%${title}%` });
    if (assignedTo) {
      qb.andWhere('task.assignedTo = :assignedTo', { assignedTo });
    }
    if (fromDueDate && toDueDate) {
      qb.andWhere('task.dueDate BETWEEN :fromDueDate AND :toDueDate', {
        fromDueDate,
        toDueDate,
      });
    } else if (fromDueDate) {
      qb.andWhere('task.dueDate >= :fromDueDate', { fromDueDate });
    } else if (toDueDate) {
      qb.andWhere('task.dueDate <= :toDueDate', { toDueDate });
    }
    return qb.getMany();
  }

  async batchCreate(tasks: CreateProjectTaskDto[]): Promise<ProjectTask[]> {
    const created = this.projectTaskRepository.create(tasks);
    return this.projectTaskRepository.save(created);
  }

  async batchUpdate(
    updates: { id: number; update: UpdateProjectTaskDto }[],
  ): Promise<ProjectTask[]> {
    const results: ProjectTask[] = [];
    for (const { id, update } of updates) {
      await this.projectTaskRepository.update(id, update);
      const updated = await this.findOne(id);
      if (updated) results.push(updated);
    }
    return results;
  }

  async batchDelete(ids: number[]): Promise<number> {
    const result = await this.projectTaskRepository.delete(ids);
    return result.affected || 0;
  }
}
