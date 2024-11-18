import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './GuideStyles.css';

import heroImage from '../../assets/img/guias/acuarelas/primero.png';

const GuiaArticulo3 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pagina-container">
      <article className="guide-container">
        <header className="guide-header">
          <img 
            src={heroImage}
            alt="Técnicas básicas de acuarela" 
            className="guide-hero-image"
          />
          <h1>Técnicas básicas de acuarela</h1>
          <div className="guide-meta">
            <time dateTime="2024-01-16">16 de Enero, 2024</time>
            <span className="guide-category">Arte y cultura</span>
          </div>
        </header>

        <div className="guide-content">
          <p>
            La acuarela es una técnica fascinante que combina agua y pigmentos para crear efectos únicos. En esta guía, exploraremos las técnicas fundamentales que todo principiante debe conocer para comenzar su viaje en el mundo de la acuarela.
          </p>

          <h2>1. Técnica Húmedo sobre Húmedo</h2>
          <p>
            Esta técnica consiste en aplicar color sobre papel previamente humedecido. Es perfecta para crear:
          </p>
          <ul>
            <li>Efectos atmosféricos</li>
            <li>Degradados suaves</li>
            <li>Fusión de colores</li>
          </ul>
          <p>
            Para mejores resultados, asegúrate de que el papel esté uniformemente húmedo pero no encharcado.
          </p>

          <h2>2. Técnica Húmedo sobre Seco</h2>
          <p>
            Aplicar color sobre papel seco te permite:
          </p>
          <ul>
            <li>Crear bordes definidos</li>
            <li>Trabajar detalles precisos</li>
            <li>Controlar mejor la aplicación del pigmento</li>
          </ul>

          <h2>3. Lavados</h2>
          <p>
            Los lavados son fundamentales en acuarela y pueden ser:
          </p>
          <ul>
            <li><strong>Lavado Plano:</strong> Color uniforme en toda el área</li>
            <li><strong>Lavado Degradado:</strong> Transición suave entre tonos</li>
            <li><strong>Lavado Variegado:</strong> Mezcla de varios colores en húmedo</li>
          </ul>

          <h2>4. Técnicas de Textura</h2>
          <p>
            Puedes crear texturas interesantes mediante:
          </p>
          <ul>
            <li>Salpicado de color</li>
            <li>Uso de sal</li>
            <li>Raspado</li>
            <li>Técnica de película plástica</li>
          </ul>

          <h2>5. Superposición de Capas</h2>
          <p>
            La superposición de capas te permite:
          </p>
          <ul>
            <li>Construir profundidad</li>
            <li>Crear colores complejos</li>
            <li>Añadir detalles progresivamente</li>
          </ul>
          
          <h2>Consejos Importantes</h2>
          <ul>
            <li>Trabaja de claro a oscuro</li>
            <li>Espera a que cada capa seque antes de aplicar la siguiente</li>
            <li>Planifica tus blancos (reserva el blanco del papel)</li>
            <li>Prueba los colores en un papel aparte antes de aplicarlos</li>
          </ul>

          <div className="guide-navigation">
            <Link to="../guias-art" className="guide-nav-link">
              ← Volver a Guías
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default GuiaArticulo3;