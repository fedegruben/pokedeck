import { NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'

function Navbar() {
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

      <CartWidget />
    </nav>
  )
}

export default Navbar