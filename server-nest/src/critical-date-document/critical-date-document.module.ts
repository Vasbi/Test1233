import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CriticalDateDocumentService } from './critical-date-document.service';
import { CriticalDateDocumentController } from './critical-date-document.controller';
import { CriticalDateDocument } from './critical-date-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CriticalDateDocument])],
  controllers: [CriticalDateDocumentController],
  providers: [CriticalDateDocumentService],
  exports: [CriticalDateDocumentService],
})
export class CriticalDateDocumentModule {}
