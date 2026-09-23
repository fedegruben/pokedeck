import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function Cart() {
	const { cart, removeItem, clear, totalPrice } = useCart()

	if (cart.length === 0) {
		return (
			<main className="carrito-vacio">
				<h1>Tu carrito está vacío</h1>
				<p>Explorá el catálogo y elegí tus cartas favoritas.</p>
				<Link to="/">Volver al catálogo</Link>
			</main>
		)
	}

	return (
		<main className="pagina-carrito">
			<h1>Carrito de compras</h1>

			<section className="lista-carrito">
				{cart.map((producto) => (
					<article className="producto-carrito" key={producto.id}>
						<img src={producto.img} alt={producto.name} />

						<div>
							<h2>{producto.name}</h2>
							<p>Cantidad: {producto.quantity}</p>
							<p>Precio unitario: ${producto.price}</p>
							<p>Subtotal: ${producto.price * producto.quantity}</p>
						</div>

						<button type="button" onClick={() => removeItem(producto.id)}>
							Eliminar
						</button>
					</article>
				))}
			</section>

			<h2>Total: ${totalPrice}</h2>

			<div className="acciones-carrito">
				<button type="button" onClick={clear}>
					Vaciar carrito
				</button>

				<Link to="/checkout">Finalizar compra</Link>
			</div>
		</main>
	)
}

export default Cart