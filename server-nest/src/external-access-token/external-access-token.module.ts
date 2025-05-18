import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExternalAccessTokenService } from './external-access-token.service';
import { ExternalAccessTokenController } from './external-access-token.controller';
import { ExternalAccessToken } from './external-access-token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExternalAccessToken])],
  controllers: [ExternalAccessTokenController],
  providers: [ExternalAccessTokenService],
  exports: [ExternalAccessTokenService],
})
export class ExternalAccessTokenModule {}
