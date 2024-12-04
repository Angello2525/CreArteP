import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Bookmark, BookmarkCheck } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSaveVideo } from '../../tutorialStore/favoritesSlice';
import { getYoutubeVideoId } from './youtube';
import './TutorialCard.css';

const TutorialCard = ({ videoUrl, title, description }) => {
  const dispatch = useDispatch();
  const savedVideos = useSelector(state => state.favorites.savedVideos);
  const isVideoSaved = savedVideos.some(video => video.videoUrl === videoUrl);
  const [likes, setLikes] = React.useState(0);
  const [dislikes, setDislikes] = React.useState(0);
  const [likeActive, setLikeActive] = React.useState(false);
  const [dislikeActive, setDislikeActive] = React.useState(false);
  const [feedbackMessage, setFeedbackMessage] = React.useState("");
  const [messagePosition, setMessagePosition] = React.useState({ top: 0, left: 0 });

  const handleSaveVideo = () => {
      dispatch(toggleSaveVideo({ videoUrl, title, description }));
  };

  const handleFeedbackMessage = (message, event) => {
    const rect = event.target.getBoundingClientRect();
    setMessagePosition({
        top: rect.top - 10, // Un poco arriba del botón
        left: rect.left + rect.width / 2, // Centrado respecto al botón
    });
    setFeedbackMessage(message);
    setTimeout(() => setFeedbackMessage(""), 3500); // Aseguramos que desaparezca solo al terminar la animación
};


  const handleLike = (event) => {
      setLikes(prev => prev + 1);
      setLikeActive(true);
      handleFeedbackMessage("Like", event);
  };

  const handleDislike = (event) => {
      setDislikes(prev => prev + 1);
      setDislikeActive(true);
      handleFeedbackMessage("Dislike", event);
  };

  return (
      <div className="tutorial-card">
          {/* Contenido del video */}
          <div className="video-container">
              <iframe
                  src={videoUrl.replace('watch?v=', 'embed/')}
                  title={title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              />
          </div>

          {/* Contenido de la tarjeta */}
          <div className="card-content">
              <h3 className="card-title">{title}</h3>
              <p className="card-description">{description}</p>

              {/* Botones de interacción */}
              <div className="button-container">
                  <button
                      className={`action-button like-button ${likeActive ? 'animate-like' : ''}`}
                      onClick={handleLike}
                      aria-label="Me gusta"
                  >
                      <ThumbsUp size={20} />
                      <span className="counter">{likes}</span>
                  </button>

                  <button
                      className={`action-button dislike-button ${dislikeActive ? 'animate-dislike' : ''}`}
                      onClick={handleDislike}
                      aria-label="No me gusta"
                  >
                      <ThumbsDown size={20} />
                      <span className="counter">{dislikes}</span>
                  </button>

                  <button
                      className="action-button"
                      onClick={handleSaveVideo}
                      aria-label={isVideoSaved ? "Quitar de guardados" : "Guardar video"}
                  >
                      {isVideoSaved ? <BookmarkCheck size={20} /> : <Bookmark size={20} />}
                  </button>
              </div>

              {/* Mensaje flotante */}
              {feedbackMessage && (
                  <div
                      className="floating-message"
                      style={{
                          top: `${messagePosition.top}px`,
                          left: `${messagePosition.left}px`,
                      }}
                  >
                      {feedbackMessage}
                  </div>
              )}
          </div>
      </div>
  );
};



  export default TutorialCard;