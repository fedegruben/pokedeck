/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()

export const useCart = () => {
	return useContext(CartContext)
}

function CartProvider({ children }) {
	const [cart, setCart] = useState([])

	const addItem = (item, quantity) => {
		setCart((carritoActual) => {
			const productoExistente = carritoActual.find(
				(producto) => producto.id === item.id,
			)

			if (productoExistente) {
				return carritoActual.map((producto) =>
					producto.id === item.id
						? { ...producto, quantity: producto.quantity + quantity }
						: producto,
				)
			}

			return [...carritoActual, { ...item, quantity }]
		})
	}

	const removeItem = (itemId) => {
		setCart((carritoActual) =>
			carritoActual.filter((producto) => producto.id !== itemId),
		)
	}

	const clear = () => {
		setCart([])
	}

	const isInCart = (itemId) => {
		return cart.some((producto) => producto.id === itemId)
	}

	const totalItems = cart.reduce(
		(total, producto) => total + producto.quantity,
		0,
	)

	const totalPrice = cart.reduce(
		(total, producto) => total + producto.price * producto.quantity,
		0,
	)

	return (
		<CartContext.Provider
			value={{
				cart,
				addItem,
				removeItem,
				clear,
				isInCart,
				totalItems,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	)
}

export default CartProvider