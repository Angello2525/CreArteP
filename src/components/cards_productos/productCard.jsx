import React from 'react';
import './productCard.css';
import { Modal, Button } from 'react-bootstrap';

const ProductCard = ({ product, selectedColor, onColorChange }) => {
return (
    <div className="product-card">
      {/* Mostrar la imagen del producto */}
    <img src={product.image} alt={product.name} className="product-image" />
    
      {/* Nombre y descripción del producto */}
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p className="price">COP {product.price}</p>
    
      {/* Botón para comprar */}
    <button className="btn btn-danger">COMPRAR</button>
    
      {/* Opciones de color */}
    <div className="color-options">
        {product.colors.map((color, index) => (
        <span
            key={index}
            style={{ backgroundColor: color }}
            className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
            onClick={() => onColorChange(product.id, color)} // Cambia el color cuando se hace clic
        />
        ))}
    </div>
    
      {/* Mostrar el producto con el color seleccionado */}
    <div
        style={{
        width: '100px',
        height: '20px',
        backgroundColor: selectedColor,  // Color seleccionado
        marginTop: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        }}
    />
    </div>
);
};

export default ProductCard;

