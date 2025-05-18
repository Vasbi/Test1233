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
import { CriticalDateService } from './critical-date.service';
import { CreateCriticalDateDto } from './dto/create-critical-date.dto';
import { UpdateCriticalDateDto } from './dto/update-critical-date.dto';

@Controller('critical-date')
export class CriticalDateController {
  constructor(private readonly criticalDateService: CriticalDateService) {}

  @Post()
  async create(@Body() createCriticalDateDto: CreateCriticalDateDto) {
    return await this.criticalDateService.create(createCriticalDateDto);
  }

  @Get()
  async findAll(
    @Query('projectName') projectName?: string,
    @Query('status') status?: string,
    @Query('department') department?: string,
    @Query('fromDueDate') fromDueDate?: string,
    @Query('toDueDate') toDueDate?: string,
  ) {
    return await this.criticalDateService.advancedFindAll({
      projectName,
      status,
      department,
      fromDueDate,
      toDueDate,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.criticalDateService.findOne(Number(id));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCriticalDateDto: UpdateCriticalDateDto,
  ) {
    return await this.criticalDateService.update(
      Number(id),
      updateCriticalDateDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.criticalDateService.remove(Number(id));
  }

  @Post('batch')
  async batchCreate(@Body() criticalDates: CreateCriticalDateDto[]) {
    return await this.criticalDateService.batchCreate(criticalDates);
  }

  @Post('batch-update')
  async batchUpdate(
    @Body() updates: { id: number; update: UpdateCriticalDateDto }[],
  ) {
    return await this.criticalDateService.batchUpdate(updates);
  }

  @Post('batch-delete')
  async batchDelete(@Body() ids: number[]) {
    return await this.criticalDateService.batchDelete(ids);
  }
}
