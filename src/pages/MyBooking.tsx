import React from 'react';
import BookingCard from '../components/BookingCard';
import { userBookingsDummyData } from '../assets/assets';

const MyBooking: React.FC = () => {
  // Convert booking data to the format expected by BookingCard
  const bookings = userBookingsDummyData.map(booking => ({
    id: booking._id,
    hotelName: booking.hotel.name,
    roomType: booking.room.roomType,
    location: `${booking.hotel.address}, ${booking.hotel.city}`,
    guests: booking.guests,
    total: booking.totalPrice,
    checkIn: new Date(booking.checkInDate).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    checkOut: new Date(booking.checkOutDate).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    paymentStatus: booking.isPaid ? 'paid' as const : 'unpaid' as const,
    image: booking.room.images[0] // Use the first image from room images
  }));

  return (
    <div className="min-h-screen bg-white pt-28 md:pt-35 px-6 md:px-16 lg:px-24 xl:px-32 pb-20">
      {/* Main Title */}
      <div className="mb-6">
        <h1 className="font-playfair font-medium text-[40px] text-[#252525]">My Bookings</h1>
      </div>
      
      {/* Subtitle */}
      <div className="mb-12">
        <p className="font-inter font-medium text-[16px] text-[rgba(107,114,128,0.9)] max-w-[579px]">
          Easily manage your past, current, and upcoming hotel reservations in one place. 
          Plan your trips seamlessly with just a few clicks
        </p>
      </div>

      {/* Navigation Headers */}
      <div className="flex space-x-[100px] mb-8">
        <span className="font-inter font-medium text-[16px] text-[#252525]">Hotels</span>
        <span className="font-inter font-medium text-[16px] text-[#515151]">Date & Timings</span>
        <span className="font-inter font-medium text-[16px] text-[#515151]">Payment</span>
      </div>

      {/* Booking Cards Container */}
      <div className="max-w-[1220px]">
        {bookings.map((booking) => (
          <div key={booking.id}>
            <BookingCard {...booking} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBooking;
