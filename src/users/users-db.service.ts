import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersDbService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async create(user: any) {
    return this.usersRepository.save(user);
  }
}
