import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Between } from 'typeorm';
import { Issue } from './issue.entity';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';

@Injectable()
export class IssueService {
  constructor(
    @InjectRepository(Issue)
    private readonly issueRepository: Repository<Issue>,
  ) {}

  async create(createIssueDto: CreateIssueDto): Promise<Issue> {
    const issue = this.issueRepository.create({ ...createIssueDto });
    return this.issueRepository.save(issue);
  }

  async findAll(): Promise<Issue[]> {
    return this.issueRepository.find();
  }

  async findOne(id: number): Promise<Issue | undefined> {
    const result = await this.issueRepository.findOneBy({ id });
    return result === null ? undefined : result;
  }

  async update(
    id: number,
    updateDto: UpdateIssueDto,
  ): Promise<Issue | undefined> {
    await this.issueRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.issueRepository.delete(id);
    return !!result.affected && result.affected > 0;
  }

  async advancedFindAll({
    projectId,
    status,
    category,
    fromDate,
    toDate,
    title,
    description,
    assignedTo,
  }: {
    projectId?: number;
    status?: string;
    category?: string;
    fromDate?: string;
    toDate?: string;
    title?: string;
    description?: string;
    assignedTo?: number;
  }): Promise<Issue[]> {
    const where: FindOptionsWhere<Issue> = {};
    if (projectId) where.projectId = projectId;
    if (status) where.status = status;
    if (category) where.category = category;
    if (fromDate && toDate) {
      where.issueDate = Between(fromDate, toDate);
    } else if (fromDate) {
      where.issueDate = Between(fromDate, new Date().toISOString());
    } else if (toDate) {
      where.issueDate = Between('1970-01-01', toDate);
    }
    const qb = this.issueRepository.createQueryBuilder('issue').where(where);
    if (title) {
      qb.andWhere('issue.title ILIKE :title', {
        title: `%${title}%`,
      });
    }
    if (description) {
      qb.andWhere('issue.description ILIKE :description', {
        description: `%${description}%`,
      });
    }
    if (assignedTo) {
      qb.andWhere('issue.assignedTo = :assignedTo', { assignedTo });
    }
    return qb.getMany();
  }

  async batchCreate(issues: CreateIssueDto[]): Promise<Issue[]> {
    const created = this.issueRepository.create(issues);
    return this.issueRepository.save(created);
  }

  async batchUpdate(
    updates: { id: number; update: UpdateIssueDto }[],
  ): Promise<Issue[]> {
    const results: Issue[] = [];
    for (const { id, update } of updates) {
      await this.issueRepository.update(id, update);
      const updated = await this.findOne(id);
      if (updated) results.push(updated);
    }
    return results;
  }

  async batchDelete(ids: number[]): Promise<number> {
    const result = await this.issueRepository.delete(ids);
    return result.affected || 0;
  }
}
