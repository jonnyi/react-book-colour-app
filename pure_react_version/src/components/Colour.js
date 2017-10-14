import React from 'react';
import StarRating from './StarRating';

const Colour = ({ title, colour, rating = 0, onRate, onRemove }) => (
  <div className="card" style={{ width: '20rem' }}>
    <div className="swatch" style={{ backgroundColor: colour }} />
    <div className="card-block">
      <h4 className="card-title">{title}</h4>
      <StarRating starsSelected={rating} onRate={onRate} />
      <a href="#" onClick={onRemove} className="btn btn-primary">
        Remove
      </a>
    </div>
  </div>
);
export default Colour;
