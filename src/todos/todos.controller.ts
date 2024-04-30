import { Controller, Get, Param, Post, UploadedFile, UseInterceptors, UsePipes, ValidationPipe } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { FileInterceptor } from "@nestjs/platform-express";

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

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    await this.todosService.saveFile(
      file.originalname,
      file.mimetype,
      file.buffer
    );
    return 'Archivo guardado';
  }

}