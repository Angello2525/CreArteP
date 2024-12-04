import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, Trash2 } from 'lucide-react';
import logo from '../../assets/img/logo.png';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { addToCart, removeFromCart, updateQuantity } from '../../redux/actions';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Estado de autenticación

  useEffect(() => {
    const user = localStorage.getItem('user');
    const authenticated = localStorage.getItem('isAuthenticated');
    
    if (user && authenticated) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCartModal = () => setShowCartModal(!showCartModal);
  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.cartItems) || [];

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('user'); // Limpiamos el usuario
    localStorage.removeItem('isAuthenticated'); // Limpiamos la autenticación
    setIsAuthenticated(false); // Cambiar el estado a no autenticado
    setShowUserMenu(false); // Ocultar el menú
    navigate('/'); // Redirigir al inicio
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Crearte Logo" />
          </Link>
        </div>
        <div className="icons-container">
          {/* Menú desplegable para el usuario */}
          <div className="user-menu">
            <User className="icon" onClick={toggleUserMenu} title="Opciones de usuario" />
            {showUserMenu && (
              <div className="user-menu-dropdown">
                {isAuthenticated ? (
                  <>
                    {/* Si está autenticado, mostrar opción "Cerrar sesión" */}
                    <button onClick={handleLogout} className="logout-button">
                      Cerrar sesión
                    </button>
                  </>
                ) : (
                  <>
                    {/* Si no está autenticado, mostrar opción "Iniciar sesión" */}
                    <Link to="/login">
                      Iniciar sesión
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Icono del carrito */}
          <ShoppingCart className="icon" onClick={toggleCartModal} title="Carrito de compras" />

          {/* Icono de menú hamburguesa */}
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>

      {/* Modal para mostrar los productos del carrito */}
      <Modal show={showCartModal} onHide={toggleCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de Compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '50px', marginRight: '10px' }}
                  />
                  <div>
                    <h5>{item.name}</h5>
                    <p>Precio: COP {item.price}</p>
                  </div>
                  <div className="quantity-container">
                    <button onClick={() => dispatch(updateQuantity(item.id, item.quantity - 1))}>
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(updateQuantity(item.id, parseInt(e.target.value, 10)))
                      }
                      min="1"
                    />
                    <button onClick={() => dispatch(updateQuantity(item.id, item.quantity + 1))}>
                      +
                    </button>
                  </div>
                  <Trash2
                    className="delete-icon"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  />
                </div>
              ))}
              <div className="cart-total">
                <h5>Total: COP {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h5>
              </div>
            </div>
          ) : (
            <p>El carrito está vacío</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleCartModal}>
            Cerrar
          </Button>
          <Button variant="primary">Ir a Pagar</Button>
        </Modal.Footer>
      </Modal>

      {/* Menú de navegación */}
      <nav className="nav-container">
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">INICIO</Link>
          <Link to="/marca">MARCA</Link>
          <Link to="/conocenos">CONÓCENOS</Link>
          <Link to="/guias-art">GUÍAS ART</Link>
          <Link to="/contacto">CONTACTO</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/tutoriales">TUTORIALES</Link>
          <Link to="/galeria">GALERÍA</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
