import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Between } from 'typeorm';
import { Risk } from './risk.entity';
import { CreateRiskDto } from './dto/create-risk.dto';
import { UpdateRiskDto } from './dto/update-risk.dto';

@Injectable()
export class RiskService {
  constructor(
    @InjectRepository(Risk)
    private readonly riskRepository: Repository<Risk>,
  ) {}

  async create(createRiskDto: CreateRiskDto): Promise<Risk> {
    const risk = this.riskRepository.create(createRiskDto);
    return this.riskRepository.save(risk);
  }

  async findAll(): Promise<Risk[]> {
    return this.riskRepository.find();
  }

  async findOne(id: number): Promise<Risk | undefined> {
    const result = await this.riskRepository.findOneBy({ id });
    return result === null ? undefined : result;
  }

  async update(id: number, updateDto: UpdateRiskDto): Promise<Risk | undefined> {
    await this.riskRepository.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.riskRepository.delete(id);
    return !!result.affected && result.affected > 0;
  }

  async advancedFindAll({
    projectId,
    riskStatus,
    riskCategory,
    fromDate,
    toDate,
  }: {
    projectId?: number;
    riskStatus?: string;
    riskCategory?: string;
    fromDate?: string;
    toDate?: string;
  }): Promise<Risk[]> {
    const where: FindOptionsWhere<Risk> = {};
    if (projectId) where.projectId = projectId;
    if (riskStatus) where.riskStatus = riskStatus;
    if (riskCategory) where.riskCategory = riskCategory;
    if (fromDate && toDate) {
      where.openDate = Between(fromDate, toDate);
    } else if (fromDate) {
      where.openDate = Between(fromDate, new Date().toISOString());
    } else if (toDate) {
      where.openDate = Between('1970-01-01', toDate);
    }
    return this.riskRepository.find({ where });
  }

  async batchCreate(risks: CreateRiskDto[]): Promise<Risk[]> {
    const created = this.riskRepository.create(risks);
    return this.riskRepository.save(created);
  }
}

export {};
