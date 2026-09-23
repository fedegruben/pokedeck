/* eslint-disable react-refresh/only-export-components */
import {
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const AuthContext = createContext()

export const useAuth = () => {
	return useContext(AuthContext)
}

function AuthProvider({ children }) {
	const [usuario, setUsuario] = useState(null)
	const [cargandoUsuario, setCargandoUsuario] = useState(true)

	useEffect(() => {
		const cancelarObservador = onAuthStateChanged(
			auth,
			(usuarioFirebase) => {
				setUsuario(usuarioFirebase)
				setCargandoUsuario(false)
			},
		)

		return cancelarObservador
	}, [])

	const registrarse = (correo, contrasena) => {
		return createUserWithEmailAndPassword(auth, correo, contrasena)
	}

	const iniciarSesion = (correo, contrasena) => {
		return signInWithEmailAndPassword(auth, correo, contrasena)
	}

	const cerrarSesion = () => {
		return signOut(auth)
	}

	return (
		<AuthContext.Provider
			value={{
				usuario,
				cargandoUsuario,
				registrarse,
				iniciarSesion,
				cerrarSesion,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider