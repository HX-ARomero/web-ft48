import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { LoggerMiddleware } from 'src/middlewares/logger';
import { UsersRepository } from './users.repository';
import { UsersDbService } from './users-db.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

const usersMockService = {
  getUsers: () => {
    return [
      {
        id: 1,
        name: 'Mock User 01',
        email: 'mockuser@gmail.com',
      },
    ];
  },
};

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    {
      provide: UsersService,
      //useValue: usersMockService
      useClass: UsersService,
    },
    UsersRepository,
    {
      provide: 'API_USERS',
      useFactory: async () => {
        const apiUsers = await fetch(
          'https://jsonplaceholder.typicode.com/users',
        ).then((response) => response.json());
        const cleanUsers = apiUsers.map((user: any) => {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        });
        return cleanUsers;
      },
    },
    UsersDbService,
  ],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
