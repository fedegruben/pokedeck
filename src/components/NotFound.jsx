import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="pagina-no-encontrada">
      <h1>Error 404</h1>
      <p>La página que buscás no existe.</p>
      <Link to="/">Volver al inicio</Link>
    </main>
  )
}

export default NotFound