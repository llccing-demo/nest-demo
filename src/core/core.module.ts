import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { ErrorHandlingModule } from './errorhandling/error-handling.module'

import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { User } from './entity/user.entity';
import { AuthService } from './auth/auth.service'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { JwtStrategy } from './auth/jwt/jwt.strategy'
import { jwtConstants } from './auth/jwt/jwt-constants'

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ErrorHandlingModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1m' }
    })
  ],
  providers: [UserService, AuthService],
  controllers: [UserController],
  exports: [UserService, AuthService]
})
export class CoreModule { }
