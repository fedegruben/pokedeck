import { useState } from 'react'

function ItemCount({ stock, onAdd }) {
  const [cantidad, setCantidad] = useState(0)

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1)
    }
  }

  const disminuir = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1)
    }
  }

  const agregar = () => {
    if (cantidad > 0) {
      onAdd(cantidad)
    }
  }

  return (
    <div className="contador-producto">
      <button type="button" onClick={disminuir} disabled={cantidad === 0}>
        -
      </button>

      <span>{cantidad}</span>

      <button type="button" onClick={aumentar} disabled={cantidad === stock}>
        +
      </button>

      <button type="button" onClick={agregar} disabled={cantidad === 0}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default ItemCount