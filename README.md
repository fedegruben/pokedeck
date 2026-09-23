# PokeDeck

PokeDeck es un e-commerce de cartas de Pokémon TCG desarrollado como proyecto final del curso de React.

La aplicación permite navegar por el catálogo, filtrar cartas por colección, consultar sus detalles, administrar un carrito, registrar usuarios y generar órdenes de compra.

## Tecnologías utilizadas

- React
- JavaScript
- Vite
- CSS
- React Router
- Firebase Authentication
- Cloud Firestore

## Instalación

Para instalar las dependencias:

```bash
npm install
```

## Variables de entorno

Creá un archivo `.env.local` en la raíz del proyecto con estas variables:

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

Los valores deben obtenerse desde la configuración del proyecto de Firebase.

El archivo con los valores reales está ignorado por Git y no debe subirse al repositorio.

## Ejecución

Para iniciar la aplicación:

```bash
npm run dev
```

## Funcionalidades

- Catálogo almacenado en Cloud Firestore.
- Filtrado de productos por categoría.
- Detalle individual de cada producto.
- Carrito administrado con Context.
- Registro e inicio de sesión con email y contraseña.
- Persistencia de la sesión con Firebase Authentication.
- Cierre de sesión.
- Checkout protegido para usuarios autenticados.
- Formulario con datos de entrega.
- Generación de órdenes en Firestore.
- Confirmación con el ID de la orden.

## Rutas

- `/`: catálogo completo.
- `/category/:id`: productos filtrados por colección.
- `/item/:id`: detalle de un producto.
- `/cart`: carrito de compras.
- `/login`: registro e inicio de sesión.
- `/checkout`: checkout protegido.
- `*`: página de error 404.

## Firebase Authentication

El estado del usuario se administra mediante `AuthContext`.

La aplicación utiliza Firebase Authentication para:

- Registrar usuarios con email y contraseña.
- Iniciar sesión.
- Mantener la sesión al recargar la página.
- Mostrar el email del usuario autenticado.
- Cerrar sesión.

## Colecciones de Firestore

### products

Contiene las cartas que se muestran en el catálogo.

Ejemplo de un documento:

```json
{
  "name": "Charizard",
  "description": "Carta holográfica clásica de Charizard.",
  "price": 18500,
  "img": "https://images.pokemontcg.io/base1/4_hires.png",
  "category": "base-set",
  "stock": 3
}
```

`ItemListContainer` consulta todos los productos o los filtra por categoría mediante `query()` y `where()`.

`ItemDetailContainer` obtiene un único producto mediante `doc()` y `getDoc()`.

### orders

Contiene las órdenes generadas por los usuarios autenticados.

Ejemplo de estructura:

```json
{
  "usuario": {
    "id": "ID_DEL_USUARIO",
    "email": "usuario@ejemplo.com"
  },
  "comprador": {
    "nombre": "Nombre",
    "apellido": "Apellido",
    "telefono": "123456789",
    "direccion": "Dirección de ejemplo",
    "ciudad": "Ciudad"
  },
  "productos": [
    {
      "id": "1",
      "nombre": "Charizard",
      "precio": 18500,
      "cantidad": 1
    }
  ],
  "total": 18500,
  "fecha": "Timestamp generado por Firebase"
}
```

La orden se crea mediante `addDoc()` y utiliza `serverTimestamp()` para guardar la fecha.

El carrito se vacía solamente después de que Firebase crea correctamente la orden.

## Seguridad

Las reglas de Firestore permiten leer el catálogo, impiden modificar los productos desde la aplicación y permiten crear órdenes únicamente a usuarios autenticados.