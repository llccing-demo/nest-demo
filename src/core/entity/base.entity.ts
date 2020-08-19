import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntity {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column({ name: 'CreatedAuthor' })
  public createdAuthor?: string;

  @Column({ name: 'CreatedTime' })
  public createdTime?: Date;

  @Column({ name: 'UpdatedAuthor' })
  public updatedAuthor?: string;

  @Column({ name: 'UpdatedTime' })
  public updatedTime?: Date;

  @Column({ name: 'IsDeleted' })
  public isDeleted?: boolean;
}