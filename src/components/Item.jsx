function Item({ producto }) {
  return (
    <article className="tarjeta-producto">
      <img
        className="imagen-producto"
        src={producto.img}
        alt={producto.name}
      />

      <h2>{producto.name}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
      <p>Stock: {producto.stock}</p>
    </article>
  )
}

export default Item