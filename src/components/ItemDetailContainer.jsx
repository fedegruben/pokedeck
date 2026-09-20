import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../mock/asyncMock'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {
  const { id: productId } = useParams()
  const [producto, setProducto] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const cargarProducto = async () => {
      setProducto(null)
      setError('')

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