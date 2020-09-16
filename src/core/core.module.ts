import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { ErrorHandlingModule } from './errorhandling/error-handling.module'

import { UserController } from './controller/user.controller';
import { OAuthController } from './controller/oauth.controller'
import { UserService } from './service/user.service';
import { User } from './entity/user.entity';
import { AuthService } from './auth/auth.service'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './auth/jwt/jwt.strategy'
import { LocalStrategy } from './auth/local.strategy'
import { jwtConstants } from './auth/jwt/jwt-constants'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ErrorHandlingModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '2h' }
      // 可以用 20s 来验证过期效果
      // signOptions: { expiresIn: '20s' }
    })
  ],
  // 注意，这里的 JwtStrategy 和 LocalStrategy 需要作为 provider
  providers: [UserService, AuthService, JwtStrategy],
  controllers: [UserController, OAuthController],
  exports: [UserService, AuthService]
})
export class CoreModule { }
