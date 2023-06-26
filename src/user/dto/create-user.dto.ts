import { IsEmail, IsString, MinLength, Validate } from "class-validator";

export class CreateUserDto {
  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
