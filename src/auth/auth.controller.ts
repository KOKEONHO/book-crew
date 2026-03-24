import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpRequestDto } from './dto/request/sign-up-request.dto';
import { SignUpResponseDto } from './dto/response/sign-up-response.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-up')
  async signUp(@Body() request: SignUpRequestDto): Promise<SignUpResponseDto> {
    return this.authService.signUp(request);
  }
}
