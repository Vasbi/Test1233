import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOptionsWhere, Between } from 'typeorm';
import { Project } from './project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto): Promise<Project> {
    const project = this.projectRepository.create(createProjectDto);
    return this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findOne(id: number): Promise<Project | null> {
    return this.projectRepository.findOneBy({ id });
  }

  async update(
    id: number,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project | null> {
    const project = await this.projectRepository.findOneBy({ id });
    if (!project) return null;
    Object.assign(project, updateProjectDto);
    return this.projectRepository.save(project);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.projectRepository.delete(id);
    return result.affected !== 0;
  }

  async advancedFindAll({
    organization,
    projectManager,
    registerName,
    fromRegisterDate,
    toRegisterDate,
  }: {
    organization?: string;
    projectManager?: string;
    registerName?: string;
    fromRegisterDate?: string;
    toRegisterDate?: string;
  }): Promise<Project[]> {
    const where: FindOptionsWhere<Project> = {};
    if (organization) where.organization = organization;
    if (projectManager) where.projectManager = projectManager;
    if (registerName) where.registerName = registerName;
    if (fromRegisterDate && toRegisterDate) {
      where.registerDate = Between(fromRegisterDate, toRegisterDate);
    } else if (fromRegisterDate) {
      where.registerDate = Between(fromRegisterDate, new Date().toISOString());
    } else if (toRegisterDate) {
      where.registerDate = Between('1970-01-01', toRegisterDate);
    }
    return this.projectRepository.find({ where });
  }

  async batchCreate(projects: CreateProjectDto[]): Promise<Project[]> {
    const created = this.projectRepository.create(projects);
    return this.projectRepository.save(created);
  }
}
