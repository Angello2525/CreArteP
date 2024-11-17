import { Link } from 'react-router-dom';
import './GuideCard.css';

const GuideCard = ({ title, description, image, link }) => {
  return (
    <div className="guide-card">
      <div className="guide-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="guide-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link} className="read-more">
          CONTINUAR LEYENDO →
        </Link>
      </div>
    </div>
  );
};

export default GuideCard;