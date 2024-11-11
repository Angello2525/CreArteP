import React, { useState } from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';

const ProductCard = ({ product, onAddToCart, isPainter = false }) => {
    // Estados para manejar los likes y el modal
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [showModal, setShowModal] = useState(false);

    // Funciones para manejar likes
    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    // Funciones para manejar el modal
    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <>
            {/* Tarjeta del producto o pintor */}
            <div className="product-card">
                {/* Mostrar descuento solo si no es un pintor */}
                {!isPainter && product.discount && (
                    <div className="discount-badge">{product.discount}%</div>
                )}

                {/* Mostrar imagen solo si no es un pintor */}
                {!isPainter && (
                    <img src={product.image} alt={product.name} className="product-image" />
                )}

                <h3>{product.name}</h3>

                {/* Mostrar precio solo si no es un pintor */}
                {!isPainter && <p>Precio</p>}

                {/* Contenedor para el corazón o botón "Ver más" */}
                <div className="action-buttons">
                    {isPainter ? (
                        <button onClick={handleShowModal} className="btn btn-danger">
                            Ver más
                        </button>
                    ) : (
                        <div className="like-container" onClick={handleLike}>
                            <FaHeart className={`heart-icon ${isLiked ? 'liked' : ''}`} />
                            <span className="like-count">{likeCount}</span>
                        </div>
                    )}

                    {/* Mostrar carrito solo si no es un pintor */}
                    {!isPainter && (
                        <FaShoppingCart onClick={onAddToCart} className="add-to-cart-icon" />
                    )}
                </div>
            </div>

            {/* Modal para mostrar más información sobre el pintor */}
            {isPainter && (
                <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{product.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Descripción:</strong> {product.description || 'Información no disponible.'}</p>
                        {product.famousWorks && (
                            <>
                                <p><strong>Obras más conocidas:</strong></p>
                                <ul>
                                    {product.famousWorks.map((work, index) => (
                                        <li key={index}>{work}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                        <p><strong>Periodo:</strong> {product.period || 'Desconocido'}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default ProductCard;
