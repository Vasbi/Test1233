import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiskModule } from './risk/risk.module';
import { CriticalDateModule } from './critical-date/critical-date.module';
import { IssueModule } from './issue/issue.module';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { TaskRiskLinkModule } from './task-risk-link/task-risk-link.module';
import { ProjectTaskModule } from './project-task/project-task.module';
import { DocumentUploadModule } from './document-upload/document-upload.module';
import { CriticalDateDocumentModule } from './critical-date-document/critical-date-document.module';
import { ExternalAccessTokenModule } from './external-access-token/external-access-token.module';
import { ExternalAccessPermissionModule } from './external-access-permission/external-access-permission.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        autoLoadEntities: true,
        synchronize: configService.get('NODE_ENV') !== 'production',
      }),
    }),
    RiskModule,
    CriticalDateModule,
    IssueModule,
    ProjectModule,
    UserModule,
    TaskRiskLinkModule,
    ProjectTaskModule,
    DocumentUploadModule,
    CriticalDateDocumentModule,
    ExternalAccessTokenModule,
    ExternalAccessPermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
