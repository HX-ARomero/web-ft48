import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { User } from './interfaces/user.interface';
import { AuthGuard } from 'src/guards/auth.guard';
import { DateAdderInterceptor } from 'src/interceptors/date-adder.interceptor';

// http://localhost:3000/users
@Controller('users')
// @UseGuards(AuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // GET http://localhost:3000/users/?name=Lisa
  @Get()
  //* query = { name: 'Lisa' }
  getUsers(@Query('name') name: string) {
    if (name) return this.usersService.getUserByName(name);
    return this.usersService.getUsers();
  }

  // GET http://localhost:3000/users/profile
  @Get('profile')
  getProfile(@Headers('token') token: string) {
    if (!token) {
      return 'Se necesita un token para acceder a esta ruta';
    }
    if (token !== 'ValidToken') {
      return 'Token Inválido';
    }
    return 'Esta ruta devuelve el profile del usuario';
  }

  // GET http://localhost:3000/users/coffee
  @HttpCode(418)
  @Get('coffee')
  getCoffee() {
    return 'No hay café, soy una tetera!!!';
  }

  // GET http://localhost:3000/users/message
  @Get('message')
  getMessage(
    @Res() response: Response,
    @Req() request: Request & { now: string }
  ) {
    response.status(202).send(`Se aceptó la solicitud el día ${request.now}`);
  }

  // GET http://localhost:3000/users/request
  @Get('request')
  getRequest(@Req() request: Request) {
    console.log(request);
    return 'Esta ruta imprime el request en consola';
  }

  // GET http://localhost:3000/users/profile/name
  @Get('profile/name')
  getName() {
    return 'Esta ruta devuelve solo el nombre del usuario';
  }

  @Get('profile/images')
  @UseGuards(AuthGuard)
  getProfilePics() {
    return 'Estas son las fotos del usuario';
  }

  // http://localhost:3000/users/:id
  @Get(':id')
  // param = { id: 3, name: 'Marge' }
  getUserById(@Param('id') id: string) {
    const foundUser = this.usersService.getUserById(Number(id));
    if (foundUser) return foundUser;
    return 'No se encontró al usuario';
  }

  @Post()
  @UseInterceptors(DateAdderInterceptor)
  createUser(
    @Body() user: User,
    @Req() request: Request & { now: string }
  ) {
    const modifiedUser = {...user, createdAt: request.now };
    return this.usersService.createUser(modifiedUser);
  }

  @Put()
  updateUser() {
    return 'Esta ruta modifica un usuario';
  }

  @Delete()
  deleteUser() {
    return 'Esta ruta elimina un usuario';
  }
}

//* Evalúa path y método HTTP
//* Desestructurar información
//* Ejecuta el servicio
//* Da respuesta al usuario
