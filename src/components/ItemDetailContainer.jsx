import { useEffect, useState } from 'react'
import { getProductById } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer({ productId }) {
  const [producto, setProducto] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const cargarProducto = async () => {
      try {
        const productoEncontrado = await getProductById(productId)
        setProducto(productoEncontrado)
      } catch (errorEncontrado) {
        setError(errorEncontrado.message)
      }
    }

    cargarProducto()
  }, [productId])

  if (error) {
    return <p>{error}</p>
  }

  if (!producto) {
    return <p>Cargando detalle del producto...</p>
  }

  return <ItemDetail producto={producto} />
}

export default ItemDetailContainer