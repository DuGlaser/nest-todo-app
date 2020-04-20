import { Test, TestingModule } from '@nestjs/testing';
import { TodosService, Todos } from './todos.service';

describe('TodosService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should return todo array', async () => {
    const todo: Todos = {
      body: 'test',
      isDone: false,
    };
    service.createTodo(todo);
    expect(service.getTodos()).toStrictEqual([todo]);
  });

  it('should edit todo array', async () => {
    const todo1: Todos = {
      body: 'test',
      isDone: false,
    };

    const todo2: Todos = {
      body: 'edit',
      isDone: false,
    };
    service.createTodo(todo1);
    service.editTodo(todo2, '0');
    expect(service.getTodos()).toStrictEqual([todo2]);
  });
});
