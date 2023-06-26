import { IsString } from "class-validator";

export class CreateCardDto {
  @IsString()
  name: string;
}
