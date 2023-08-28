# Proyecto citas con NODE y EXPRESS

Este proyecto da solución a un sistema para una eps para generar citas médicas.



## Tabla de contenido:

- [Diagrama Base de datos](#diagrama-base-de-datos)
- [Instrucciones de instalación](#instrucciones-para-la-instalación-del-proyecto)
- [Requerimientos del proyecto](#requerimientos)
- [Solución: Endpoints](#endpoints) 
    - [Uso del proyecto](#pasos-para-aplicación-y-testeo-de-proyecto)
    - [CRUD admin](#crud-del-proyecto)
    - [Requerimientos](#solucion-a-los-requerimientos)
- [Tecnologias](#tecnologías)
- [Dependencias de npm](#dependencias-utilizadas)

## Instrucciones para la instalación del proyecto:

Para la correcta instalación del proyecto siga las siguientes instrucciones: 

1. Clone el repositorio del proyecto y abra el archivo del proyecto en su editor de código. (Recomdación: utilizar Visual studio code)
2. Una vez lo tenga en forma local, abra una terminal y acceda a la ruta ./backend, de la siguiente forma: 
```bash
    cd backend
``` 
3. Una vez la terminal se encuentre en la ruta backend, implemente las dependencias que están en el package.json usando el siguiente comando:
```bash
    npm install
``` 
De esta forma verá que la carpeta "*node_modules*" y el archivo "*package-lock.json*" se crean después de contados segundos. 

4.  Para el uso de la base de datos:
* (opcional)  En este caso de que desee manejar la base de datos de manera local.  
    * Dirijase a la ruta ./backend/db/scripts, ahí encontrará el archivo llamado schema.mongodb
    * Para ejecutar este archivo instale la extensión de visual studio code "**MongoDB**". Una vez instalada la extensión tiene que realizar todo el proceso de creación y conexión con una cuenta MongoAtlas. Para más información referente a este tema recomendamos leer la documentación oficial
* Para la facilidad del evaluador las variables de entorno se dejaron especificadas en el archivo .env.example tal y como están en el .env. Por lo que en caso de querer utilizar el proyecto de forma correcta, unicamente es requerido renombrar el archivo. 

5. Cuando ya tenga la base de datos localmente se dirigirá nuevamente a la terminal que había abierto anteriormente y levantará el servidor de manera local usando el siguiente comando: 
```bash
    npm run dev
```

* En caso de que tenga problemas con la compilación del typescript despliegue una nueva terminal y ejecute el comanto *npm run tsc*.





## Diagrama base de datos 

* En este proyecto se utilizó una base de datos normalizada, esto con el objetivo de migrar un proyecto realizado en sql a mongoDB, para realizar consultas más fuertes se realizó de esta forma.

![esquemaSql](./uml/diagrama.png)




## Requerimientos

1. Obtener todos los pacientes alfabéticamente

2. Obtener todas las citas alfabéticamente

3. Obtener todos los médicos de una especialidad específica (por ejemplo, **'Cardiología'**):

4. Encontrar la próxima cita para un paciente específico (por ejemplo, el paciente con **usu_id 1**):

5. Encontrar todos los pacientes que tienen citas con un médico específico (por ejemplo, el médico con **med_nroMatriculaProsional 1**)

6. Obtener las consultorías para un paciente específico (por ejemplo, paciente **con usu_id 1**)

7. Encontrar todas las citas para un día específico (por ejemplo, **'2023-07-12'**)

8. Obtener los médicos y sus consultorios

9. Contar el número de citas que un médico tiene en un día específico (por ejemplo, el médico con **med_nroMatriculaProsional 1 en '2023-07-12'**)

10. Obtener los consultorio donde se aplicó las citas de un paciente

11. Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad

12. Insertar un paciente a la tabla usuario pero si es menor de edad solicitar primero que ingrese el acudiente y validar si ya estaba registrado el acudiente.

13. Mostrar todas las citas que fueron rechazadas y en un mes específico, mostrar la fecha de la cita, el nombre del usuario y el médico.


## EndPoints 

### Pasos para aplicación y testeo de proyecto

Para la creación del JWT para el inicio de proyecto y acceso a las versiones del proyecto es importante explicar que se realizaron 3 versiones MAJOR del proyecto únicamente como práctica y conocimiento de la libreria para versiones y permisos para los respectivos endPoints y métodos del proyecto dependiendo del rol del usuario. Por esto se crearon 3 roles en el proyecto:

* Un **Admin** que tiene acceso al CRUD, a todos los endpoints del proyecto y a las 3 versiones de la api.
* Un **Usuario** que únicamente tiene acceso a los endPoints tipo "GET" que dan solución a los requerimientos del proyecto.
* Un **Usuario Premium** que al igual que el usuario normal tiene acceso a los endPoints que dan solución a los requerimientos del proyecto, pero también tiene acceso a los GET del CRUD y al endPoint que permite ingresar un usuario y si es menor de edad y no tiene acompañante a su respectivo tutor. Adicional a esto tiene acceso tanto a la versión 2.0.0 y la 3.0.0 

#### Generación del JWT

Para crear el JWT de acceso dirijase a la extensión de testeo de preferencia mientras el servidor está activo e ingrese el endPoint:

```http
    POST /login
```

Y en el cuerpo de la solicitud debe ingresar el siguiente JSON:
```JSON
{
  "user_name": "",
  "clave": ""
}
```
En este caso y por cuestiones educativas se otrogan los usuarios y claves como están creados en la base de datos.
* Usuario administrador:  "user_name": "Admin123", "clave": "admin"
* Usuario estandar:  "user_name": "pepito", "clave": "user"
* Usuario premium:  "user_name": "premium", "clave": "premium".

Una vez creado el JWT para la session deberá copiarlo e ingresalo en los encabezados.
En los headers ingrese en "Autorization" : **Bearer *tokenGenerado***

Ahora para el uso de los endPoints del proyecto hay que tener en cuenta lo siguiente:

* **ADMIN**: Métodos permitidos [ GET, POST, PUT, DELETE ], versiones disponibles (1.0.0, 2.0.0, 3.0.0). Acceso completo al CRUD y todos los endPoints de proyecto.
* **USUARIO**: Métodos permitidos [ GET ], versiones disponibles (3.0.0). Acceso únicamente a los endPoints tipo GET de las consultas específicas del proyecto.
* **PREMIUM**: Métodos permitidos [ GET, POST ], versiones disponibles (2.0.0, 3.0.0). Acceso al métodos GET del CRUD, a todos los endPoints de las consultas específicas del proyecto.

### CRUD del Proyecto



* Colección acudiente

Para todos los métodos GET by Id, PUT, POST, DELETE se usa el siguiente endPoint

```http
     /api/use/acudiente
```
Para el método get by id, put y delete se debe enviar un parámetro en los headers de la siguiente manera ?id="valor", donde el "valor" es el id respectivo que queremos modificar. 

El cuerpo del método post o delete de este endPoint es validado y verificado por un DTO, y los valores y esquemas deben ser enviados como se evidencia en los siguientes ejemplos: 

```JSON
{
    "nombre_acudiente": "Edgar Eduardo Mantilla Garcia", 
    "telefono": 3167965248, 
    "direccion": "Lebrija Santander"
}
```

Para el GET all data, el endPoint es el siguiente:

```http
    GET /api/use/acudientes
```
* Colección cita

Para todos los métodos GET by Id, PUT, POST, DELETE se usa el siguiente endPoint

```http
     /api/use/cita
```
Para el método get by id, put y delete se debe enviar un parámetro en los headers de la siguiente manera ?id="valor", donde el "valor" es el id respectivo que queremos modificar. 

El cuerpo del método post o delete de este endPoint es validado y verificado por un DTO, y los valores y esquemas deben ser enviados como se evidencia en los siguientes ejemplos: 

```JSON
{
    "fecha_cita": "2023-07-13", 
    "estado_cita": 1, 
    "medico_asignado": 123, 
    "usuario_cita": 1
}
```

Para el GET all data, el endPoint es el siguiente:

```http
    GET /api/use/citas
```
* Colección consultorio

Para todos los métodos GET by Id, PUT, POST, DELETE se usa el siguiente endPoint

```http
     /api/use/consultorio
```
Para el método get by id, put y delete se debe enviar un parámetro en los headers de la siguiente manera ?id="valor", donde el "valor" es el id respectivo que queremos modificar. 

El cuerpo del método post o delete de este endPoint es validado y verificado por un DTO, y los valores y esquemas deben ser enviados como se evidencia en los siguientes ejemplos: 

```JSON
{
    "nombre_consultorio": "Consultorio A"
}
```

Para el GET all data, el endPoint es el siguiente:

```http
    GET /api/use/consultorios
```
* Colección especialidad

Para todos los métodos GET by Id, PUT, POST, DELETE se usa el siguiente endPoint

```http
     /api/use/especialidad
```
Para el método get by id, put y delete se debe enviar un parámetro en los headers de la siguiente manera ?id="valor", donde el "valor" es el id respectivo que queremos modificar. 

El cuerpo del método post o delete de este endPoint es validado y verificado por un DTO, y los valores y esquemas deben ser enviados como se evidencia en los siguientes ejemplos: 

```JSON
{
    "especialidad": "Cardiología"
}
```

Para el GET all data, el endPoint es el siguiente:

```http
    GET /api/use/especialidades
```
* Colección estado cita

Para todos los métodos GET by Id, PUT, POST, DELETE se usa el siguiente endPoint

```http
     /api/use/estadoCita
```
Para el método get by id, put y delete se debe enviar un parámetro en los headers de la siguiente manera ?id="valor", donde el "valor" es el id respectivo que queremos modificar. 

El cuerpo del método post o delete de este endPoint es validado y verificado por un DTO, y los valores y esquemas deben ser enviados como se evidencia en los siguientes ejemplos: 

```JSON
{
    "estado_cita": "Pendiente"
}
```

Para el GET all data, el endPoint es el siguiente:

```http
    GET /api/use/estadoCitas
```
* Colección genero

Para todos los métodos GET by Id, PUT, POST, DELETE se usa el siguiente endPoint

```http
     /api/use/genero
```
Para el método get by id, put y delete se debe enviar un parámetro en los headers de la siguiente manera ?id="valor", donde el "valor" es el id respectivo que queremos modificar. 

El cuerpo del método post o delete de este endPoint es validado y verificado por un DTO, y los valores y esquemas deben ser enviados como se evidencia en los siguientes ejemplos: 

```JSON
{
    "genero_mombre": "Masculino", 
    "abreviatura": "M"
}
```

Para el GET all data, el endPoint es el siguiente:

```http
    GET /api/use/generos
```
* Colección medico

Para todos los métodos GET by Id, PUT, POST, DELETE se usa el siguiente endPoint

```http
     /api/use/medico
```
Para el método get by id, put y delete se debe enviar un parámetro en los headers de la siguiente manera ?id="valor", donde el "valor" es el id respectivo que queremos modificar. 

El cuerpo del método post o delete de este endPoint es validado y verificado por un DTO, y los valores y esquemas deben ser enviados como se evidencia en los siguientes ejemplos: 

```JSON
{
    "matricula_profesional": 123, 
    "nombre_medico": "Dr. Juan Pérez", 
    "consultorio": 1, 
    "especialidad": 1
}
```

Para el GET all data, el endPoint es el siguiente:

```http
    GET /api/use/medicos
```
* Colección tipo documento

Para todos los métodos GET by Id, PUT, POST, DELETE se usa el siguiente endPoint

```http
     /api/use/tipoDocumento
```
Para el método get by id, put y delete se debe enviar un parámetro en los headers de la siguiente manera ?id="valor", donde el "valor" es el id respectivo que queremos modificar. 

El cuerpo del método post o delete de este endPoint es validado y verificado por un DTO, y los valores y esquemas deben ser enviados como se evidencia en los siguientes ejemplos: 

```JSON
{
    "tipo_documento": "Cedula de Ciudadania", 
    "abreviatura": "Cc"
}
```

Para el GET all data, el endPoint es el siguiente:

```http
    GET /api/use/tipoDocumentos
```
* Colección usuario

Para todos los métodos GET by Id, PUT, POST, DELETE se usa el siguiente endPoint

```http
     /api/use/usuario
```
Para el método get by id, put y delete se debe enviar un parámetro en los headers de la siguiente manera ?id="valor", donde el "valor" es el id respectivo que queremos modificar. 

El cuerpo del método post o delete de este endPoint es validado y verificado por un DTO, y los valores y esquemas deben ser enviados como se evidencia en los siguientes ejemplos: 

```JSON
{
    "nombre_usuario": "Andres", 
    "segundo_nombre_usuario": "Santiago", 
    "apellido_usuario": "Carvajal", 
    "segundo_apellido_usuario": "Peliño", 
    "telefono": "3154784596", 
    "direccion": "Bucaramanga", 
    "email": "santiagoyo@gmail.com", 
    "tipo_documento": 1, 
    "genero": 1, 
    "acudiente": 1
}
```

Para el GET all data, el endPoint es el siguiente:

```http
    GET /api/use/usuarios
```


### Solucion a los requerimientos 
1. GET api/use/usuarios
2. GET api/use/citas
3. GET api/use/especialidadName?esp=<especialidad>
4. GET api/use/usuario?id=<usu_id>
5. GET api/use/pacientesMedico?id=<nro_matriculamedica>
6. GET api/use/citasByPaciente?id=<usu_id>
7. GET api/use/citaByFecha?date=<YYYY-MM-DD>
8. GET api/use/consultoriosMed
9. GET api/use/numCitasByDay?id=<nro_matriculamedica>&date=<YYYY-MM-DD>
10. GET api/use/citaConsultorio
11. GET api/use/citasByGenero?gen=<gen_abreviatura>
12. POST api/use/ingresoUsu
13. GET api/use/citasByPlazos?month=<MM>



## Tecnologías

 ![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Dependencias utilizadas

Para el presente proyecto se van a utilizar las siguientes dependencias en sus respectivas versiones:

  ```json
        "dev": "nodemon --quiet app.js"
        "class-transformer": "0.5.1",
        "class-validator": "0.14.0",
        "dotenv": "16.3.1",
        "express": "4.18.2",
        "express-rate-limit": "6.8.1",
        "express-routes-versioning": "1.0.1",
        "jose": "4.14.4",
        "mongodb": "5.7.0",
        "nodemon": "3.0.1",
        "passport": "0.6.0",
        "passport-http-bearer": "1.0.1",
        "reflect-metadata": "0.1.13",
        "typescript": "5.1.6"
  ```


  **Autor**: David Rueda // campuslands