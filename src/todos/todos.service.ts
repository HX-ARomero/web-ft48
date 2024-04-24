import { Inject, Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';

@Injectable()
export class TodosService {
  constructor(
    @Inject('ACCESS_TOKEN') private access_token: string,
    private readonly todosRepository: TodosRepository,
  ) {}

  getTodos() {
    const allTodos = this.todosRepository.getTodos();
    //* Modifico info
    if (this.access_token === 'EsteEsMiToken') {
      return allTodos;
    } else {
      return 'Token Inválido, acceso denegado';
    }
  }
}
