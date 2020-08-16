import { Injectable } from '@nestjs/common';
import { UserModel } from '../model/user.model';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthService {
  constructor(private userSerivce: UserService) { }

  public async validateUser(username: string, pass: string): Promise<any> {
    let result = ''
    const user = this.userSerivce.findOne(username);
    if (user) {
      result = '验证成功'
    } else {
      result = '不存在该用户'
    }
    return result
  }
}
