import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';
import { UserModel } from '../model/user.model';

@Controller('api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) { }

  @Post()
  public async save(@Body() user: UserModel): Promise<any> {
    const userEntity = new User();
    userEntity.userName = user.userName
    let msg = '';
    console.log(user)
    const judge = await this.userService.save(userEntity);
    if (judge) {
      msg = '保存成功！'
    } else {
      msg = '保存失败'
    }
    return msg
  }
}
