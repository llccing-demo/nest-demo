import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('Users')
export class User extends BaseEntity {
  @Column({ name: 'UserName' })
  public username: string;

  @Column({ name: 'PasswordHash' })
  public passwordHash: string;

  @Column({name: 'Salt'})
  public salt: string;
}