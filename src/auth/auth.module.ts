import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

@Module({
  imports: [AuthService],
  controllers: [],
  providers: [],
})
export class AuthModule {}
