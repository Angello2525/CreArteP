import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './GuideStyles.css';

// Importamos las imágenes con la ruta relativa correcta
import heroImage from '../../assets/img/guias/michael/primero.jpg';
import pigmentosImage from '../../assets/img/guias/michael/segunda.png';
import caracteristicasImage from '../../assets/img/guias/michael/tercero.png';
import experienciaImage from '../../assets/img/guias/michael/cuarto.png';


const GuiaArticulo = () => {
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
            alt="Michael Harding Acuarelas - Principal" 
            className="guide-hero-image"
          />
          <h1>Michael Harding: acuarelas de alta calidad para el artista exigente</h1>
          <div className="guide-meta">
            <time dateTime="2024-01-16">16 de Enero, 2024</time>
            <span className="guide-category">Arte y cultura</span>
          </div>
        </header>

        <div className="guide-content">
          <p>
          En el mundo de la acuarela, con tantas marcas y calidades en el mercado, es importante elegir bien el material que se ajuste a nuestras expectativas plásticas y, claro, a nuestro bolsillo. Michael Harding, una marca conocida principalmente por sus óleos de calidad superior, ha logrado hacerse un hueco también en el exigente terreno de las acuarelas. 
          </p>
          <p>
        En Artemiranda nos apasiona probar, conocer y ofrecerte productos que te den la mejor experiencia posible. Si sigues leyendo, hoy vamos a hablarte de nuestra experiencia con las acuarelas Michael Harding, para que tengas toda la información antes de sumarlas a tu paleta. ¿Te apuntas?
        </p>
        <p>
        Lo primero que te llamará la atención de las acuarelas Michael Harding es su intensa pigmentación. No estamos hablando de cualquier tipo de pigmento, sino de los más puros y de alta calidad. De los 130 colores disponibles, 92 son monopigmentados, lo que significa que se obtiene un color más auténtico y vibrante, además de más fácil de controlar a la hora de mezclar. Los pigmentos provienen de fuentes naturales y tradicionales, lo que garantiza una experiencia artística más genuina.
          </p>

          <img 
            src={pigmentosImage}
            alt="Pigmentos Michael Harding"
            className="guide-content-image"
          />

          <p>
          Pero ya sabes lo que decimos por aquí: «el movimiento se demuestra andando», así que no nos quedamos solo con la teoría. Decidimos probar estas acuarelas en una sesión práctica y compartir contigo los resultados.
          </p>
          <p>
            Para probar la versatilidad y calidad de estas acuarelas, realizamos un bodegón sencillo con dos frutas. Así, pudimos experimentar con diferentes técnicas: húmedo sobre húmedo, húmedo sobre seco y, en algunos casos, llevando el material al límite con grandes acumulaciones de pigmento.
          </p>

          <img 
            src={caracteristicasImage}
            alt="Características de las acuarelas"
            className="guide-content-image"
          />

          <p>
          Elegimos una paleta básica para la prueba: amarillo limón, amarillo cadmio claro, magenta quinacridona, rojo cadmio claro, azul ftalo y azul ultramar. Desde el primer momento, lo que más nos impresionó fue la alta pigmentación de los colores. Tanto el magenta como el azul ftalo destacaron por su alto poder de teñido, un rasgo habitual en estos tonos, pero en las acuarelas de Michael Harding, este efecto se siente aún más pronunciado, llenando el papel de vida con muy poco esfuerzo.
          </p>
          <p>
          Los colores semiopacos, como los cadmios, mantuvieron una ligera capacidad de cobertura, lo que nos permitió hacer transiciones y degradados controlados, sin perder la delicadeza que caracteriza a la acuarela.
          </p>
          <p>
          Uno de los retos más grandes en acuarela es la superposición de capas. Ya sabes, cuando aplicas una nueva capa de color sobre otra que ya está asentada, el riesgo es que se reactive el pigmento y termine todo emborrado o poco definido. Pero en nuestras pruebas, las acuarelas de Michael Harding se comportaron de maravilla. Añadimos varias capas de color sin que el pigmento perdiera definición ni se reactivara más de lo deseado. Esto es ideal si te gusta trabajar construyendo la profundidad de tu obra poco a poco, jugando con las transparencias.
          </p>

          <img 
            src={experienciaImage}
            alt="Experiencia de uso"
            className="guide-content-image"
          />

          <p>
          En definitiva si lo que buscas en tus acuarelas es color vibrante, intensidad, durabilidad y la versatilidad necesaria para trabajar tanto en técnicas suaves como en capas múltiples, las acuarelas de Michael Harding son una excelente opción. La pureza de sus pigmentos, su resistencia a la luz y su capacidad para soportar capas sin reactivarse las convierten en una herramienta perfecta para aquellos trabajos donde los detalles y la precisión lo son todo.
          </p>
          <p>Tanto si estás dando tus primeros pasos en el mundo de la acuarela como si ya eres un acuarelista experimentado, estas acuarelas aportarán ese toque de calidad que puede elevar cualquier obra. En Artemiranda te recomendamos que las pruebes si aún no lo has hecho. ¡No te arrepentirás!</p>

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

export default GuiaArticulo;