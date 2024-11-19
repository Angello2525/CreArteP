import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import logo from '../../assets/img/logo.png';
import './Header.css';
import { useSelector, useDispatch } from 'react-redux'; 
import { Modal, Button } from 'react-bootstrap';
import { ADD_TO_CART, addToCart } from '../../assets/redux/actions'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false); // Estado para mostrar el modal

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCartModal = () => setShowCartModal(!showCartModal);

  // Obtener productos del carrito desde el estado global
  const cartItems = useSelector((state) => state.items) || [];

  const dispatch = useDispatch(); // Usar useDispatch para despachar acciones

  // Función para agregar productos al carrito
  const handleAddToCart = (producto) => {
    dispatch(addToCart(producto));
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
          <User className="icon" />
          <ShoppingCart className="icon" onClick={toggleCartModal} /> {/* Icono para abrir el modal */}
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
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={cart.image} alt={item.name} style={{ width: '50px', marginRight: '10px' }} />
                <div>
                  <h5>{item.name}</h5>
                  <p>Color: <span style={{ backgroundColor: item.selectedColor, padding: '2px 8px', borderRadius: '5px' }}></span></p>
                  <p>Precio: COP {item.price}</p>
                </div>
              </div>
            ))
          ) : (
            <p>El carrito está vacío</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleCartModal}>
            Cerrar
          </Button>
          <Button variant="danger" as={Link} to="/checkout" onClick={toggleCartModal}>
            Ir a Pagar
          </Button>
        </Modal.Footer>
      </Modal>

      <nav className="nav-container">
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">INICIO</Link>
          <Link to="/marca">MARCA</Link>
          <Link to="/conocenos">CONÓCENOS</Link>
          <Link to="/guias-art">GUIAS ART</Link>
          <Link to="/contacto">CONTACTO</Link>
          <Link to="/productos">PRODUCTOS</Link>
          <Link to="/tutoriales">TUTORIALES</Link>
          <Link to="/galeria">GALERIA</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
