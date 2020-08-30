import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'

import { UserService } from '../service/user.service';
import { UserModel } from '../model/user.model';
import { encryptPassword } from './cryptogram'

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService
  ) { }

  // 校验用户信息
  public async validateUser(username: string, passport: string): Promise<any> {
    console.log('validateUser')

    const user = await this.userService.findOne(username);
    // 解决 ts 找不到属性的报错 方式一
    // https://www.cnblogs.com/limbobark/p/10043769.html
    // const user: any = this.userService.findOne(username);
    if (user) {
      // 解决 ts 找不到属性的报错 方式二
      const hashedPass = (user as UserModel).passwordHash
      const salt = (user as UserModel).salt
      const hashPass = encryptPassword(passport, salt)
      console.log(user)
      console.log(hashPass)
      if (hashedPass == hashPass) {
        return {
          code: 200,
          user
        }
      } else {
        return {
          code: 401,
          user: null
        }
      }
    }
    return {
      code: 401,
      user: null
    }
  }

  // 处理 jwt 签证
  public async certificate(user: any) {
    const payload = { username: user.username, userId: user.id }
    console.log('certificate', user)
    try {
      const token = this.jwtService.sign(payload)
      return {
        code: 200,
        data: token,
        msg: '登录成功'
      }
    } catch (e) {
      return {
        code: 401,
        msg: '账号密码错误！'
      }
    }
  }
}