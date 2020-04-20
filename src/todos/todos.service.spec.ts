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

  it('should be defined', async () => {
    const todo: Todos = {
      body: 'test',
      isDone: false,
    };
    service.createTodo(todo);
    expect(service.getTodos()).toStrictEqual([todo]);
  });
});
