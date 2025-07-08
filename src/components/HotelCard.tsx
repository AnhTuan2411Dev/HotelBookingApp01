import React from 'react';
import { assets } from '../assets/assets';

interface HotelCardProps {
  id: string;
  image: string;
  name: string;
  rating: number;
  location: string;
  price: number;
  bestSeller?: boolean;
}

const HotelCard: React.FC<HotelCardProps> = ({
  id,
  image,
  name,
  rating,
  location,
  price,
  bestSeller = false
}) => {
  return (
    <a 
      className="relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
      href={`/rooms/${id}`}
      data-discover="true"
    >
      <img 
        alt="hotel-img" 
        draggable="false"
        src={image}
        className="w-full h-48 object-cover"
      />
      
      {bestSeller && (
        <p className="px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full">
          Best Seller
        </p>
      )}
      
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-playfair text-xl font-medium text-gray-800">{name}</p>
          <div className="flex items-center gap-1">
            <img alt="star-icon" src={assets.starIconFilled} className="w-4 h-4" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        
        <div className="flex items-center gap-1 text-sm">
          <img alt="location-icon" src={assets.locationIcon} className="w-4 h-4" />
          <span>{location}</span>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">${price}</span>/night
          </p>
          <button className="px-4 py-2 text-sm font-medium border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </a>
  );
};

export default HotelCard;
