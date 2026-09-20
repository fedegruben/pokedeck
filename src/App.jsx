import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import NotFound from './components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ItemListContainer greeting="¡Bienvenidos a PokeDeck!" />
            }
          />
          <Route
            path="/category/:id"
            element={
              <ItemListContainer greeting="Productos por colección" />
            }
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App