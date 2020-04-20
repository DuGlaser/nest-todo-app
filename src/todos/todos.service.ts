import { Injectable } from '@nestjs/common';

export interface Todos {
  body: string;
  isDone: boolean;
}

@Injectable()
export class TodosService {
  private readonly todos: Todos[] = [];

  getTodos(): Todos[] {
    return this.todos;
  }

  // setTodos(todo: Todos): Promise<any> {
  //   return new Promise(resolve => {
  //     this.todos.push(todo);
  //     resolve(todo);
  //   });
  // }

  createTodo(todo: Todos) {
    this.todos.push(todo);
  }

  editTodo(todo: Todos, id: string) {
    this.todos[id] = todo;
  }
}
