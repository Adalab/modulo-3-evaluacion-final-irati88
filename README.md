Harry Potter Character Finder

Este proyecto es parte de la evaluación final del Módulo 3 del bootcamp de programación web de Adalab. Se trata de una aplicación web desarrollada en React que permite visualizar un listado de personajes de Harry Potter, filtrarlos por nombre, casa y otros criterios, y ver información detallada de cada uno.

El objetivo es construir una SPA (Single Page Application) con React que consuma una API pública para mostrar un listado de personajes de la saga de Harry Potter, con funcionalidades como:

- Filtrado por nombre y casa
- Detalles del personaje
- Navegación entre páginas con React Router
- Mejora visual con diseño responsive

// ** Tecnologías utilizadas ** //

- React
- React Router DOM
- HTML / CSS
- JavaScript
- Fetch API
- Git & GitHub
- GitHub Pages para el deploy

// ** Funcionalidades implementadas ** //

-- Listado de personajes -- 

- Consumo de la API: hp-api.onrender.com
- Visualización de cada personaje con su imagen, nombre y especie.
- Imagen de relleno para personajes sin imagen.

-- Filtrado de personajes --

- Por nombre (input controlado, case-insensitive).
- Por casa (select dinámico).

-- Componentes --

- CharacterFilter (input + select)
- CharacterList (listado de tarjetas)
- CharacterCard (tarjeta individual)
- CharacterDetail (pantalla de detalle)

-- Detalle del personaje --

- Lista individual usando React Router.
- Información mostrada:

     - Imagen
     - Nombre completo
     - Casa
     - Estado (vivo o muerto)
     - Género
     - Especie

 // ** Buenas prácticas aplicadas ** //

- Uso de PropTypes para validación de props.
- Uso de useState y useEffect para manejo de estado y efectos.
- Limpieza de errores en consola.
- Código modular y reutilizable.
- Uso de destructuring y valores por defecto.
- Nombres de variables, funciones y archivos en inglés.
© Irati Aguado 2025





