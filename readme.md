# Beerflix

Beerflix es una app que viene a revolucionar el mundo del consumo de cerveza dando un acceso rápido a los mejores productos del mercado.
La aplicación conecta con una API proporcionada por un proveedor externo.

* La aplicación está optimizada para el uso de dispositivos móviles (mobile first).
* La aplicación muestra listadas las cervezas.
* La aplicación ofrece filtro por texto, por fecha y además limita siempre los resultados a un máximo de 10.
* La aplicación usa imágenes responsivas en el header. Para eso se hace uso de propiedades de css (son similares), y no de html como se explicó en el curso. 
* La aplicación muestra el detalle de cada una de las cervezas disponibles en la API.
* La aplicación muestra y permite likes y comentarios.
* La aplicación incorpora el uso de EsLint para revisar automáticamente warnings/errores del código.

## Instalando Beerflix
Beerflix está subida en el repositorio público de GitLab:
https://gitlab.keepcoding.io/pablesite/practica-frontend-con-js

Como con cualquier repositorio, se puede clonar, en el directorio en el que estemos posicionados, con:

```bash
git clone https://gitlab.keepcoding.io/pablesite/practica-frontend-con-js
```
A continuación hay que instalar los módulos necesarios:

```bash
npm install
```

## Arranque de la APP

Para arrancar la APP simplemente hacer:

```bash
npm run start
```

## Test de código con la herramienta Eslint
Como último punto de la documentación, cade destacar el uso de la herramienta Eslint para la revisión de estilo de código y de los posibles bugs.
Se han probado tan sólo unos pocos filtros y se ha comprobado la potencia de la misma. En futuras actualizaciones de la APP se pueden introducir más "rules" y obtener así el máximo partido que la herramienta proporciona.
No obstante, para testear los filtros implementados, se puede ejecutar directamente desde consola de la siguiente forma:

* Testear archivos js de la aplicación:
```bash
 npm run eslint
```

## Licencia
[Pablo Ruiz Molina] Repositorio público para el Bootcamp de Desarrollo Web de Keepcoding.
