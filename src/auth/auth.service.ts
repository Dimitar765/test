import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import * as argon from 'argon2';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from './auth_entity/auth.entity';
import { UserEntity } from 'src/user/user_entity/user.entity';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/user/dto/user.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @InjectRepository(AuthEntity)
    private readonly authRepo: Repository<AuthEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) { }

  //async validate



  async signUp(dto: AuthDto) {
    const hash: string = await argon.hash(dto.password);
    console.log(typeof hash);

    const user = {
      id: dto.id,
      email: dto.email,
      hash: hash,
    };
    delete user.hash;

    this.authRepo.create(user);
    await this.authRepo.save(user);

    console.log(user);
    return user.id;
  }
  async signIn(dto: AuthDto) {
    const user: any = await this.userService.getUser(dto);

    if (!user) throw new ForbiddenException('user not found');
    console.log(user);
    const pwMatch = await argon.verify(user.password, dto.password);

    if (!pwMatch) throw new ForbiddenException('incorect credentials');

    delete user.password;
    return user;
  }
}
