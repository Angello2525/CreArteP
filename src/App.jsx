import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from './components/Header/Header';
import Inicio from './pages/Inicio';
import Marca from './pages/Marca';
import Conocenos from './pages/Conocenos';
import GuiasArt from './pages/GuiasArt';
import GuiaArticulo from './pages/guias/michael-harding-acuarelas';
import GuiaArticulo2 from './pages/guias/pinceles-acuarela';
import GuiaArticulo3 from './pages/guias/tecnicas-basicas-acuarela';
import Contacto from './pages/Contacto';
import Productos from './pages/Productos';
import Tutoriales from './pages/Tutoriales';
import Galeria from './pages/Galeria'; 
import Footer from './components/Footer/Footer';
import Login from './components/Login';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

// Componente de Ruta Privada
const PrivateRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  const location = useLocation(); // Detecta la ruta actual

  // Condición para ocultar Header y Footer en la página de Login
  const showHeaderFooter = location.pathname !== "/login";

  return (
    <>
      {/* Mostrar Header solo si no estás en /login */}
      {showHeaderFooter && <Header />}

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/usuarios" element={
              <PrivateRoute>
                <UserList />
              </PrivateRoute>
            } 
          />
        <Route 
          path="/usuarios/nuevo" 
          element={
            <PrivateRoute>
              <UserForm />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/usuarios/editar/:id" 
          element={
            <PrivateRoute>
              <UserForm />
            </PrivateRoute>
          } 
        />
        <Route path="/" element={<UserList />} />
        <Route path="/marca" element={<Marca />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/guias-art" element={<GuiasArt />} />
        <Route path="/guias/michael-harding-acuarelas" element={<GuiaArticulo />} />
        <Route path="/guias/pinceles-acuarela" element={<GuiaArticulo2 />} />
        <Route path="/guias/tecnicas-basicas-acuarela" element={<GuiaArticulo3 />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/tutoriales" element={<Tutoriales />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>

      {/* Renderiza Footer solo si no estás en /login */}
      {showHeaderFooter && <Footer />}
    </>
  );
}

export default App;