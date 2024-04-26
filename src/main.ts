import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerGlobalMiddleware } from './middlewares/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(LoggerGlobalMiddleware);
  await app.listen(3000);
  console.log('Server listening on http://localhost:3000');
}
bootstrap();
