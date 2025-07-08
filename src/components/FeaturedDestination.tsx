import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from './Title';
import HotelCard from './HotelCard';
import { roomsDummyData } from '../assets/assets';

const FeaturedDestination: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllDestinations = () => {
    navigate('/rooms');
  };

  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20">
      <Title 
        title="Featured Destination"
        description="Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences."
      />
      
      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {roomsDummyData.map((room, index) => (
          <HotelCard
            key={room._id}
            id={room._id}
            image={room.images[0]}
            name={room.hotel.name}
            rating={4.5}
            location={room.hotel.address}
            price={room.pricePerNight}
            bestSeller={index === 0 || index === 2}
          />
        ))}
      </div>
      
      <button 
        onClick={handleViewAllDestinations}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
