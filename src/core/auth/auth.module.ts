import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../service/user.service';

@Module({
  imports: [UserService],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService]
})
export class AuthModule { }
