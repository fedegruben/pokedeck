import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const { id: categoryId } = useParams()
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const cargarProductos = async () => {
      setCargando(true)
      setError('')

      try {
        const referenciaProductos = collection(db, 'products')

        const consulta = categoryId
          ? query(
              referenciaProductos,
              where('category', '==', categoryId),
            )
          : referenciaProductos

        const respuesta = await getDocs(consulta)

        const productos = respuesta.docs.map((documento) => ({
          id: documento.id,
          ...documento.data(),
        }))

        setItems(productos)
      } catch (errorConsulta) {
        console.error(errorConsulta)
        setItems([])
        setError('No se pudieron cargar los productos.')
      } finally {
        setCargando(false)
      }
    }

    cargarProductos()
  }, [categoryId])

  return (
    <main className="contenedor-productos">
      <h1>{greeting}</h1>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : error ? (
        <p>{error}</p>
      ) : items.length === 0 ? (
        <p>No se encontraron productos en esta categoría.</p>
      ) : (
        <ItemList items={items} />
      )}
    </main>
  )
}

export default ItemListContainer