import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { MorganMiddleware } from './middlewares/morgan.middleware';

@Module({
  imports: [UsersModule, TodosModule],
  controllers: [AppController],
  providers: [{
    provide: AppService,
    useClass: AppService
  }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}