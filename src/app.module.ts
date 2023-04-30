import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';

import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    AuthModule,
    UserModule,
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'dimitar',
      password: 'admin',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
})
export class AppModule { }
