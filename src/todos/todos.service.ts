import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from './todos.entity';
import { Repository } from 'typeorm';

export interface Todos {
  body: string;
  isDone: boolean;
}

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  getTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  createTodo(todo: Todos): Promise<any> {
    return new Promise(resolve => {
      this.todoRepository.save(todo);
      resolve(todo);
    });
  }

  editTodo(todo: Todos, id: string) {
    this.todoRepository.update(id, todo);
  }
}
