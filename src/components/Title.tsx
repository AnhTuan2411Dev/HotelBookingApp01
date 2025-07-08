import React from 'react';

interface TitleProps {
  title: string;
  description: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, description, className = "" }) => {
  return (
    <div className={`flex flex-col justify-center items-center text-center ${className}`}>
      <h1 className="text-4xl md:text-[40px] font-playfair">{title}</h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
        {description}
      </p>
    </div>
  );
};

export default Title;
