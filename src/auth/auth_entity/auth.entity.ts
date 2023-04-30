import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

import { IsEmail, IsNotEmpty } from 'class-validator';
@Entity('auth')
@Unique('uique', ['email'])
export class AuthEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ nullable: true, unique: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  hash: string;
}
