# PokeDeck

PokeDeck es un e-commerce de productos de Pokémon TCG desarrollado como proyecto final del curso de React.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- CSS
- React Router

## Instalación

Para instalar las dependencias del proyecto:

```bash
npm install
```

## Ejecución

Para iniciar la aplicación:

```bash
npm run dev
```

## Componentes

Los componentes se encuentran en `src/components`:

- `Navbar`: muestra el nombre PokeDeck, las categorías y el `CartWidget`.
- `CartWidget`: muestra un ícono de carrito y una cantidad fija de productos.
- `ItemListContainer`: obtiene los productos, los guarda en el estado `items` y controla el mensaje de carga.
- `ItemList`: recibe los productos mediante props y los recorre con `.map()`.
- `Item`: presenta la información de cada producto en una tarjeta.
- `ItemDetailContainer`: busca un producto por su identificador, administra la promesa y guarda el resultado en un estado.
- `ItemDetail`: recibe el producto mediante props y muestra toda su información.
- `ItemCount`: permite seleccionar una cantidad entre cero y el stock disponible.
- `Layout`: mantiene visibles el `Navbar` y el `Footer` en todas las rutas.
- `Footer`: muestra la información de copyright del proyecto.
- `NotFound`: informa cuando el usuario visita una URL inexistente.

## Carga asíncrona

Los productos están definidos en `src/mock/asyncMock.js`.

La función `getProducts` simula una consulta a una API mediante una `Promise` y un `setTimeout` de dos segundos. `ItemListContainer` ejecuta esta función mediante `useEffect`, espera el resultado con `async/await`, filtra los productos cuando cambia la categoría de la URL y guarda el resultado mediante `useState`.

Mientras se espera la respuesta, la aplicación muestra el mensaje “Cargando productos...”. Cuando la promesa se resuelve, se renderiza el listado dinámicamente.

## Estado del proyecto

Esta entrega incluye navegación por rutas, filtrado dinámico por colección, detalle individual de productos, layout compartido y manejo de páginas inexistentes. El carrito todavía no tiene funcionalidad.

## Detalle de producto

La función `getProductById` recibe un identificador y busca el producto correspondiente dentro del array. La búsqueda simula una consulta asincrónica mediante una promesa y `setTimeout`.

`ItemDetailContainer` ejecuta esta función, administra el estado de carga y los posibles errores, y entrega el producto encontrado a `ItemDetail`.

La vista de detalle muestra la imagen, el nombre, la descripción, la categoría, el precio y el stock del producto. También reutiliza `ItemCount`, que no permite seleccionar una cantidad superior al stock ni inferior a cero.

## Navegación

La aplicación utiliza React Router para navegar sin recargar completamente la página.

Las rutas disponibles son:

- `/`: muestra el catálogo completo.
- `/category/:id`: filtra los productos según la colección indicada.
- `/item/:id`: muestra el detalle del producto seleccionado.
- `*`: muestra la página de error 404 para una URL inexistente.

El catálogo contiene 14 cartas distribuidas entre las colecciones Base Set, Jungle, Fossil y Team Rocket. El menú utiliza `NavLink`, mientras que cada tarjeta utiliza `Link` para acceder al detalle del producto.