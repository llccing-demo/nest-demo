import { Injectable } from '@nestjs/common';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) { }

  public async validateUser(username: string, pass: string): Promise<any> {
    let result = ''
    const user = this.userService.findOne(username);
    if (user) {
      result = '验证成功'
    } else {
      result = '不存在该用户'
    }
    return result
  }
}
