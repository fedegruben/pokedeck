import { useCart } from '../context/CartContext'
import ItemCount from './ItemCount'

function ItemDetail({ producto }) {
  const { addItem } = useCart()

  const agregarAlCarrito = (cantidad) => {
    addItem(producto, cantidad)
  }

  return (
    <article className="detalle-producto">
      <img
        className="imagen-detalle"
        src={producto.img}
        alt={producto.name}
      />

      <div className="informacion-detalle">
        <h2>{producto.name}</h2>
        <p>{producto.description}</p>
        <p>Categoría: {producto.category}</p>
        <p>Precio: ${producto.price}</p>
        <p>Stock disponible: {producto.stock}</p>

        <ItemCount stock={producto.stock} onAdd={agregarAlCarrito} />
      </div>
    </article>
  )
}

export default ItemDetail