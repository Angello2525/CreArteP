import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../assets/redux/actions'; // Importar la acción
import './productCard.css';
import { Modal, Button } from 'react-bootstrap';

const ProductCard = ({ product, selectedColor, onColorChange }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // Función que maneja la acción de añadir el producto al carrito
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedColor: selectedColor || product.colors[0], 
    };
    
    dispatch(addToCart(productToAdd)); // Agregar al carrito en Redux
    setShowModal(true); 
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">COP {product.price}</p>

      {/* Botón para agregar al carrito */}
      <button className="btn btn-danger" onClick={handleAddToCart}>
        COMPRAR
      </button>

      {/* Opciones de color */}
      <div className="color-options">
        {product.colors.map((color, index) => (
          <span
            key={index}
            style={{ backgroundColor: color }}
            className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
            onClick={() => onColorChange(product.id, color)} // Cambiar color
          />
        ))}
      </div>

      {/* Mostrar el color seleccionado */}
      <div
        style={{
          width: '100px',
          height: '20px',
          backgroundColor: selectedColor || product.colors[0], // Color seleccionado o el primero por defecto
          marginTop: '20px',
          border: '1px solid #ccc',
          borderRadius: '8px',
        }}
      />

      {/* Modal de confirmación */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Producto Añadido</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>¡Has añadido <strong>{product.name}</strong> al carrito!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cerrar
          </Button>
          <Button variant="danger" onClick={handleCloseModal}>
            Seguir Comprando
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductCard;
