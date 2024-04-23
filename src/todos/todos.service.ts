import { Injectable } from "@nestjs/common";

@Injectable()
export class TodosService {
  getTodos() {
    return 'Get all todos';
  }
}