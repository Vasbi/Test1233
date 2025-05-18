import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExternalAccessToken } from './external-access-token.entity';
import { CreateExternalAccessTokenDto } from './dto/create-external-access-token.dto';
import { UpdateExternalAccessTokenDto } from './dto/update-external-access-token.dto';

@Injectable()
export class ExternalAccessTokenService {
  constructor(
    @InjectRepository(ExternalAccessToken)
    private readonly repo: Repository<ExternalAccessToken>,
  ) {}

  async create(
    dto: CreateExternalAccessTokenDto,
  ): Promise<ExternalAccessToken> {
    const entity = this.repo.create(dto);
    return this.repo.save(entity);
  }

  async findAll(): Promise<ExternalAccessToken[]> {
    return this.repo.find();
  }

  async findOne(id: number): Promise<ExternalAccessToken | null> {
    return this.repo.findOneBy({ id });
  }

  async update(
    id: number,
    dto: UpdateExternalAccessTokenDto,
  ): Promise<ExternalAccessToken | null> {
    const entity = await this.repo.findOneBy({ id });
    if (!entity) return null;
    Object.assign(entity, dto);
    return this.repo.save(entity);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.repo.delete(id);
    return result.affected !== 0;
  }
}
