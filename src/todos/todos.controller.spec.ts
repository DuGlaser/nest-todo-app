import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService, Todos } from './todos.service';

describe('Todos Controller', () => {
  let todoController: TodosController;
  let todoService: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService],
    }).compile();

    todoController = module.get<TodosController>(TodosController);
    todoService = module.get<TodosService>(TodosService);
  });

  it('should to create todo', async () => {
    const todo: Todos = {
      body: 'test',
      isDone: false,
    };
    jest.spyOn(todoService, 'createTodo').mockImplementation(() => [todo]);

    expect(await todoController.createNewTodo(todo)).toBe(todo);
  });

  it('should return todo array', async () => {
    const todo: Todos = {
      body: 'test',
      isDone: false,
    };
    jest.spyOn(todoService, 'getTodos').mockImplementation(() => [todo]);
    expect(await todoController.getAll()).toStrictEqual([todo]);
  });
});
