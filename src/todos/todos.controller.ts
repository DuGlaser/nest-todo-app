import { Controller, Body, Post, Get, Param } from '@nestjs/common';
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
  getAll() {
    return this.todoService.getTodos();
  }

  @Post('/edit/:id')
  edit(@Body() todo: TodoDto, @Param() params) {
    return this.todoService.editTodo(todo, params.id);
  }

  @Get('/delete/:id')
  deleteTodo(@Param() parames) {
    this.todoService.deleteTodo(parames.id);
  }
}
