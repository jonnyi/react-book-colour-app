import React from 'react';
import Star from './Star';

const StarRating = ({ starsSelected = 0, totalStars = 5, onRate = (f) => f }) => (
  <div>
    {[...Array(totalStars)].map((n, i) => (
      <Star
        key={i}
        isSelected={i < starsSelected}
        onClick={() => onRate(i + 1)}
      />
    ))}
    <br />
    <br />
    <p>
      {starsSelected} stars out of {totalStars}
    </p>
  </div>
);

export default StarRating;
