import { useState } from 'react';
import './ServiceCard.css';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-icon-container">
      <img src={icon} alt={title} className="service-icon" />
    </div>
  );
};

export default ServiceCard;