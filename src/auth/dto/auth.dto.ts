import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDto {
  id: number;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
  // hash: string;
}
