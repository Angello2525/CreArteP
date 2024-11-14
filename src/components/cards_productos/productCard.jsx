import React from 'react';
import './productCard.css';

const ProductCard = ({ product }) => {
return (
    <div className="product-card">
    <img src={product.image} alt={product.name} className="product-image" />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p className="price">COP {product.price}</p>
    <button className="buy-button">COMPRAR</button>
    <div className="color-options">
        {product.colors.map((color, index) => (
        <span key={index} style={{ backgroundColor: color }} className="color-circle"></span>
        ))}
    </div>
    </div>
);
};

export default ProductCard;
