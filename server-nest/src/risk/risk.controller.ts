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
import { RiskService } from './risk.service';
import { CreateRiskDto } from './dto/create-risk.dto';
import { UpdateRiskDto } from './dto/update-risk.dto';

@Controller('risk')
export class RiskController {
  constructor(private readonly riskService: RiskService) {}

  @Post()
  create(@Body() createRiskDto: CreateRiskDto) {
    return this.riskService.create(createRiskDto);
  }

  @Get()
  findAll(
    @Query('projectId') projectId?: number,
    @Query('riskStatus') riskStatus?: string,
    @Query('riskCategory') riskCategory?: string,
    @Query('fromDate') fromDate?: string,
    @Query('toDate') toDate?: string,
  ) {
    return this.riskService.advancedFindAll({
      projectId,
      riskStatus,
      riskCategory,
      fromDate,
      toDate,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.riskService.findOne(Number(id));
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRiskDto: UpdateRiskDto) {
    return this.riskService.update(Number(id), updateRiskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.riskService.remove(Number(id));
  }

  @Post('batch')
  batchCreate(@Body() risks: CreateRiskDto[]) {
    return this.riskService.batchCreate(risks);
  }
}

export {};
