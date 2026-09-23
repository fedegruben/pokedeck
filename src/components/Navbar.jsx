import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import CartWidget from './CartWidget'

function Navbar() {
  const { usuario, cerrarSesion } = useAuth()

  return (
    <nav className="barra-navegacion">
      <NavLink className="marca" to="/" end>
        <h2>PokeDeck</h2>
      </NavLink>

      <ul>
        <li>
          <NavLink className="enlace-navegacion" to="/category/base-set">
            Base Set
          </NavLink>
        </li>
        <li>
          <NavLink className="enlace-navegacion" to="/category/jungle">
            Jungle
          </NavLink>
        </li>
        <li>
          <NavLink className="enlace-navegacion" to="/category/fossil">
            Fossil
          </NavLink>
        </li>
        <li>
          <NavLink className="enlace-navegacion" to="/category/team-rocket">
            Team Rocket
          </NavLink>
        </li>
      </ul>

      <div className="usuario-navegacion">
        {usuario ? (
          <>
            <span>{usuario.email}</span>
            <button type="button" onClick={cerrarSesion}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <NavLink className="enlace-navegacion" to="/login">
            Ingresar
          </NavLink>
        )}

        <CartWidget />
      </div>
    </nav>
  )
}

export default Navbar