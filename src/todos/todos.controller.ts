import { Controller, Get } from "@nestjs/common";
import { TodosService } from "./todos.service";

// http://localhost:3000/todos
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  
  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

}