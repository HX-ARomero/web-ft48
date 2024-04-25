import { Inject, Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './interfaces/user.interface';

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

  getUserById(id: number) {
    return this.usersRepository.getUserById(id);
  }

  getUserByName(name: string) {
    return this.usersRepository.getUserByName(name);
  }

  createUser(user: User) {
    return this.usersRepository.createUser(user);
  }
}

//* Ejecuta la lógica de negocio