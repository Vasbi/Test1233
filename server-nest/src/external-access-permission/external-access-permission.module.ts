import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalAccessPermission } from './external-access-permission.entity';
import { ExternalAccessPermissionService } from './external-access-permission.service';
import { ExternalAccessPermissionController } from './external-access-permission.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ExternalAccessPermission])],
  providers: [ExternalAccessPermissionService],
  controllers: [ExternalAccessPermissionController],
  exports: [ExternalAccessPermissionService],
})
export class ExternalAccessPermissionModule {}
