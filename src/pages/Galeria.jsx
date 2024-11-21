import { useEffect } from 'react';
import Slider from 'react-slick'; 
import GaleriaCard from '../components/Galeria/galeriaCard'; 
import './galeria.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laUltimaCena from '../assets/img/galeria/laUltimaCena.jpg'; 
import nocheEstrellada from '../assets/img/galeria/nocheEstrellada.jpg'; 
import nacimientoDeVenus from '../assets/img/galeria/nacimientoDeVenus.jpg';
import elAlmuerzoDeLosRemeros from '../assets/img/galeria/elAlmuerzoDeLosRemeros.jpg';
import elJardinDeLasDelicias from '../assets/img/galeria/elJardinDeLasDelicias.jpg';
import laEscueladeAtenas from '../assets/img/galeria/laEscueladeAtenas.jpg'; 
import abstracta1 from '../assets/img/galeria/abstracta1.jpg';
import abstracta2 from '../assets/img/galeria/abstracta2.jpg';
import abstracta3 from '../assets/img/galeria/abstracta3.jpg';
import abstracta4 from '../assets/img/galeria/abstracta4.jpg';
import abstracta5 from '../assets/img/galeria/abstracta5.jpg';

const Galeria = () => {
  const galeriaImages = [
    { id: 1, 
      title: 'La última cena',  
      description: 'Es una enorme pintura de 4.60 metros de altura y 8.80 metros de ancho y fue realizada con témpera y óleo sobre una preparación de yeso en lugar de la técnica comúnmente utilizada a la época del fresco.',
      image: laUltimaCena, 
      painter: 'Leonardo da Vinci',
    },
    { id: 2, 
      title: 'La noche Estrellada',
      description: 'Representa un paisaje nocturno con un cielo estrellado, con un pueblo que parece estar a los pies de los Alpes y un ciprés solitario en primer plano.',
      image: nocheEstrellada,
      painter: 'Vincent van Gogh', 
    },
    { id: 3,
      title: 'Nacimiento de Venus' ,
      description: 'Es una pintura de Sandro Botticelli (1445-1510), representando una de las obras cumbres del maestro italiano.',
      image: nacimientoDeVenus, 
      painter: 'Sandro Botticelli', 
    },
    { id: 4,
      title: 'El almuerzo de los Remeros',
      description: 'La obra muestra cómo los remeros, que eran los primeros hombres que creyeron en Dios, procuraban la salvación y la vida eterna.',
      image: elAlmuerzoDeLosRemeros,
      painter: 'Giorgio de Chirico', 
    },
    { id: 5, 
      title: 'El Jardín de las Delicias',
      description: 'El Jardín de las Delicias es una pintura de 1507, realizada por Sandro Botticelli.',
      image: elJardinDeLasDelicias, 
      painter: 'Hieronymus Bosch', 
    },
    { id: 6, 
      title: 'La Escuela de Athenas',
      description: 'La obra muestra cómo la gente de Atenas comenzó a comer la comida de las delicias.',
      image: laEscueladeAtenas, 
      painter: 'Rafael Sanzio',
    },
  ];

  const additionalImages = [
    { id: 1, image: abstracta1},
    { id: 2, image: abstracta2},
    { id: 3, image: abstracta3},
    { id: 4, image: abstracta4},
    { id: 5, image: abstracta5}
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="galeria-art-container">
      <h1 className="galeria-title">Galería de Arte</h1>
      <div className="galeria-grid">
        {galeriaImages.map((guide) => (
          <GaleriaCard
            key={guide.id}
            title={guide.title}
            description={guide.description}
            image={guide.image}
            painter={guide.painter} 
          />
        ))}
      </div>

      {/* Carrusel */}
      <h2 className="additional-gallery-title">Otras Obras</h2>
      <Slider {...settings}>
        {additionalImages.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.image} alt={item.description} className="gallery-image" />
            <p>{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Galeria;
