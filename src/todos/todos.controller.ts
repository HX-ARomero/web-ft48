import { Controller, Get, Param, UsePipes, ValidationPipe } from "@nestjs/common";
import { TodosService } from "./todos.service";

// http://localhost:3000/todos
@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  
  @Get()
  getTodos() {
    return this.todosService.getTodos();
  }

  @Get(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  getTodoById(@Param('id') id: number) {
    console.log({ id, type: typeof id });
    return `Retorna todo con id ${id}`;
  }

}