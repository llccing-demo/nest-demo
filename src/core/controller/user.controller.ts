import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';
import { UserModel } from '../model/user.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Controller('api/v1/user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(User)
    private readonly userRepositoryService: Repository<User>
  ) { }

  @Post()
  public async save(@Body() user: UserModel): Promise<any> {
    const userEntity = new User();
    userEntity.username = user.username
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
