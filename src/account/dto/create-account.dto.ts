import { IsNumber } from 'class-validator';

export class CreateAccountDto {
  @IsNumber()
  clientId: number;
}
