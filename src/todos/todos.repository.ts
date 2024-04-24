import { Injectable } from "@nestjs/common";

@Injectable()
export class TodosRepository {
  private todos = [
    {
      id: 1,
      title: 'Todo 01',
      description: 'Description 01',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Todo 02',
      description: 'Description 02',
      isCompleted: false
    },
    {
      id: 3,
      title: 'Todo 03',
      description: 'Description 03',
      isCompleted: false
    },
  ];

  async getTodos() {
    return await this.todos;
  }
}