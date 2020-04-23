import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { TodosService, Todos } from './todos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from './todos.entity';

describe('Todos Controller', () => {
  let todoController: TodosController;
  let todoService: TodosService;
  const todos = [
    {
      id: 0,
      body: 'test0',
      isDone: false,
    },
    {
      id: 1,
      body: 'test2',
      isDone: true,
    },
  ];

  beforeEach(async () => {
    const MockRepository = {
      provide: getRepositoryToken(Todo),
      useValue: {
        find: () => todos,
        insert: entity => todos.push(entity),
        update: (id, entity) => entity,
        delete: () => todos.splice(0, 1),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [TodosService, MockRepository],
    }).compile();

    todoController = module.get<TodosController>(TodosController);
    todoService = module.get<TodosService>(TodosService);
  });

  it('should to create todo', async () => {
    const todo: Todos = {
      body: 'test',
      isDone: false,
    };
    const res = await todoController.createTodo(todo);
    expect(res.body).toBeDefined();
  });

  it('should return todo array', async () => {
    const res = await todoController.findAll();
    expect(res).toStrictEqual(todos);
  });

  // it('should to delete item', async () => {
  //   await todoController.deleteTodo(0);
  //   const res = await todoController.getAll();
  //   console.log(res);
  //   expect(res).toStrictEqual(todos);
  // });
});
