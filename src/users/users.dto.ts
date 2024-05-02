import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UsersBodyDto {
  //* Opcionales
  id: string;
  @IsOptional()
  createdAt?: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 10)
  password: string;
}
