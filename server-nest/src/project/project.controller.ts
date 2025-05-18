import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll(
    @Query('organization') organization?: string,
    @Query('projectManager') projectManager?: string,
    @Query('registerName') registerName?: string,
    @Query('fromRegisterDate') fromRegisterDate?: string,
    @Query('toRegisterDate') toRegisterDate?: string,
  ) {
    return this.projectService.advancedFindAll({
      organization,
      projectManager,
      registerName,
      fromRegisterDate,
      toRegisterDate,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(Number(id), updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(Number(id));
  }

  @Post('batch')
  batchCreate(@Body() projects: CreateProjectDto[]) {
    return this.projectService.batchCreate(projects);
  }
}
