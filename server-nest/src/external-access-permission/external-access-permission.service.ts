import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExternalAccessPermission } from './external-access-permission.entity';
import { CreateExternalAccessPermissionDto } from './dto/create-external-access-permission.dto';
import { UpdateExternalAccessPermissionDto } from './dto/update-external-access-permission.dto';

@Injectable()
export class ExternalAccessPermissionService {
  constructor(
    @InjectRepository(ExternalAccessPermission)
    private readonly repo: Repository<ExternalAccessPermission>,
  ) {}

  create(dto: CreateExternalAccessPermissionDto) {
    const permission = this.repo.create(dto);
    return this.repo.save(permission);
  }

  findAll() {
    return this.repo.find();
  }

  findByTokenId(tokenId: number) {
    return this.repo.find({ where: { tokenId } });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id } });
  }

  update(id: number, dto: UpdateExternalAccessPermissionDto) {
    return this.repo.update(id, dto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }

  findByProjectId(projectId: number) {
    return this.repo.find({ where: { projectId } });
  }

  findByCriticalDateId(criticalDateId: number) {
    return this.repo.find({ where: { criticalDateId } });
  }
}
