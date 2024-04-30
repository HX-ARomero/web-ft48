import { Inject, Injectable } from '@nestjs/common';
import { TodosRepository } from './todos.repository';
import { Repository } from 'typeorm';
import { File } from './files.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodosService {
  constructor(
    @Inject('ACCESS_TOKEN') private access_token: string,
    private readonly todosRepository: TodosRepository,
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>,
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

  saveFile(name: string, mimeType: string, data: Buffer): Promise<File> {
    const file = new File();
    file.name = name;
    file.mimeType = mimeType;
    file.data = data;

    return this.fileRepository.save(file);
  }
}
