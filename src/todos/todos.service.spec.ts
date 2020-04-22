import { Test, TestingModule } from '@nestjs/testing';
import { TodosService, Todos } from './todos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Todo } from './todos.entity';

describe('TodosService', () => {
  let service: TodosService;

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
      providers: [TodosService, MockRepository],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  // it('should return todo array', async () => {
  //   const todo: Todos = {
  //     body: 'test',
  //     isDone: false,
  //   };
  //   const res = await service.createTodo(todo);
  //   expect(res.body).toBeDefined();
  // });

  it('should edit todo array', async () => {
    expect(service.getTodos()).toStrictEqual(todos);
  });
});
