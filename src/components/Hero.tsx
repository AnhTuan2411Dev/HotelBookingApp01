import React from 'react';
import { assets } from '../assets/assets';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img 
        src={assets.heroImage} 
        alt="Hero Image" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-4 md:px-8 lg:px-24 pt-16 md:pt-20">
        {/* Badge */}
        <p className="bg-[#49B9FF]/50 px-2.5 py-1 md:px-3.5 rounded-full mt-16 md:mt-20 text-white text-xs md:text-sm">
          The Ultimate Hotel Experience
        </p>
        
        {/* Title */}
        <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[56px] font-bold md:font-extrabold max-w-xl mt-3 md:mt-4 text-white leading-tight">
          Discover Your Perfect Gateway Destination
        </h1>
        
        {/* Description */}
        <p className="max-w-lg md:max-w-130 mt-3 md:mt-2 text-sm md:text-base text-white leading-relaxed">
          Unparalleled luxury and comfort await at the world's most exclusive hotels and resorts. Start your journey today.
        </p>
        
        {/* Search Bar */}
        <form className="bg-white text-gray-500 rounded-lg px-3 py-3 md:px-6 md:py-4 mt-6 md:mt-8 flex flex-col md:flex-row w-full max-w-5xl gap-3 md:gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img 
                alt="" 
                className="h-3 md:h-4" 
                src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%205.66667H13M3.66667%201V2.33333M10.3333%201V2.33333M3.13333%2013H10.8667C11.6134%2013%2011.9868%2013%2012.272%2012.8547C12.5229%2012.7269%2012.7269%2012.5229%2012.8547%2012.272C13%2011.9868%2013%2011.6134%2013%2010.8667V4.46667C13%203.71993%2013%203.34656%2012.8547%203.06135C12.7269%202.81046%2012.5229%202.60649%2012.272%202.47866C11.9868%202.33333%2011.6134%202.33333%2010.8667%202.33333H3.13333C2.3866%202.33333%202.01323%202.33333%201.72801%202.47866C1.47713%202.60649%201.27315%202.81046%201.14533%203.06135C1%203.34656%201%203.71993%201%204.46667V10.8667C1%2011.6134%201%2011.9868%201.14533%2012.272C1.27315%2012.5229%201.47713%2012.7269%201.72801%2012.8547C2.01323%2013%202.38659%2013%203.13333%2013Z'%20stroke='%236a7282%20'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
              />
              <label htmlFor="destinationInput" className="text-xs md:text-sm">Destination</label>
            </div>
            <input 
              list="destinations" 
              id="destinationInput" 
              className="w-full rounded border border-gray-200 px-2 py-1 md:px-3 md:py-1.5 mt-1 md:mt-1.5 text-xs md:text-sm outline-none" 
              placeholder="Type here" 
              required 
              type="text" 
              defaultValue=""
            />
            <datalist id="destinations">
              <option value="Dubai"></option>
              <option value="Singapore"></option>
              <option value="New York"></option>
              <option value="London"></option>
            </datalist>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img 
                alt="" 
                className="h-3 md:h-4" 
                src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%205.66667H13M3.66667%201V2.33333M10.3333%201V2.33333M3.13333%2013H10.8667C11.6134%2013%2011.9868%2013%2012.272%2012.8547C12.5229%2012.7269%2012.7269%2012.5229%2012.8547%2012.272C13%2011.9868%2013%2011.6134%2013%2010.8667V4.46667C13%203.71993%2013%203.34656%2012.8547%203.06135C12.7269%202.81046%2012.5229%202.60649%2012.272%202.47866C11.9868%202.33333%2011.6134%202.33333%2010.8667%202.33333H3.13333C2.3866%202.33333%202.01323%202.33333%201.72801%202.47866C1.47713%202.60649%201.27315%202.81046%201.14533%203.06135C1%203.34656%201%203.71993%201%204.46667V10.8667C1%2011.6134%201%2011.9868%201.14533%2012.272C1.27315%2012.5229%201.47713%2012.7269%201.72801%2012.8547C2.01323%2013%202.38659%2013%203.13333%2013Z'%20stroke='%236a7282%20'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
              />
              <label htmlFor="checkIn" className="text-xs md:text-sm">Check in</label>
            </div>
            <input 
              id="checkIn" 
              className="w-full rounded border border-gray-200 px-2 py-1 md:px-3 md:py-1.5 mt-1 md:mt-1.5 text-xs md:text-sm outline-none" 
              type="date"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <img 
                alt="" 
                className="h-3 md:h-4" 
                src="data:image/svg+xml,%3csvg%20width='14'%20height='14'%20viewBox='0%200%2014%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1%205.66667H13M3.66667%201V2.33333M10.3333%201V2.33333M3.13333%2013H10.8667C11.6134%2013%2011.9868%2013%2012.272%2012.8547C12.5229%2012.7269%2012.7269%2012.5229%2012.8547%2012.272C13%2011.9868%2013%2011.6134%2013%2010.8667V4.46667C13%203.71993%2013%203.34656%2012.8547%203.06135C12.7269%202.81046%2012.5229%202.60649%2012.272%202.47866C11.9868%202.33333%2011.6134%202.33333%2010.8667%202.33333H3.13333C2.3866%202.33333%202.01323%202.33333%201.72801%202.47866C1.47713%202.60649%201.27315%202.81046%201.14533%203.06135C1%203.34656%201%203.71993%201%204.46667V10.8667C1%2011.6134%201%2011.9868%201.14533%2012.272C1.27315%2012.5229%201.47713%2012.7269%201.72801%2012.8547C2.01323%2013%202.38659%2013%203.13333%2013Z'%20stroke='%236a7282%20'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
              />
              <label htmlFor="checkOut" className="text-xs md:text-sm">Check out</label>
            </div>
            <input 
              id="checkOut" 
              className="w-full rounded border border-gray-200 px-2 py-1 md:px-3 md:py-1.5 mt-1 md:mt-1.5 text-xs md:text-sm outline-none" 
              type="date"
            />
          </div>
          
          <div className="flex md:flex-col gap-2 md:gap-0 items-center md:items-start flex-1 md:flex-initial">
            <label htmlFor="guests" className="text-xs md:text-sm whitespace-nowrap">Guests</label>
            <input 
              min="1" 
              max="4" 
              id="guests" 
              className="w-full md:max-w-16 rounded border border-gray-200 px-2 py-1 md:px-3 md:py-1.5 mt-0 md:mt-1.5 text-xs md:text-sm outline-none" 
              placeholder="0" 
              type="number"
            />
          </div>
          
          <button className="flex items-center justify-center gap-1 md:gap-2 rounded-md bg-black py-2 md:py-3 px-3 md:px-4 text-white my-auto cursor-pointer w-full md:w-auto">
            <img 
              alt="searchIcon" 
              className="h-5 md:h-7" 
              src="data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.114%2016.1133L20.0001%2019.9999'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M14.531%2017.183C17.0779%2016.1006%2018.265%2013.1585%2017.1827%2010.6117C16.1003%208.06491%2013.1582%206.87774%2010.6114%207.96011C8.06461%209.04249%206.87744%2011.9845%207.95981%2014.5313C9.04218%2017.0782%2011.9842%2018.2653%2014.531%2017.183Z'%20stroke='white'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e"
            />
            <span className="text-xs md:text-sm">Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
