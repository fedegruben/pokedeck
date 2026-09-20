# PokeDeck

PokeDeck es un e-commerce de productos de Pokémon TCG desarrollado como proyecto final del curso de React.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- CSS

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

## Carga asíncrona

Los productos están definidos en `src/mock/asyncMock.js`.

La función `getProducts` simula una consulta a una API mediante una `Promise` y un `setTimeout` de dos segundos. `ItemListContainer` ejecuta esta función una sola vez al montarse usando `useEffect`, espera el resultado con `async/await` y guarda los productos mediante `useState`.

Mientras se espera la respuesta, la aplicación muestra el mensaje “Cargando productos...”. Cuando la promesa se resuelve, se renderiza el listado dinámicamente.

## Estado del proyecto

Esta entrega incluye un listado dinámico de productos y la vista individual de un producto obtenida mediante una promesa dinámica. Las categorías de navegación y el carrito todavía no tienen funcionalidad.

## Detalle de producto

La función `getProductById` recibe un identificador y busca el producto correspondiente dentro del array. La búsqueda simula una consulta asincrónica mediante una promesa y `setTimeout`.

`ItemDetailContainer` ejecuta esta función, administra el estado de carga y los posibles errores, y entrega el producto encontrado a `ItemDetail`.

La vista de detalle muestra la imagen, el nombre, la descripción, la categoría, el precio y el stock del producto. También reutiliza `ItemCount`, que no permite seleccionar una cantidad superior al stock ni inferior a cero.