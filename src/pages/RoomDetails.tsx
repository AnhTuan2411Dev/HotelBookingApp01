import React, { useState, useEffect } from 'react';
import { assets, roomsDummyData, hotelDummyData, roomCommonData, facilityIcons } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails: React.FC = () => {
  // Using the first room from dummy data as example
  const roomData = roomsDummyData[1]; // Using the second room (index 1) with $299 price
  const hotelData = hotelDummyData;
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);

  // Auto scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { 
      roomId: roomData._id,
      hotelId: hotelData._id,
      checkInDate, 
      checkOutDate, 
      guests 
    });
  };

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  // Get today's date in YYYY-MM-DD format for min attribute
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-playfair">
          {hotelData.name} <span className="font-inter text-sm">({roomData.roomType})</span>
        </h1>
        <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
          20% OFF
        </p>
      </div>

      {/* Rating Section */}
      <div className="flex items-center gap-1 mt-2">
        <StarRating rating={4.5} />
        <p className="ml-2">200+ reviews</p>
      </div>

      {/* Location Section */}
      <div className="flex items-center gap-1 text-gray-500 mt-2">
        <img alt="location-icon" src={assets.locationIcon} />
        <span>{hotelData.address}</span>
      </div>

      {/* Images Section */}
      <div className="flex flex-col lg:flex-row mt-6 gap-6">
        <div className="lg:w-1/2 w-full">
          <img 
            className="w-full rounded-xl shadow-lg object-cover h-96" 
            alt="Room Image"
            src={roomData.images[selectedImage]}
          />
        </div>
        <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
          {roomData.images.map((image, index) => (
            <img
              key={index}
              className={`w-full h-44 rounded-xl shadow-md object-cover cursor-pointer ${
                selectedImage === index ? 'outline outline-3 outline-orange-500' : ''
              }`}
              alt="Room Image"
              src={image}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Title and Amenities Section */}
      <div className="flex flex-col md:flex-row md:justify-between mt-10">
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-playfair">
            Experience Luxury Like Never Before
          </h1>
          <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
            {roomData.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
                <img 
                  alt={amenity} 
                  className="w-5 h-5" 
                  src={facilityIcons[amenity] || assets.badgeIcon} 
                />
                <p className="text-xs">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="text-2xl font-medium">${roomData.pricePerNight}/night</p>
      </div>

      {/* Booking Form */}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl"
      >
        <div className="flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500">
          <div className="flex flex-col">
            <label htmlFor="checkInDate" className="font-medium">Check-In</label>
            <input
              id="checkInDate"
              min={today}
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              placeholder="Check-In"
              required
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
          <div className="flex flex-col">
            <label htmlFor="checkOutDate" className="font-medium">Check-Out</label>
            <input
              id="checkOutDate"
              min={checkInDate || today}
              className="w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              placeholder="Check-Out"
              required
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
          <div className="w-px h-15 bg-gray-300/70 max-md:hidden"></div>
          <div className="flex flex-col">
            <label htmlFor="guests" className="font-medium">Guests</label>
            <input
              id="guests"
              className="max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none"
              placeholder="0"
              required
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
            />
          </div>
        </div>
        <button 
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer"
        >
          Check Availability
        </button>
      </form>

      {/* Features Section */}
      <div className="mt-25 space-y-4">
        {roomCommonData.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <img className="w-6.5" alt={`${feature.title}-icon`} src={feature.icon} />
            <div>
              <p className="text-base">{feature.title}</p>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500">
        <p>
          Guests will be allocated on the ground floor according to availability. You get a comfortable {roomData.roomType}
          apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the
          number of guests to get the exact price for groups. The Guests will be allocated ground floor according to
          availability. You get the comfortable {roomData.roomType.toLowerCase()} apartment that has a true city feeling.
        </p>
      </div>

      {/* Host Section */}
      <div className="flex flex-col items-start gap-4">
        <div className="flex gap-4">
          <img 
            className="h-14 w-14 md:h-18 md:w-18 rounded-full" 
            alt="Host"
            src={hotelData.owner.image}
          />
          <div>
            <p className="text-lg md:text-xl">Hosted by {hotelData.name}</p>
            <div className="flex items-center mt-1">
              <StarRating rating={4.5} />
              <p className="ml-2">200+ reviews</p>
            </div>
          </div>
        </div>
        <button className="px-6 py-2.5 mt-4 rounded text-white bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
