import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthDto } from 'src/auth/dto/auth.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('adduser')
  addUser(@Body() dto: UserDto) {
    return this.userService.addUser(dto);
  }
  @Get('user')
  getUsers() {
    const users = this.userService.getUsers();
    return users;
  }

  @Get('user') //helper for auth
  getUser(dto?: AuthDto) {
    const users = this.userService.getUser(dto);
    return users;
  }
}
