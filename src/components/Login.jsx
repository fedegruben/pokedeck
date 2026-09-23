import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
	const [correo, setCorreo] = useState('')
	const [contrasena, setContrasena] = useState('')
	const [error, setError] = useState('')
	const [procesando, setProcesando] = useState(false)

	const {
		usuario,
		cargandoUsuario,
		registrarse,
		iniciarSesion,
	} = useAuth()

	const navigate = useNavigate()

	const obtenerMensajeError = (codigo) => {
		if (codigo === 'auth/email-already-in-use') {
			return 'El correo ya está registrado.'
		}

		if (codigo === 'auth/invalid-credential') {
			return 'El correo o la contraseña son incorrectos.'
		}

		if (codigo === 'auth/weak-password') {
			return 'La contraseña debe tener al menos 6 caracteres.'
		}

		return 'No se pudo completar la autenticación.'
	}

	const manejarInicioSesion = async (evento) => {
		evento.preventDefault()
		setError('')

		if (!correo || !contrasena) {
			setError('Completá el correo y la contraseña.')
			return
		}

		setProcesando(true)

		try {
			await iniciarSesion(correo, contrasena)
			navigate('/')
		} catch (errorFirebase) {
			console.error(errorFirebase)
			setError(obtenerMensajeError(errorFirebase.code))
		} finally {
			setProcesando(false)
		}
	}

	const manejarRegistro = async () => {
		setError('')

		if (!correo || !contrasena) {
			setError('Completá el correo y la contraseña.')
			return
		}

		setProcesando(true)

		try {
			await registrarse(correo, contrasena)
			navigate('/')
		} catch (errorFirebase) {
			console.error(errorFirebase)
			setError(obtenerMensajeError(errorFirebase.code))
		} finally {
			setProcesando(false)
		}
	}

	if (cargandoUsuario) {
		return <p>Comprobando sesión...</p>
	}

	if (usuario) {
		return <Navigate to="/" replace />
	}

	return (
		<main className="autenticacion">
			<h1>Autenticación</h1>

			<form onSubmit={manejarInicioSesion}>
				<label htmlFor="correo">Correo electrónico</label>
				<input
					id="correo"
					type="email"
					value={correo}
					onChange={(evento) => setCorreo(evento.target.value)}
					required
				/>

				<label htmlFor="contrasena">Contraseña</label>
				<input
					id="contrasena"
					type="password"
					value={contrasena}
					onChange={(evento) => setContrasena(evento.target.value)}
					minLength="6"
					required
				/>

				<button type="submit" disabled={procesando}>
					Iniciar sesión
				</button>

				<button
					type="button"
					onClick={manejarRegistro}
					disabled={procesando}
				>
					Registrarme
				</button>
			</form>

			{error && <p>{error}</p>}
		</main>
	)
}

export default Login