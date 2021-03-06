import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './jwt-constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(){
    console.log('jwt 验证')
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret
    })
  }

  async validate(payload: any) {
    console.log('jwt 验证, 被守卫调用')
    return {
      userId: payload.sub,
      username: payload.username,
    }
  }
}