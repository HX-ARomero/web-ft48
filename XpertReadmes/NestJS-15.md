# Nest JS - REPASO

[Volver a Inicio](../README.md)

## CONEXIÓN A LA BASE DE DATOS SQL Shell (psql)

### A la Base de Datos del Contenedor de Docker:

- Teniendo en cuenta la información en el archivo ".development.env":

- En la Terminal Integrada ingresamos:

```bash
# Obtener el nombre del CONTENEDOR de la BBDD:
docker ps # Copiamos el nombre

# Ingresar a la consola "bash" del contenedor:
docker exec -it <nombre_contenedor> bash

# Ingresar a la consola "psql":
psql -U <usuario> -d <base_de_datos>

# Obtener las tablas e información de la tabla "users":
\dt
SELECT * FROM users;

# Hacer Admin a un Usuario:
UPDATE users SET isAdmin = true WHERE name = 'NombreUsuario';

# Salir de la consola SQL:
exit

# Salir de la consola bash:
exit
```

### A la Base de Datos de Render:

- Para conectarnos a la Base de Datos desde SQL Shell (psql) tomaremos las credenciales desde RENDER
  - Sección "Connections"

```txt
Hostname:              <hostname>
Port:                  <database_port>
Database:              <database_name>
Username:              <user_name>
Password:              <password>
Internal Database URL: <internal_database_URL>
External Database URL: <external_database_URL>
PSQL Command:          <PSQL Command>
```

- Ingresamos en SQL Shell (psql):

```sql
Server [localhost]:                  <external_database_URL>
Database [postgres]:                 <external_database_URL>
Port [5432]:                         <database_port>
Username [postgres]:                 <user_name>
Contraseña para usuario <user_name>: <PSQL Command>

demo_2nbp=>

# Obtener las tablas e información de la tabla "users":
\dt
SELECT * FROM users;

# Hacer Adimn a un Usuario
UPDATE users SET isAdmin = true WHERE name = 'NombreUsuario';

```
