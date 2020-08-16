import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { UserController } from './controller/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { AuthModule } from './auth/auth.module';
import { Repository } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    AuthModule
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService, 
  {
    provide: 'UserRepositoryService',
    useFactory: (repository) => {
      return  Repository
    }
  }]
})
export class CoreModule { }
