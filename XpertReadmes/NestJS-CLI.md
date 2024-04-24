# Nest JS - Command Line Interface (CLI)

[Volver a Inicio](../README.md)

## Inicializar proyecto de Nest (Sin CLI Global)

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

## Instalación de CLI de forma global

```bash
npm install -g @nestjs/cli

# Obtener listado de dependencias globales:
npm list -g --depth=0

# Desinstalar una dependencia global:
npm uninstall -g @nestjs/cli
```

## Comandos para la CLI Global

### Inicializar proyecto de Nest

```bash
nest new nest-demo

cd nest-demo

# Para correr proyecto de Nest:
npm run start
# Para actualizar servidor ante un cambio en el código
npm run start:dev
# Cortar servidor:
"Ctrl + c"
```

### Comandos Generales

```bash
nest generate <comando>
nest g <comando>
```

### Ayuda

```bash
nest -h
nest g -h
nest g s nombre -h
```

### Componentes

```bash
# Crear un Controlador:
nest g co <path/nombre>

# Crear un Decorador:
nest g d <path/nombre>

# Crear un Guardián:
nest g gu <path/nombre>

# Crear un Interceptor:
nest g in <path/nombre>

# Crear un Módulo:
nest g mo <path/nombre>

# Crear un Pipe:
nest g pi <path/nombre>

# Crear un Service:
nest g s <path/nombre>

# Crear un Recurso Completo:
nest g resource <path/nombre>
```

### Banderas (Flags)

```bash
# Crear en modo plano:
nest g co <path/nombre> --flat

# No crear archivo de Test:
nest g co <path/nombre> --no-spec
```
