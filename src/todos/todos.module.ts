import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { TodosRepository } from './todos.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './files.entity';

const ACCESS = 'EsteEsMiToken';

@Module({
  imports: [TypeOrmModule.forFeature([File])],
  controllers: [TodosController],
  providers: [
    {
      provide: 'ACCESS_TOKEN',
      useValue: ACCESS,
    },
    TodosService,
    TodosRepository
  ],
})
export class TodosModule {}
