# Implementar Morgan en Nest

[Volver a Inicio](../README.md)

Para utilizar el logger "morgan" en un proyecto de Nest, puedes seguir estos pasos:

Primero, instala el paquete morgan:

```bash
npm install morgan
```

Luego, crea un middleware de Nest para utilizar "morgan". Puedes crear un nuevo archivo, por ejemplo morgan.middleware.ts, y agregar el siguiente código:

```ts
import { Injectable, NestMiddleware } from '@nestjs/common';
import * as morgan from 'morgan';

@Injectable()
export class MorganMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    morgan('dev')(req, res, next);
  }
}
```

Este middleware utilizará la configuración "combined" de morgan, que incluye información detallada sobre cada solicitud.

Registra este middleware en tu módulo principal (por lo general, AppModule). Importa el middleware y agrégalo a la lista de providers en el módulo:

```ts
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MorganMiddleware } from './morgan.middleware';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(MorganMiddleware).forRoutes('*');
  }
}
```

En este ejemplo, el middleware MorganMiddleware se aplica a todas las rutas ('\*'), lo que significa que registrará todas las solicitudes entrantes.

Con estos pasos, has configurado "morgan" en tu proyecto de Nest para que registre las solicitudes entrantes. Asegúrate de ajustar la configuración según tus necesidades específicas.