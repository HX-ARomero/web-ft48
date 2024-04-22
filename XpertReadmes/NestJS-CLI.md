# Nest JS - Command Line Interface (CLI)

[Volver a Inicio](../README.md)

## Instalación de CLI de forma global

```bash
npm install -g @nestjs/cli

# Obtener listado de dependencias globales:
npm list -g --depth=0

# Desinstalar una dependencia global:
npm uninstall -g @nestjs/cli
```

## Inicializar proyecto de Nest

```bash
npx @nestjs/cli new nest-demo

cd nest-demo

# Para correr proyecto de Nest:
npm run start
# Para actualizar servidor ante un cambio en el código
npm run start:dev
# Cortar servidor:
"Ctrl + c"
```
