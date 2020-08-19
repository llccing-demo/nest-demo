import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository, DeepPartial } from 'typeorm';
import { UserModel } from '../model/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepositoryService: Repository<User>
  ) {
    this.initBase()
  }

  private async initBase() {
    const users: UserModel[] = [
      {
        id: 1,
        username: 'john',
        passwordHash: 'changeme',
      },
      {
        id: 2,
        username: 'chris',
        passwordHash: 'secret',
      },
      {
        id: 3,
        username: 'maria',
        passwordHash: 'guess',
      },
    ]
    users.forEach(async item => {
      if (!this.userRepositoryService.find(item)) {
        await this.userRepositoryService.save(users)
      }
    })
  }

  public async save(user: UserModel): Promise<any> {
    return this.userRepositoryService.save(user)
  }


  public async findOne(userName: string): Promise<any> {
    const user = new UserModel()
    user.username = userName;
    return await this.userRepositoryService.find(user)
  }

  public convertToEntity(model: UserModel): DeepPartial<User> {
    return model
  }

  public converToModel(user: User): UserModel {
    const userModel = new UserModel()
    userModel.id = user.id
    userModel.username = user.username;
    return userModel
  }
}
