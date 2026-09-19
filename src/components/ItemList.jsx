import Item from './Item'

function ItemList({ items }) {
  return (
    <section className="lista-productos">
      {items.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </section>
  )
}

export default ItemList