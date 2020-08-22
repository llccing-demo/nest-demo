import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';
import { UserModel } from '../model/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRegisterModel } from '../model/user-register.model';
import { Result } from '../model/result.model';

@Controller('api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(User)
    private readonly userRepositoryService: Repository<User>
  ) { }

  @Post('register')
  public async register(@Body() userRegisterModel: UserRegisterModel): Promise<any> {
    const { password, confirmPassword } = userRegisterModel
    console.log('userRegisterModel', userRegisterModel)
    if (!password || !confirmPassword) {
      return new Result('', 400, '请输入密码')
    }
    if (password && confirmPassword && password !== confirmPassword) {
      return new Result('', 400, '两次密码不一致')
    }

    const user = await this.userService.findOne(userRegisterModel.username)
    if (user) {
      return new Result('', 400, '用户已存在')
    }

    const judge = await this.userService.register(userRegisterModel)
    if (judge) {
      return new Result('', 200, '注册成功')
    } else {
      return new Result('', 500, '注册错误')
    }
  }

  @Get()
  public async getList(): Promise<any> {
    const users = await this.userRepositoryService.find()
    const userModels: UserModel[] = []
    users.forEach(user => {
      userModels.push(this.userService.converToModel(user))
    })
    return userModels
  }
}
