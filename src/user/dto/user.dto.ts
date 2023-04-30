import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  role: string;
}
