import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TaskRiskLinkService } from './task-risk-link.service';
import { CreateTaskRiskLinkDto } from './dto/create-task-risk-link.dto';
import { UpdateTaskRiskLinkDto } from './dto/update-task-risk-link.dto';

@Controller('task-risk-link')
export class TaskRiskLinkController {
  constructor(private readonly service: TaskRiskLinkService) {}

  @Post()
  create(@Body() dto: CreateTaskRiskLinkDto) {
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

  @Get('by-task/:taskId')
  findByTask(@Param('taskId') taskId: string) {
    return this.service.findByTask(Number(taskId));
  }

  @Get('by-risk/:riskId')
  findByRisk(@Param('riskId') riskId: string) {
    return this.service.findByRisk(Number(riskId));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateTaskRiskLinkDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }

  @Post('advanced')
  advancedFindAll(@Body() body: { taskId?: number; riskId?: number }) {
    return this.service.advancedFindAll(body);
  }

  @Post('batch')
  batchCreate(@Body() links: CreateTaskRiskLinkDto[]) {
    return this.service.batchCreate(links);
  }

  @Post('batch-update')
  batchUpdate(
    @Body() updates: { id: number; update: UpdateTaskRiskLinkDto }[],
  ) {
    return this.service.batchUpdate(updates);
  }

  @Post('batch-delete')
  batchDelete(@Body() ids: number[]) {
    return this.service.batchDelete(ids);
  }
}
