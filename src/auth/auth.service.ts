import { Injectable } from '@nestjs/common';
import { SignUpRequestDto } from './dto/request/sign-up-request.dto';
import { SignUpResponseDto } from './dto/response/sign-up-response.dto';

@Injectable()
export class AuthService {
  async signUp(request: SignUpRequestDto): Promise<SignUpResponseDto> {}
}
