# Nest JS - Nest JS & TypeORM

[Volver a Inicio](../README.md)

## Migraciones

### Scripts en Archivo "package.json":

```json
"scripts": {
	// ----- ----- ----- -----
	"typeorm": "ts-node ./node_modules/typeorm/cli",
	"migration:run": "npm run typeorm migration:run -- -d ./src/config/typeorm.ts",
	"migration:generate": "npm run typeorm -- -d ./src/config/typeorm.ts migration:generate",
	"migration:create": "npm run typeorm migration:create",
	"migration:revert": "npm run typeorm -- -d ./src/config/typeorm.ts migration:revert",
	"migration:show": "npm run typeorm -- -d ./src/config/typeorm.ts migration:show"
},
```

### Ejemplo de Archivo de Migración

```ts
import { MigrationInterface, QueryRunner } from 'typeorm';

export class MyMigration implements MigrationInterface {
  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE <tabla a modificar> CAMBIOS A REALIZAR',
    );
  }
  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE <tabla a modificar> CAMBIOS A REALIZAR',
    );
  }
}
```
