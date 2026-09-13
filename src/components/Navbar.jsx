import CartWidget from './CartWidget'

function Navbar() {
  return (
    <nav className="barra-navegacion">
      <h2>PokeDeck</h2>

      <ul>
        <li>Cartas individuales</li>
        <li>Sobres</li>
        <li>Mazos</li>
        <li>Accesorios</li>
      </ul>

      <CartWidget />
    </nav>
  )
}

export default Navbar