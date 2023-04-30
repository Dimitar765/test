import { IsEmail } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';
//import { DefaultSerializer } from 'v8';

@Entity('user')
@Unique('unique', ['email'])
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  fullName: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password: string; //hast: string
  @Column()
  role: string;
}
