import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './GuideStyles.css';

import heroImage from '../../assets/img/guias/pinceles/primero.png';

const GuiaArticulo2 = () => {
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
            alt="Guía de Pinceles para Acuarela" 
            className="guide-hero-image"
          />
          <h1>Guía de pinceles para acuarela</h1>
          <div className="guide-meta">
            <time dateTime="2024-01-16">16 de Enero, 2024</time>
            <span className="guide-category">Arte y cultura</span>
          </div>
        </header>

        <div className="guide-content">
          <p>
            Los pinceles son una de las herramientas más importantes para cualquier acuarelista. La elección correcta puede marcar una gran diferencia en tu trabajo artístico. En esta guía, exploraremos los diferentes tipos de pinceles y cómo elegir los más adecuados para tu estilo.
          </p>

          <h2>Tipos de Pinceles para Acuarela</h2>
          
          <h3>1. Pinceles Redondos</h3>
          <p>
            Los pinceles redondos son los más versátiles y populares para la acuarela. Su punta fina permite realizar tanto trazos delicados como cubrir áreas más grandes cuando se aplica más presión. Son ideales para:
          </p>
          <ul>
            <li>Detalles finos</li>
            <li>Líneas de grosor variable</li>
            <li>Aguadas amplias</li>
          </ul>

          <h3>2. Pinceles Planos</h3>
          <p>
            Los pinceles planos tienen un borde recto y son excelentes para:
          </p>
          <ul>
            <li>Crear bordes definidos</li>
            <li>Rellenar grandes áreas</li>
            <li>Realizar degradados uniformes</li>
          </ul>

          <h3>3. Pinceles de Lavado</h3>
          <p>
            Estos pinceles más grandes son perfectos para:
          </p>
          <ul>
            <li>Crear fondos uniformes</li>
            <li>Humedecer grandes áreas de papel</li>
            <li>Realizar aguadas extensas</li>
          </ul>

          <h2>Materiales y Calidades</h2>
          <p>
            Los pinceles de acuarela suelen estar fabricados con pelos naturales o sintéticos:
          </p>
          <ul>
            <li><strong>Pelo de Marta Kolinsky:</strong> La mejor calidad, excelente retención de agua y punta precisa</li>
            <li><strong>Pelo de Ardilla:</strong> Ideal para aguadas y lavados suaves</li>
            <li><strong>Sintéticos:</strong> Buena alternativa económica, durables y fáciles de mantener</li>
          </ul>

          <h2>Cuidado y Mantenimiento</h2>
          <p>
            Para mantener tus pinceles en óptimas condiciones:
          </p>
          <ul>
            <li>Limpia siempre después de usar</li>
            <li>Evita dejarlos en vertical con las cerdas hacia abajo</li>
            <li>No los dejes en agua por períodos prolongados</li>
            <li>Forma la punta después de lavar</li>
          </ul>

          <p>
            La elección de tus pinceles dependerá de tu estilo personal y presupuesto. Recomendamos comenzar con un set básico que incluya:
          </p>
          <ul>
            <li>Un pincel redondo mediano (#8 o #10)</li>
            <li>Un pincel redondo pequeño (#2 o #4)</li>
            <li>Un pincel plano mediano</li>
            <li>Un pincel de lavado grande</li>
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

export default GuiaArticulo2;