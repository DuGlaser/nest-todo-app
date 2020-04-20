import { Controller, Body, Post, Get } from '@nestjs/common';
import { TodosService, Todos } from './todos.service';
import { TodoDto } from './todos.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Post()
  async createNewTodo(@Body() todo: TodoDto) {
    this.todoService.createTodo(todo);
    return todo;
  }

  @Get()
  getAll(): Todos[] {
    return this.todoService.getTodos();
  }
}
