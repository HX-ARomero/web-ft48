# Nest JS - Nest JS Routing

[Volver a Inicio](../README.md)

## 🎯 Diferencias entre PUT y PATCH
- PUT: Se utiliza para realizar una actualización completa de un recurso.
- PATCH: Se utiliza para realizar una actualización parcial de un recurso.

## 🎯 Guardianes
- Son funciones que devuelven "true" o "false".
- No tienen acceso directo a "Req, Res o Next", pero sí al contexto de ejecución.

## 🎯 Interceptores
- Al igual que los Guardianes, tienen un mecanismo de acción similar a los Middlewares por el hecho de que interceptan la request previo a la llegada a los Controllers, pero con otro modo de trabajar.
- Un interceptor se utiliza para modificar información previo a la llegada del request al Controlador o antes de que la response llegue al cliente.