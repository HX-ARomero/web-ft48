import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersRepository {
  //* Simular nuestra BBDD:
  private users = [
    {
      id: 1,
      name: 'Homero',
      email: 'homero@gmail.com',
    },
    {
      id: 2,
      name: 'Marge',
      email: 'marge@gmail.com',
    },
    {
      id: 3,
      name: 'Lisa',
      email: 'lisa@gmail.com',
    },
  ];

  async getUsers() {
    return await this.users;
  }

  async getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  async getUserByName(name: string) {
    return this.users.find((user) => user.name === name);
  }

  async createUser(user: User) {
    const id = this.users.length + 1;
    this.users = await [...this.users, {id, ...user}];
    return this.users;
  }

}

//* Conectarse con el exterior
