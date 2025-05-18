import { PartialType } from '@nestjs/mapped-types';
import { CreateExternalAccessTokenDto } from './create-external-access-token.dto';

export class UpdateExternalAccessTokenDto extends PartialType(
  CreateExternalAccessTokenDto,
) {}
