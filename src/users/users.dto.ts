import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class UsersBodyDto {
  //* Opcionales
  @ApiHideProperty()
  id: string;

  @ApiHideProperty()
  @IsOptional()
  createdAt?: string;

  /**
  Esta es la propiedad name
  @example Lisa
  */
  @IsNotEmpty()
  @IsString()
  @Length(3, 50)
  name: string;

  /**
  Esta es la email
  @example lisa@example.com
  */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
  Esta es el password
  @example aaBB33##
  */
  @IsNotEmpty()
  @IsString()
  @Length(4, 10)
  password: string;
}

export class UsersSignInDto {
  /**
  Esta es la email
  @example lisa@example.com
  */
  @IsNotEmpty()
  @IsEmail()
  email: string;

  /**
  Esta es el password
  @example aaBB33##
  */
  @IsNotEmpty()
  @IsString()
  @Length(4, 10)
  password: string;
}
