import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const { id: categoryId } = useParams()
  const [items, setItems] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const cargarProductos = async () => {
      setCargando(true)

      const productos = await getProducts()

      const productosFiltrados = categoryId
        ? productos.filter((producto) => producto.category === categoryId)
        : productos

      setItems(productosFiltrados)
      setCargando(false)
    }

    cargarProductos()
  }, [categoryId])

  return (
    <main className="contenedor-productos">
      <h1>{greeting}</h1>

      {cargando ? (
        <p>Cargando productos...</p>
      ) : items.length === 0 ? (
        <p>No se encontraron productos en esta categoría.</p>
      ) : (
        <ItemList items={items} />
      )}
    </main>
  )
}

export default ItemListContainer