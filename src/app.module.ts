import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'develop',
      password: 'password',
      database: 'develop',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
