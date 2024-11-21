import React, { useState } from 'react';  
import { FaStar, FaRegStar } from 'react-icons/fa'; 
import './galeriaCard.css';  

const GaleriaCard = ({ title, description, image }) => {
    // Estado destacado
    const [isFeatured, setIsFeatured] = useState(false);

    // destacadar
    const toggleFeatured = () => {
        setIsFeatured(prevState => !prevState);
    };

    console.log("Props recibidas:", { title, description, image });

    return (
        <div className="galeria-card">
            <img src={image} alt={title} className="galeria-card-image" />
            <h2 className="galeria-card-title">{title}</h2>
            <p className="galeria-card-description">{description}</p>

            {/* Estrella  */}
            <div className="galeria-card-header">
                <button onClick={toggleFeatured} className="feature-button">
                    {isFeatured ? (
                        <FaStar className="featured-icon" /> 
                    ) : (
                        <FaRegStar className="unfeatured-icon" />  
                    )}
                </button>
            </div>
        </div>
    );
};

export default GaleriaCard;
