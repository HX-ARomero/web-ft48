import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';

@Module({
  imports: [],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
