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
  
    const handleSaveVideo = () => {
      dispatch(toggleSaveVideo({ videoUrl, title, description }));
    };
  
    const handleLike = () => {
      setLikes(prev => prev + 1);
    };
  
    const handleDislike = () => {
      setDislikes(prev => prev + 1);
    };
  
    return (
      <div className="tutorial-card">
        <div className="video-container">
          <iframe
            src={videoUrl.replace('watch?v=', 'embed/')}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          
          <div className="button-container">
            <button 
              className="action-button" 
              onClick={handleLike}
              aria-label="Me gusta"
            >
              <ThumbsUp size={20} />
              <span className="counter">{likes}</span>
            </button>
            
            <button 
              className="action-button" 
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
              {isVideoSaved ? (
                <BookmarkCheck size={20} />
              ) : (
                <Bookmark size={20} />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TutorialCard;