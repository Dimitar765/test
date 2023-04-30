import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from 'src/auth/auth_entity/auth.entity';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './user_entity/user.entity';
import * as argon from 'argon2';
import { AuthDto } from 'src/auth/dto/auth.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(AuthEntity)
    private readonly authRepo: Repository<AuthEntity>,
  ) { }

  async addUser(dto: UserDto) {
    const hash: string = await argon.hash(dto.password);

    const user: UserDto = {
      ...dto,
      password: hash,
    };
    const toBeSaved = this.userRepo.create(user);
    const saved = this.userRepo.save(toBeSaved);

    return saved;
  }

  getUsers() {
    const users = this.userRepo.find();
    return users;
  }

  getUser(dto: AuthDto) {
    const user = this.userRepo.findOne({
      where: {
        email: dto.email,
      },
    });
    return user;
  }
}
