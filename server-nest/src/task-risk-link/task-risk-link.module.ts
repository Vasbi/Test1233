import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRiskLinkService } from './task-risk-link.service';
import { TaskRiskLinkController } from './task-risk-link.controller';
import { TaskRiskLink } from './task-risk-link.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRiskLink])],
  controllers: [TaskRiskLinkController],
  providers: [TaskRiskLinkService],
  exports: [TaskRiskLinkService],
})
export class TaskRiskLinkModule {}
