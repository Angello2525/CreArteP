import './App.css';
import React from 'react';
import ProductList from './productList';
import 'bootstrap/dist/css/bootstrap.min.css';


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
            {/* Lista de productos normales */}
            <ProductList items={sampleProducts} title="Nuevos y Destacados" />

            {/* Lista de pintores famosos */}
            <ProductList items={famousPainters} title="Pintores Famosos" isPainterList={true} />
        </div>
    );
};

export default App;


