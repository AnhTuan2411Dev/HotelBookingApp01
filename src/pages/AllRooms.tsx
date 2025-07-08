import React, { useState, useEffect } from 'react';
import Checkbox from '../components/Checkbox';
import RadioButton from '../components/RadioButton';
import RoomCard, { type RoomDisplay } from '../components/RoomCard';
import { assets, roomsDummyData, facilityIcons } from '../assets/assets';

const AllRooms: React.FC = () => {
  const [filters, setFilters] = useState({
    popularFilters: [] as string[],
    priceRange: [] as string[],
    sortBy: ''
  });
  const [showFilters, setShowFilters] = useState(false);

  // Transform rooms data from assets
  const rooms: RoomDisplay[] = roomsDummyData.map((room) => ({
    id: room._id,
    image: room.images[0], // Use first image
    city: room.hotel.city,
    name: room.hotel.name,
    rating: 5, // Default rating since not in data
    reviews: 200, // Default reviews since not in data
    location: room.hotel.address,
    amenities: room.amenities.map((amenity: string) => ({
      icon: facilityIcons[amenity] || assets.roomServiceIcon,
      name: amenity
    })),
    price: room.pricePerNight
  }));

  const handlePopularFilterChange = (filter: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      popularFilters: checked
        ? [...prev.popularFilters, filter]
        : prev.popularFilters.filter(f => f !== filter)
    }));
  };

  const handlePriceRangeChange = (range: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      priceRange: checked
        ? [...prev.priceRange, range]
        : prev.priceRange.filter(r => r !== range)
    }));
  };

  const handleSortByChange = (value: string) => {
    setFilters(prev => ({
      ...prev,
      sortBy: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      popularFilters: [],
      priceRange: [],
      sortBy: ''
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Main Content */}
      <div>
        {/* Header */}
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>

        {/* Room Listings */}
        {rooms.map((room, index) => (
          <RoomCard
            key={room.id}
            room={room}
            isLastItem={index === rooms.length - 1}
          />
        ))}
      </div>

      {/* Filters Sidebar */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        {/* Filter Header */}
        <div className="flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300">
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div 
            className="text-xs cursor-pointer"
            onClick={() => {
              if (window.innerWidth < 1024) {
                setShowFilters(!showFilters);
              } else {
                clearFilters();
              }
            }}
          >
            <span className="lg:hidden">
              {showFilters ? 'HIDE' : 'SHOW'}
            </span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>

        {/* Filter Content */}
        <div className={`${showFilters ? 'h-auto' : 'h-0'} lg:h-auto overflow-hidden transition-all duration-700`}>
          {/* Popular Filters */}
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            <Checkbox
              label="Single Bed"
              checked={filters.popularFilters.includes('Single Bed')}
              onChange={(checked) => handlePopularFilterChange('Single Bed', checked)}
            />
            <Checkbox
              label="Double Bed"
              checked={filters.popularFilters.includes('Double Bed')}
              onChange={(checked) => handlePopularFilterChange('Double Bed', checked)}
            />
            <Checkbox
              label="Luxury Room"
              checked={filters.popularFilters.includes('Luxury Room')}
              onChange={(checked) => handlePopularFilterChange('Luxury Room', checked)}
            />
            <Checkbox
              label="Family Suite"
              checked={filters.popularFilters.includes('Family Suite')}
              onChange={(checked) => handlePopularFilterChange('Family Suite', checked)}
            />
          </div>

          {/* Price Range */}
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            <Checkbox
              label="$ 0 to 500"
              checked={filters.priceRange.includes('0-500')}
              onChange={(checked) => handlePriceRangeChange('0-500', checked)}
            />
            <Checkbox
              label="$ 500 to 1000"
              checked={filters.priceRange.includes('500-1000')}
              onChange={(checked) => handlePriceRangeChange('500-1000', checked)}
            />
            <Checkbox
              label="$ 1000 to 2000"
              checked={filters.priceRange.includes('1000-2000')}
              onChange={(checked) => handlePriceRangeChange('1000-2000', checked)}
            />
            <Checkbox
              label="$ 2000 to 3000"
              checked={filters.priceRange.includes('2000-3000')}
              onChange={(checked) => handlePriceRangeChange('2000-3000', checked)}
            />
          </div>

          {/* Sort By */}
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            <RadioButton
              name="sortOption"
              value="price-low-high"
              label="Price Low to High"
              checked={filters.sortBy === 'price-low-high'}
              onChange={handleSortByChange}
            />
            <RadioButton
              name="sortOption"
              value="price-high-low"
              label="Price High to Low"
              checked={filters.sortBy === 'price-high-low'}
              onChange={handleSortByChange}
            />
            <RadioButton
              name="sortOption"
              value="newest-first"
              label="Newest First"
              checked={filters.sortBy === 'newest-first'}
              onChange={handleSortByChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
