import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { UserEntity } from 'src/user/user_entity/user.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthEntity } from './auth_entity/auth.entity';
import { jwtConstants } from './constants';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forFeature([AuthEntity, UserEntity]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '180s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
