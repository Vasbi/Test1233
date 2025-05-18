import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriticalDateService } from './critical-date.service';
import { CriticalDateController } from './critical-date.controller';
import { CriticalDate } from './critical-date.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriticalDate])],
  controllers: [CriticalDateController],
  providers: [CriticalDateService],
  exports: [CriticalDateService],
})
export class CriticalDateModule {}
