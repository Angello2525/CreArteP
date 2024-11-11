import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import logo from '../../assets/img/logo.png';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <ShoppingCart className="icon" />
          <div className="hamburger" onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>
      <nav className="nav-container">
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/">INICIO</Link>
          <Link to="/marca">MARCA</Link>
          <Link to="/conocenos">CONÓCENOS</Link>
          <Link to="/guias-art">GUIAS ART</Link>
          <Link to="/contacto">CONTACTO</Link>
          <Link to="/productos">PRODUCTOS</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;