import React from 'react';
import { assets } from '../assets/assets';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxRating = 5, 
  size = "w-4.5 h-4.5" 
}) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      // Filled star
      stars.push(
        <img
          key={i}
          alt="star-icon"
          className={size}
          src={assets.starIconFilled}
        />
      );
    } else {
      // Outlined star
      stars.push(
        <img
          key={i}
          alt="star-icon"
          className={size}
          src={assets.starIconOutlined}
        />
      );
    }
  }

  return (
    <div className="flex items-center gap-1">
      {stars}
    </div>
  );
};

export default StarRating;
