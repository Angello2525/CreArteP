// App.jsx
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Inicio from './pages/Inicio'
import Marca from './pages/Marca'
import Conocenos from './pages/Conocenos'
import GuiasArt from './pages/GuiasArt'
import Contacto from './pages/Contacto'
import Productos from './pages/Productos'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/marca" element={<Marca />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/guiasart" element={<GuiasArt />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App