import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { MorganMiddleware } from './middlewares/morgan.middleware';
import { DateAdderInterceptor } from './interceptors/date-adder.interceptor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeOrmConfig from './config/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    // Configuramos a las variables de entorno:
    ConfigModule.forRoot({
      isGlobal: true,
      load: [typeOrmConfig],
    }),
    TypeOrmModule.forRootAsync({
      // Accedemos a las variables de entorno:
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        configService.get('typeorm'),
    }),
    UsersModule,
    TodosModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '1h',
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: AppService,
      useClass: AppService,
    },
    {
      provide: 'APP_INTERCEPTOR',
      useClass: DateAdderInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}

//* Configuración de TypeORM en app.module.ts
// import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './users/users.module';
// import { TodosModule } from './todos/todos.module';
// import { MorganMiddleware } from './middlewares/morgan.middleware';
// import { DateAdderInterceptor } from './interceptors/date-adder.interceptor';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import typeOrmConfig from './config/typeorm';

// @Module({
//   imports: [
//     // Accedemos a las variables de entorno:
// 		ConfigModule.forRoot({
// 			isGlobal: true,
// 			envFilePath: '.development.env',
// 		}),
// 		// TypeOrmModule => acceder a variables de entorno:
// 		TypeOrmModule.forRootAsync({ ///// /////
// 			inject: [ConfigService],
// 			useFactory: (configService: ConfigService) => ({
// 				type: 'postgres',
// 				database: configService.get<string>('DB_NAME'),
// 				host: configService.get<string>('DB_HOST'),
// 				port: configService.get<number>('DB_PORT'),
// 				username: configService.get<string>('DB_USERNAME'),
// 				password: configService.get<string>('DB_PASSWORD'),
// 				// Configuraciones Extra:
// 				logging: true,
// 				synchronize: true, // Se pasará a false en producción
// 				dropSchema: true, // Se pasará a false en producción
// 			}),
// 		}),

//     UsersModule, TodosModule],
//   controllers: [AppController],
//   providers: [{
//     provide: AppService,
//     useClass: AppService
//   },
//   {
//     provide: 'APP_INTERCEPTOR',
//     useClass: DateAdderInterceptor,
//   },],
// })
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(MorganMiddleware).forRoutes('*');
//   }
// }
