import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepositoryService: Repository<User>
  ) { }

  public async save(user: User): Promise<User> {
    return this.userRepositoryService.save(user)
  }
}
