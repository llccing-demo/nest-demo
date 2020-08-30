import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super()
  }

  public async validate(username: string, pass: string): Promise<any> {
    console.log('local.strategy')
    const user = await this.authService.validateUser(username, pass)
    if (!user) {
      return new UnauthorizedException()
    } else {
      return user
    }
  }
}