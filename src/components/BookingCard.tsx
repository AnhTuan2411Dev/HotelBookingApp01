import React from 'react';

interface BookingCardProps {
  id: string;
  hotelName: string;
  roomType: string;
  location: string;
  guests: number;
  total: number;
  checkIn: string;
  checkOut: string;
  paymentStatus: 'paid' | 'unpaid';
  image: string;
}

const BookingCard: React.FC<BookingCardProps> = ({
  hotelName,
  roomType,
  location,
  guests,
  total,
  checkIn,
  checkOut,
  paymentStatus,
  image
}) => {
  return (
    <div className="w-full h-[178px] border-b border-[#D1D1D1] flex items-center">
      <img 
        src={image} 
        alt={`${hotelName} Image`} 
        className="w-[196px] h-[131px] rounded-[4px] shadow-[0px_4px_10.1px_0px_rgba(228,238,248,1)] mr-8"
      />
      <div className="flex flex-col justify-center">
        <h2 className="font-playfair font-normal text-[26px] text-[#343434] mb-1">
          {hotelName} ({roomType})
        </h2>
        <div className="flex items-center mb-4">
          <svg 
            className="w-[14.19px] h-[16px] mr-1" 
            viewBox="0 0 14.19 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7.095 0C3.1785 0 0 3.1785 0 7.095C0 11.0115 7.095 16 7.095 16C7.095 16 14.19 11.0115 14.19 7.095C14.19 3.1785 11.0115 0 7.095 0ZM7.095 9.53C5.745 9.53 4.645 8.43 4.645 7.08C4.645 5.73 5.745 4.63 7.095 4.63C8.445 4.63 9.545 5.73 9.545 7.08C9.545 8.43 8.445 9.53 7.095 9.53Z" 
              stroke="rgba(107,114,128,0.89)" 
              strokeWidth="1.5"
            />
          </svg>
          <span className="font-inter font-medium text-[14px] text-[rgba(107,114,128,0.89)]">
            {location}
          </span>
        </div>
        <div className="flex items-center mb-4">
          <svg 
            className="w-[16px] h-[16px] mr-1" 
            viewBox="0 0 16 16" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M8.00004 8C9.47254 8 10.6667 6.80583 10.6667 5.33333C10.6667 3.86083 9.47254 2.66667 8.00004 2.66667C6.52754 2.66667 5.33337 3.86083 5.33337 5.33333C5.33337 6.80583 6.52754 8 8.00004 8ZM8.00004 9.33333C5.33337 9.33333 3.33337 11.3333 3.33337 14H12.6667C12.6667 11.3333 10.6667 9.33333 8.00004 9.33333Z" 
              stroke="#7B818E" 
              strokeWidth="1.5"
            />
          </svg>
          <span className="font-inter font-medium text-[14px] text-[rgba(107,114,128,0.89)]">
            Guests: {guests}
          </span>
        </div>
        <span className="font-outfit font-normal text-[18px] text-[#3C3C3C]">
          Total: ${total}
        </span>
      </div>
      <div className="ml-auto flex items-center space-x-16">
        <div className="flex flex-col justify-center min-w-[120px]">
          <span className="font-outfit font-medium text-[16px] text-[#515151] mb-1">Check-In:</span>
          <span className="font-inter font-medium text-[14px] text-[rgba(107,114,128,0.89)]">
            {checkIn}
          </span>
        </div>
        <div className="flex flex-col justify-center min-w-[120px]">
          <span className="font-outfit font-medium text-[16px] text-[#515151] mb-1">Check-Out:</span>
          <span className="font-inter font-medium text-[14px] text-[rgba(107,114,128,0.89)]">
            {checkOut}
          </span>
        </div>
        <div className="flex flex-col justify-center items-center min-w-[80px]">
          <div className="flex items-center">
            <div 
              className={`w-[12px] h-[12px] rounded-full mr-2 ${
                paymentStatus === 'paid' ? 'bg-[#00A625]' : 'bg-[#D30B00]'
              }`}
            />
            <span 
              className={`font-outfit font-normal text-[16px] ${
                paymentStatus === 'paid' ? 'text-[#00A625]' : 'text-[#D30B00]'
              }`}
            >
              {paymentStatus === 'paid' ? 'Paid' : 'Unpaid'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
