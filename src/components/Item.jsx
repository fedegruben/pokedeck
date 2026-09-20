function Item({ producto }) {
  return (
    <article className="tarjeta-producto">
      <img
        className="imagen-producto"
        src={producto.img}
        alt={producto.name}
      />

      <h2>{producto.name}</h2>
      <p>Categoría: {producto.category}</p>
      <p>Precio: ${producto.price}</p>
    </article>
  )
}

export default Item