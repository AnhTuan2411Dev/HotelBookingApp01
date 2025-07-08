import React from 'react';
import { assets } from '../assets/assets';


const NewLetter: React.FC = () => {
  return (
    <div className="flex flex-col items-center max-w-5xl lg:w-full rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16 mx-2 lg:mx-auto my-16 md:my-20 lg:my-30 bg-gray-900 text-white">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-playfair leading-tight">Stay Inspired</h1>
        <p className="text-sm md:text-base text-gray-300 md:text-gray-500/90 mt-3 md:mt-2 max-w-sm md:max-w-174 px-2 md:px-0 leading-relaxed">
          Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-6 md:mt-6 w-full max-w-md md:max-w-none">
        <input 
          className="bg-white/10 px-3 md:px-4 py-2 md:py-2.5 border border-white/20 rounded text-sm md:text-base outline-none w-full sm:max-w-66 placeholder:text-gray-300" 
          placeholder="Enter your email" 
          type="email"
        />
        <button className="flex items-center justify-center gap-2 group bg-black px-4 md:px-7 py-2 md:py-2.5 rounded active:scale-95 transition-all w-full sm:w-auto text-sm md:text-base whitespace-nowrap">
          Subscribe
          <img 
            alt="arrow-icon" 
            className="w-3 md:w-3.5 invert group-hover:translate-x-1 transition-all" 
            src={assets.arrowIcon}
          />
        </button>
      </div>
      <p className="text-gray-400 md:text-gray-500 mt-4 md:mt-6 text-xs text-center px-4 md:px-0 leading-relaxed">
        By subscribing, you agree to our Privacy Policy and consent to receive updates.
      </p>
    </div>
  );
};

export default NewLetter;
