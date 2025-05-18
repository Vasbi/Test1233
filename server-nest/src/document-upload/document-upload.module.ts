import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DocumentUploadService } from './document-upload.service';
import { DocumentUploadController } from './document-upload.controller';
import { DocumentUpload } from './document-upload.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DocumentUpload]), ConfigModule],
  controllers: [DocumentUploadController],
  providers: [DocumentUploadService],
  exports: [DocumentUploadService],
})
export class DocumentUploadModule {}
