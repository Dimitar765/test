import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('signup')
  signUp(@Body() user: AuthDto) {
    //console.log({ dto: dto });
    return this.authService.signUp(user);
  }

  @Post('signin')
  signIn(@Body() dto: AuthDto) {
    return this.authService.signIn(dto);
  }
}
