import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'; // Importa el archivo CSS

const Banner = ({ image, title, description, linkTo }) => {
  return (
    <div className="banner-container">
      <img 
        src={image} 
        alt={title} 
        className="banner-image"
      />
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link to={linkTo} className="banner-button">
          Ver más
        </Link>
      </div>
    </div>
  );
};

export default Banner;
