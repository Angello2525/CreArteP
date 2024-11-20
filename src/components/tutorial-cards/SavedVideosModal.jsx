import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSaveVideo } from '../../tutorialStore/favoritesSlice';
import { X } from 'lucide-react';
import './SavedVideosModal.css';

const SavedVideosModal = ({ isOpen, onClose, savedVideos }) => {
  const dispatch = useDispatch();

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Videos Guardados</h2>
          <button className="close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        {savedVideos.length === 0 ? (
          <p>No hay videos guardados</p>
        ) : (
          <div className="saved-videos-grid">
            {savedVideos.map((video, index) => (
              <div key={index} className="saved-video-card">
                <h3 className="card-title">{video.title}</h3>
                <p className="card-description">{video.description}</p>
                <div className="button-container">
                  <a 
                    href={video.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="watch-button"
                  >
                    Ver Video
                  </a>
                  <button
                    onClick={() => dispatch(toggleSaveVideo(video))}
                    className="action-button"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedVideosModal;