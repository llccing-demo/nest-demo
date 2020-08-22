import { Module } from '@nestjs/common';
import { TypeOrmModule, InjectRepository } from '@nestjs/typeorm';
import { ErrorHandlingModule } from './errorhandling/error-handling.module'

import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { User } from './entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ErrorHandlingModule
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService]
})
export class CoreModule { }
