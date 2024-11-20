import React, { useState } from 'react';
import { Provider, useSelector } from 'react-redux';
import { tutorialStore } from '../tutorialStore/tutorialStore';
import TutorialCard from '../components/tutorial-cards/TutorialCard';
import SavedVideosModal from '../components/tutorial-cards/SavedVideosModal';
import { Bookmark } from 'lucide-react';

const TutorialesContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const savedVideos = useSelector(state => state.favorites.savedVideos);

  const tutoriales = [
    {
      videoUrl: "https://www.youtube.com/watch?v=ALxEX_cPk9U",
      title: "TComo pintar una ROSA en PIXEL ART, Facil y rapido – Tutorial paso a paso",
      description: "Hola 👋 Bienvenidos a IAZ PIXEL- Te enseña. En este video aprenderás a pintar una Rosa en pixel art  "
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=jjS5InN1MbE",
      title: "EL MÉTODO para encontrar EL ESTILO DE DIBUJO perfecto para ti",
      description: "🎨 Cómo encontrar tu ESTILO DE DIBUJO RÁPIDO 🎨, 😱 Todos alguna vez han tenido este dilema. Encontrar tu estilo propio de dibujo. ¿Y si te dijera que es más fácil de lo que parece tener un estilo personal?"
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=RP43rxnQg7w",
      title: "Pintura rupestre: 2 técnicas para niños",
      description: "Aquí te dejamos 2 técnicas para elaborar pinturas rupestres para tu proyecto escolar, tan fácil como pintar con café soluble."
    },
    {
      videoUrl: "https://www.youtube.com/watch?v=jvXaIJaUh7E",
      title: "Como Dibujar un Ojo a lapiz paso a paso para Principiantes | Como dibujar desde cero",
      description: "En el tutorial de hoy, vamos a ver cómo dibujar, un ojo, a lápiz, paso a paso y narrado para principiantes (y no tan principiantes)"
    }
  ];

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '1.5rem',
      paddingTop: '10rem'
    }}>
      <div className="saved-videos-button">
        <button
          onClick={() => setIsModalOpen(true)}
          className="action-button"
        >
          <Bookmark size={20} />
           ({savedVideos.length})
        </button>
      </div>

      <h1 style={{ 
        fontSize: '1.875rem', 
        fontWeight: 'bold', 
        color: 'black',
        marginBottom: '1.5rem'
      }}>
        Tutoriales
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {tutoriales.map((tutorial, index) => (
          <TutorialCard
            key={index}
            videoUrl={tutorial.videoUrl}
            title={tutorial.title}
            description={tutorial.description}
          />
        ))}
      </div>

      <SavedVideosModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        savedVideos={savedVideos}
      />
    </div>
  );
};

const Tutoriales = () => (
  <Provider store={tutorialStore}>
    <TutorialesContent />
  </Provider>
);

export default Tutoriales;