import React from 'react';
import './Card.css';
import Button from '../button/Button';

const Card = ({ title = "Card Title", description = "N/A", image = "N/A", buttonText = "Learn More" }) => {
  return (
    <div className="custom-card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Button label={buttonText} type='secondary' />
      </div>
    </div>
  );
};

export default Card;
