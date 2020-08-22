import { IsString, IsOptional } from 'class-validator';

export class UserRegisterModel {
  @IsString()
  public username: string;

  @IsString()
  public password: string;

  @IsString()
  public confirmPassword: string;
}