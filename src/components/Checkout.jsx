import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { db } from '../firebase/config'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

function Checkout() {
  const { usuario, cargandoUsuario } = useAuth()
  const { cart, totalPrice, clear } = useCart()

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [telefono, setTelefono] = useState('')
  const [direccion, setDireccion] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [ordenId, setOrdenId] = useState('')
  const [error, setError] = useState('')
  const [procesando, setProcesando] = useState(false)

  const manejarEnvio = async (evento) => {
    evento.preventDefault()
    setError('')

    if (!usuario) {
      setError('Debés iniciar sesión para comprar.')
      return
    }

    if (cart.length === 0) {
      setError('El carrito está vacío.')
      return
    }

    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !telefono.trim() ||
      !direccion.trim() ||
      !ciudad.trim()
    ) {
      setError('Completá todos los datos de entrega.')
      return
    }

    const orden = {
      usuario: {
        id: usuario.uid,
        email: usuario.email,
      },
      comprador: {
        nombre,
        apellido,
        telefono,
        direccion,
        ciudad,
      },
      productos: cart.map((producto) => ({
        id: producto.id,
        nombre: producto.name,
        precio: producto.price,
        cantidad: producto.quantity,
      })),
      total: totalPrice,
      fecha: serverTimestamp(),
    }

    setProcesando(true)

    try {
      const referenciaOrden = await addDoc(
        collection(db, 'orders'),
        orden,
      )

      setOrdenId(referenciaOrden.id)
      clear()
    } catch (errorFirebase) {
      console.error(errorFirebase)
      setError('No se pudo registrar la compra.')
    } finally {
      setProcesando(false)
    }
  }

  if (cargandoUsuario) {
    return <p>Comprobando sesión...</p>
  }

  if (!usuario) {
    return <Navigate to="/login" replace />
  }

  if (ordenId) {
    return (
      <main className="compra-confirmada">
        <h1>Compra registrada</h1>
        <p>Tu número de orden es:</p>
        <strong>{ordenId}</strong>
        <Link to="/">Volver al catálogo</Link>
      </main>
    )
  }

  if (cart.length === 0) {
    return <Navigate to="/cart" replace />
  }

  return (
    <main className="pagina-checkout">
      <h1>Finalizar compra</h1>

      <section>
        <h2>Resumen de la compra</h2>

        {cart.map((producto) => (
          <p key={producto.id}>
            {producto.name} - Cantidad: {producto.quantity}
          </p>
        ))}

        <p>Total: ${totalPrice}</p>
      </section>

      <form onSubmit={manejarEnvio}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          required
        />

        <label htmlFor="apellido">Apellido</label>
        <input
          id="apellido"
          type="text"
          value={apellido}
          onChange={(evento) => setApellido(evento.target.value)}
          required
        />

        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          type="tel"
          value={telefono}
          onChange={(evento) => setTelefono(evento.target.value)}
          required
        />

        <label htmlFor="direccion">Dirección</label>
        <input
          id="direccion"
          type="text"
          value={direccion}
          onChange={(evento) => setDireccion(evento.target.value)}
          required
        />

        <label htmlFor="ciudad">Ciudad</label>
        <input
          id="ciudad"
          type="text"
          value={ciudad}
          onChange={(evento) => setCiudad(evento.target.value)}
          required
        />

        <button type="submit" disabled={procesando}>
          {procesando ? 'Registrando compra...' : 'Confirmar compra'}
        </button>
      </form>

      {error && <p>{error}</p>}
    </main>
  )
}

export default Checkout