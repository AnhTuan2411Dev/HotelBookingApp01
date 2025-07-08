import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './StarRating';
import { assets } from '../assets/assets';

interface RoomDisplay {
  id: string;
  image: string;
  city: string;
  name: string;
  rating: number;
  reviews: number;
  location: string;
  amenities: Array<{
    icon: string;
    name: string;
  }>;
  price: number;
}

interface RoomCardProps {
  room: RoomDisplay;
  isLastItem?: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, isLastItem = false }) => {
  const navigate = useNavigate();

  const handleRoomClick = () => {
    navigate(`/rooms/${room.id}`);
  };

  return (
    <div
      className={`flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 ${
        isLastItem ? 'last:pb-30 last:border-0' : ''
      }`}
    >
      {/* Room Image */}
      <img
        title="View Room Details"
        alt="hotel-img"
        className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer hover:shadow-xl transition-shadow duration-300"
        src={room.image}
        onClick={handleRoomClick}
      />

      {/* Room Details */}
      <div className="md:w-1/2 flex flex-col gap-2">
        <p className="text-gray-500">{room.city}</p>
        <p 
          className="text-gray-800 text-3xl font-playfair cursor-pointer hover:text-orange-500 transition-colors duration-300" 
          title="View Room Details"
          onClick={handleRoomClick}
        >
          {room.name}
        </p>

        {/* Rating */}
        <div className="flex items-center">
          <StarRating rating={room.rating} />
          <p className="ml-2">{room.reviews}+ reviews</p>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
          <img alt="location-icon" src={assets.locationIcon} />
          <span>{room.location}</span>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
          {room.amenities.map((amenity: { icon: string; name: string }, index: number) => (
            <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70">
              <img alt={amenity.name} className="w-5 h-5" src={amenity.icon} />
              <p className="text-xs">{amenity.name}</p>
            </div>
          ))}
        </div>

        {/* Price */}
        <p className="text-xl font-medium text-gray-700">${room.price} /night</p>
      </div>
    </div>
  );
};

export default RoomCard;
export type { RoomDisplay }; 