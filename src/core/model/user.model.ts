import { IsNumber, IsString, IsDate, IsOptional } from 'class-validator';

export class UserModel {
  @IsOptional()
  @IsNumber()
  public id?: number;

  @IsString()
  public username: string;

  @IsString()
  @IsOptional()
  public passwordHash?: string;
}