import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectTaskService } from './project-task.service';
import { ProjectTaskController } from './project-task.controller';
import { ProjectTask } from './project-task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectTask])],
  controllers: [ProjectTaskController],
  providers: [ProjectTaskService],
  exports: [ProjectTaskService],
})
export class ProjectTaskModule {}
