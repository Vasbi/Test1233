import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ExternalAccessTokenService } from './external-access-token.service';
import { CreateExternalAccessTokenDto } from './dto/create-external-access-token.dto';
import { UpdateExternalAccessTokenDto } from './dto/update-external-access-token.dto';

@Controller('external-access-token')
export class ExternalAccessTokenController {
  constructor(private readonly service: ExternalAccessTokenService) {}

  @Post()
  create(@Body() dto: CreateExternalAccessTokenDto) {
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateExternalAccessTokenDto) {
    return this.service.update(Number(id), dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(Number(id));
  }
}
