import { useEffect, useState } from 'react'
import { getProducts } from '../mock/asyncMock'
import ItemList from './ItemList'

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    const cargarProductos = async () => {
      const productos = await getProducts()
      setItems(productos)
    }

    cargarProductos()
  }, [])

  return (
    <main className="contenedor-productos">
      <h1>{greeting}</h1>

      {items.length === 0 ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList items={items} />
      )}
    </main>
  )
}

export default ItemListContainer