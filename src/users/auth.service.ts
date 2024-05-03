import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersDbService } from './users-db.service';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersDbService,
    private readonly jwtService: JwtService,
  ) {}

  async signUp(user: User) {
    const findUser = await this.userService.findByEmail(user.email);
    if (findUser) {
      throw new BadRequestException('El email ya ha sido registrado');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    if (!hashedPassword) {
      throw new BadRequestException('Error al hashear contraseña');
    }
    const newUser = this.userService.create({
      ...user,
      password: hashedPassword,
    });
    return newUser;
  }

  async signIn(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new BadRequestException('Credenciales incorrectas');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new BadRequestException('Credenciales incorrectas');
    }
    //* return 'Usuario logueado con éxito (Enviar Token)';
    //* Firmar Token
    const userPayload = {
      id: user.id,
      email: user.email,
    };
    const token = this.jwtService.sign(userPayload);
    return { message: 'Usuario logueado con éxito', token };
  }
}
