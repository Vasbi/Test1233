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
import { IssueService } from './issue.service';
import { CreateIssueDto } from './dto/create-issue.dto';
import { UpdateIssueDto } from './dto/update-issue.dto';

@Controller('issue')
export class IssueController {
  constructor(private readonly issueService: IssueService) {}

  @Post()
  create(@Body() createIssueDto: CreateIssueDto) {
    return this.issueService.create(createIssueDto);
  }

  @Get()
  findAll(
    @Query('projectId') projectId?: number,
    @Query('status') status?: string,
    @Query('category') category?: string,
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
    @Query('title') title?: string,
    @Query('description') description?: string,
    @Query('assignedTo') assignedTo?: number,
  ) {
    return this.issueService.advancedFindAll({
      projectId,
      status,
      category,
      fromDate,
      toDate,
      title,
      description,
      assignedTo,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.issueService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIssueDto: UpdateIssueDto) {
    return this.issueService.update(Number(id), updateIssueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.issueService.remove(Number(id));
  }

  @Post('batch')
  batchCreate(@Body() issues: CreateIssueDto[]) {
    return this.issueService.batchCreate(issues);
  }

  @Post('batch-update')
  batchUpdate(@Body() updates: { id: number; update: UpdateIssueDto }[]) {
    return this.issueService.batchUpdate(updates);
  }

  @Post('batch-delete')
  batchDelete(@Body() ids: number[]) {
    return this.issueService.batchDelete(ids);
  }
}
