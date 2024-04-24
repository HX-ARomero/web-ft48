import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersRepository {
  //* Simular nuestra BBDD:
  private users = [
    {
      id: 1,
      name: 'Homero',
      email: 'homero@gmail.com'
    },
    {
      id: 2,
      name: 'Marge',
      email: 'marge@gmail.com'
    },
    {
      id: 3,
      name: 'Lisa',
      email: 'lisa@gmail.com'
    },
  ];

  async getUsers() {
    return await this.users;
  }
}

//* Conectarse con el exterior