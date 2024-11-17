import { useEffect } from 'react';
import GuideCard from '../components/GuideCard/GuideCard';
import './GuiasArt.css';
import michaelImage from '../assets/img/guias/michael/primero.jpg';
import pincelesImage from '../assets/img/guias/pinceles/primero.png';
import acuarelasImage from '../assets/img/guias/acuarelas/primero.png';

const GuiasArt = () => {
  const guides = [
    {
      id: 1,
      title: "Michael Harding: acuarelas de alta calidad para el artista exigente",
      description: "En el mundo de la acuarela, con tantas marcas y calidades en el mercado, es importante elegir bien el material que se ajuste a nuestras expectativas plásticas y, claro, a nuestro bolsillo. Michael Harding, una marca conocida principalmente por sus óleos de calidad superior, ha logrado hacerse un hueco también en el exigente terreno de las acuarelas.",
      image: michaelImage,
      link: "/guias/michael-harding-acuarelas"
    },
    {
      id: 2,
      title: "Guía de pinceles para acuarela",
      description: "Descubre los diferentes tipos de pinceles y sus usos específicos en la técnica de la acuarela. Una guía completa para elegir las herramientas correctas según tu estilo.",
      image: pincelesImage,
      link: "/guias/pinceles-acuarela"
    },
    {
      id: 3,
      title: "Técnicas básicas de acuarela",
      description: "Aprende las técnicas fundamentales para dominar el arte de la acuarela, desde aguadas básicas hasta efectos más complejos.",
      image: acuarelasImage,
      link: "/guias/tecnicas-basicas-acuarela"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="guias-art-container">
      <h1 className="guias-title">Guías de Arte</h1>
      <div className="guides-grid">
        {guides.map((guide) => (
          <GuideCard
            key={guide.id}
            title={guide.title}
            description={guide.description}
            image={guide.image}
            link={guide.link}
          />
        ))}
      </div>
    </div>
  );
};

export default GuiasArt;