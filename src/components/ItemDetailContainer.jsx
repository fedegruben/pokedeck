import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/config'
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
        const referenciaProducto = doc(db, 'products', productId)
        const documentoProducto = await getDoc(referenciaProducto)

        if (!documentoProducto.exists()) {
          throw new Error('Producto no encontrado')
        }

        setProducto({
          id: documentoProducto.id,
          ...documentoProducto.data(),
        })
      } catch (errorConsulta) {
        console.error(errorConsulta)
        setError('No se pudo cargar el producto.')
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