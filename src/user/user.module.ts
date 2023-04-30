import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthEntity } from 'src/auth/auth_entity/auth.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user_entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, AuthEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
