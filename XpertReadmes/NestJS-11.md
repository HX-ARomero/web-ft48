# Nest JS - Nest JS Open API

[Volver a Inicio](../README.md)

## Links

- [OpenAPI Specification](https://swagger.io/specification/)
- [What is OpenAPI?](https://swagger.io/docs/specification/about/)
- [Nest JS - OpenAPI Get Started](https://docs.nestjs.com/openapi/introduction)

## IMPLEMENTAR SWAGGER EN NEST JS

### INSTALACIÓN

Para comenzar instalamos la dependencia:

```bash
$ npm install --save @nestjs/swagger
```

### CONFIGURACIÓN

En archivo "main.ts" inicializamos Swagger usando la clase SwaggerModule:

```ts
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
```

### DECORADORES

- @ApiTags( ): Permite agrupar las rutas en secciones.
- @ApiProperty( ): Permite agregar descripción y dato de ejemplo.
- @ApiHideProperty( ): Oculta el atributo en la documentación de Swagger.

### PLUGIN nestjs/swagger

Configuración en archivo "nest-cli.json":

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "deleteOutDir": true,
    "plugins": [
      {
        "name": "@nestjs/swagger",
        "options": {
          "classValidatorShim": true,
          "introspectComments": true
        }
      }
    ]
  }
}
```
- Decorador @ApiBearerAuth(): Permite indicar que una ruta es protegida por "Bearer".