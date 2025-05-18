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
import { ExternalAccessPermissionService } from './external-access-permission.service';
import { CreateExternalAccessPermissionDto } from './dto/create-external-access-permission.dto';
import { UpdateExternalAccessPermissionDto } from './dto/update-external-access-permission.dto';

@Controller('external-access-permission')
export class ExternalAccessPermissionController {
  constructor(private readonly service: ExternalAccessPermissionService) {}

  @Post()
  create(@Body() dto: CreateExternalAccessPermissionDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll(
    @Query('tokenId') tokenId?: number,
    @Query('projectId') projectId?: number,
    @Query('criticalDateId') criticalDateId?: number,
  ) {
    if (tokenId) {
      return this.service.findByTokenId(tokenId);
    }
    if (projectId) {
      return this.service.findByProjectId(Number(projectId));
    }
    if (criticalDateId) {
      return this.service.findByCriticalDateId(Number(criticalDateId));
    }
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateExternalAccessPermissionDto,
  ) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }

  @Post('batch')
  batchCreate(@Body() dtos: CreateExternalAccessPermissionDto[]) {
    return Promise.all(dtos.map((dto) => this.service.create(dto)));
  }
}
