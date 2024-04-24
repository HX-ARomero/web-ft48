import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

// http://localhost:3000/users
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}

//* Evalúa path y método HTTP
//* Desestructurar información
//* Ejecuta el servicio
//* Da respuesta al usuario
