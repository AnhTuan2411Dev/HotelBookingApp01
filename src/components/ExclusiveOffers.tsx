import React from 'react';
import { assets, exclusiveOffers } from '../assets/assets';

const ExclusiveOffers: React.FC = () => {
    return (
        <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
                <div className="flex flex-col justify-center items-center text-center md:items-start md:text-left">
                    <h1 className="text-4xl md:text-[40px] font-playfair">Exclusive Offers</h1>
                    <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
                        Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
                    </p>
                </div>
                <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
                    View All Offers
                    <img
                        className="group-hover:translate-x-1 transition-all"
                        alt="arrow-icon"
                        src={assets.arrowIcon}
                    />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                {exclusiveOffers.map((offer) => (
                    <div
                        key={offer._id}
                        className="group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
                        style={{ backgroundImage: `url(${offer.image})` }}
                    >
                        <p className="px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
                            {offer.priceOff}% OFF
                        </p>
                        <div>
                            <p className="text-2xl font-medium font-playfair">{offer.title}</p>
                            <p>{offer.description}</p>
                            <p className="text-xs text-white/70 mt-3">Expires {offer.expiryDate}</p>
                        </div>
                        <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
                            View Offers
                            <img
                                className="invert group-hover:translate-x-1 transition-all"
                                alt="arrow-icon"
                                src={assets.arrowIcon}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExclusiveOffers;
