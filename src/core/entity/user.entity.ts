import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('Users')
export class User extends BaseEntity {
  @Column({ name: 'UserName' })
  public userName: string;

  @Column({ name: 'Password' })
  public password: string;

  @Column({ name: 'RoleId' })
  public roleId: number;
}