import './Inicio.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import ProductList from '../components/CardsDES_PIN/productList';
import Banner from '../components/Banner/Banner';
import tutorialesImg from '../assets/img/tutoriales.jpeg';
import galeriaImg from '../assets/img/galeria.jpeg';
import carousel1 from '../assets/img/1Carousel.png';
import carousel2 from '../assets/img/2Carousel.png';
import carousel3 from '../assets/img/3Carousel.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const carouselImages = [
    { id: 1, src: carousel1, alt: 'Slide 1'},
    { id: 2, src: carousel2, alt: 'Slide 2'},
    { id: 3, src: carousel3, alt: 'Slide 3'},
  ];

const sampleProducts = [
    { id: 1, name: 'pinturas', discount: 25, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Pincel', discount: 6, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Brocha', discount: 7, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Lienzo', discount: 15, image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Acuarelas', discount: 12, image: 'https://via.placeholder.com/150' }
];

const famousPainters = [
    { id: 101,
        name: 'Leonardo da Vinci',
        description: 'Un pintor renacentista famoso por su obra "La Mona Lisa".',
        famousWorks: ['La Mona Lisa', 'La Última Cena'],
        period: 'Renacimiento'},

    { id: 102, name: 'Vincent van Gogh',
        description: 'Un pintor francés famoso por su obra "Les Demoiselles d\'Avignon".',
        famousWorks: ['Les Demoiselles d\'Avignon', 'Guernica'],
        period: 'Impressionismo'
    },

    { id: 103, name: 'Pablo Picasso',
        description: 'Un pintor francés famoso por su obra "Guernica".',
        famousWorks: ['Guernica', 'The Persistence of Memory'],
        period: 'Cubismo'
    },

    { id: 104, name: 'Frida Kahlo',
        description: 'Un pintora francesa famosa por su obra "Sunflowers".',
        famousWorks: ['Sunflowers', 'The Starry Night'],
        period: 'Cubismo'
    },

    { id: 105, name: 'Raphael',
        description: 'Un pintor francés famoso por su obra "Les Demoiselles d\'Avignon".',
        famousWorks: ['Les Demoiselles d\'Avignon', 'Guernica'],
        period: 'Cubismo'
    },

    { id: 106, name: 'Miro',
        description: 'Un pintor francés famoso por su obra "Les Demoiselles d\'Avignon".',
        famousWorks: ['Les Demoiselles d\'Avignon', 'Guernica'],
        period: 'Cubismo'
    },

    { id: 107, name: 'Paul Gauguin',
        description: 'Un pintor francés famoso por su obra "Les Demoiselles d\'Avignon".',
        famousWorks: ['Les Demoiselles d\'Avignon', 'Guernica'],
        period: 'Cubismo'
    },

    { id: 108, name: 'Claude Monet',
        description: 'Un pintor francés famoso por su obra "Les Demoiselles d\'Avignon".',
        famousWorks: ['Les Demoiselles d\'Avignon', 'Guernica'],
        period: 'Cubismo'
    },

    { id: 109, name: 'Pablo Picasso',
        description: 'Un pintor francés famoso por su obra "Les Demoiselles d\'Avignon".',
        famousWorks: ['Les Demoiselles d\'Avignon', 'Guernica'],
        period: 'Cubismo'
    },

    { id: 110, name: 'Vincent van Gogh',
        description: 'Un pintor francés famoso por su obra "Les Demoiselles d\'Avignon".',
        famousWorks: ['Les Demoiselles d\'Avignon', 'Guernica'],
        period: 'Cubismo'
    }
];

const App = () => {
    return (
        <div className="app-container">

            {/* Carrusel */}
            <Carousel className="mb-4">
            {carouselImages.map((slide) => (
                <Carousel.Item key={slide.id}>
                    <img className="d-block w-100" src={slide.src} alt={slide.alt} />
                </Carousel.Item>
                ))}
            </Carousel>

            {/* Lista de productos normales */}
            <ProductList items={sampleProducts} title="NUEVOS Y DESTACADOS" />
            
            {/* Banners en medio */}
            <section className="my-16">
                <Banner 
                    image={tutorialesImg}
                    title="Descubre Nuestros Tutoriales"
                    description="Aprende nuevas técnicas y mejora tus habilidades artísticas con nuestros tutoriales exclusivos"
                    linkTo="/Tutoriales"
                />
                
                <div className="mt-8">
                    <Banner 
                        image={galeriaImg}
                        title="Explora Nuestra Galería"
                        description="Inspírate con las obras de artistas reconocidos y emergentes en nuestra galería virtual"
                        linkTo="/Galeria"
                    />
                </div>
            </section>

            {/* Lista de pintores famosos */}
            <ProductList items={famousPainters} title="PINTORES FAMOSOS" isPainterList={true} />
        </div>
    );
};



export default App;


