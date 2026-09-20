import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function CartWidget() {
  const { totalItems } = useCart()

  return (
    <Link
      className="carrito"
      to="/cart"
      aria-label={`Carrito con ${totalItems} productos`}
    >
      <span>🛒</span>
      <span className="cantidad-carrito">{totalItems}</span>
    </Link>
  )
}

export default CartWidget