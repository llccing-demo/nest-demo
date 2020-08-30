import { Repository } from 'typeorm';
import { Controller, Post, Body, Get, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthGuard } from '@nestjs/passport'

import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';
import { UserModel } from '../model/user.model';
import { UserRegisterModel } from '../model/user-register.model';
import { Result } from '../model/result.model';
import { AuthService } from '../auth/auth.service';

@Controller('api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(User)
    private readonly userRepositoryService: Repository<User>,
    private readonly authService: AuthService
  ) { }

  @UseGuards(AuthGuard('jwt'))
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

  @Post('login')
  public async login(@Body() loginParams: any) {
    console.log(loginParams)
    const authResult = await this.authService.validateUser(loginParams.username, loginParams.password)
    console.log(authResult)
    if (authResult.code === 200) {
      return this.authService.certificate(authResult.user)
    }
    else {
      return {
        code: 401,
        msg: '权限问题'
      }
    }

  }
}
