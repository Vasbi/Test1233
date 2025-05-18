import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProjectTaskService } from './project-task.service';
import { CreateProjectTaskDto } from './dto/create-project-task.dto';
import { UpdateProjectTaskDto } from './dto/update-project-task.dto';

@Controller('project-task')
export class ProjectTaskController {
  constructor(private readonly service: ProjectTaskService) {}

  @Post()
  create(@Body() dto: CreateProjectTaskDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Get('by-project/:projectId')
  findByProject(@Param('projectId') projectId: string) {
    return this.service.findByProject(Number(projectId));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProjectTaskDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }

  @Get('advanced')
  advancedFindAll(
    @Body()
    body: {
      projectId?: number;
      status?: string;
      title?: string;
      assignedTo?: number;
      fromDueDate?: string;
      toDueDate?: string;
    },
  ) {
    return this.service.advancedFindAll(body);
  }

  @Post('batch')
  batchCreate(@Body() tasks: CreateProjectTaskDto[]) {
    return this.service.batchCreate(tasks);
  }

  @Post('batch-update')
  batchUpdate(@Body() updates: { id: number; update: UpdateProjectTaskDto }[]) {
    return this.service.batchUpdate(updates);
  }

  @Post('batch-delete')
  batchDelete(@Body() ids: number[]) {
    return this.service.batchDelete(ids);
  }
}
