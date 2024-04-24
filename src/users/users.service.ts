import { Inject, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @Inject('API_USERS') private api_users: any[],
    private readonly usersRepository: UsersRepository) {}

  async getUsers() {

    const DBUsers = await this.usersRepository.getUsers();
    const allUsers = [...this.api_users, ...DBUsers];

    return allUsers;
  }
}

//* Ejecuta la lógica de negocio