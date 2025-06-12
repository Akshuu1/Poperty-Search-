import React, { useState, useEffect } from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);
  const [priceRange, setPriceRange] = useState([
    localFilters.priceMin || 10000,
    localFilters.priceMax || 5000000
  ]);

  useEffect(() => {
    setLocalFilters(filters);
    setPriceRange([filters.priceMin || 10000, filters.priceMax || 5000000]);
  }, [filters]);

  const updateLocal = (key, value) => {
    setLocalFilters({ ...localFilters, [key]: value });
  };

  const handlePriceMinChange = (e) => {
    const newMin = parseInt(e.target.value);
    setPriceRange([newMin, priceRange[1]]);
    updateLocal('priceMin', newMin);
  };

  const handlePriceMaxChange = (e) => {
    const newMax = parseInt(e.target.value);
    setPriceRange([priceRange[0], newMax]);
    updateLocal('priceMax', newMax);
  };

  const handleApply = () => {
    setFilters(localFilters);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
          🏠 Property Filters
        </h2>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Purpose */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Purpose
          </label>
          <select
            value={localFilters.purpose}
            onChange={(e) => updateLocal('purpose', e.target.value)}
            className="w-full h-11 px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="for-sale">🏷️ Buy</option>
            <option value="for-rent">🏠 Rent</option>
          </select>
        </div>

        <hr className="border-gray-100" />

        {/* Property Type */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Property Type
          </label>
          <select
            value={localFilters.categoryExternalID}
            onChange={(e) => updateLocal('categoryExternalID', e.target.value)}
            className="w-full h-11 px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="4">🏢 Apartment</option>
            <option value="16">🏡 Villa</option>
            <option value="3">🏘️ Townhouse</option>
            <option value="25">🏰 Penthouse</option>
          </select>
        </div>

        <hr className="border-gray-100" />

        {/* Price Range */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Price Range
          </label>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-500 mb-1">Min Price</label>
                <input
                  type="range"
                  min="10000"
                  max="5000000"
                  step="5000"
                  value={priceRange[0]}
                  onChange={handlePriceMinChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">Max Price</label>
                <input
                  type="range"
                  min="10000"
                  max="5000000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={handlePriceMaxChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                {formatPrice(priceRange[0])}
              </span>
              <span className="text-xs text-gray-400">to</span>
              <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-medium">
                {formatPrice(priceRange[1])}
              </span>
            </div>
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* Bedrooms */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Bedrooms
          </label>
          <select
            value={localFilters.roomsMin}
            onChange={(e) => updateLocal('roomsMin', e.target.value)}
            className="w-full h-11 px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">🛏️ Any</option>
            <option value="1">🛏️ 1 Bedroom</option>
            <option value="2">🛏️ 2 Bedrooms</option>
            <option value="3">🛏️ 3+ Bedrooms</option>
          </select>
        </div>

        {/* Bathrooms */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Bathrooms
          </label>
          <select
            value={localFilters.bathsMin}
            onChange={(e) => updateLocal('bathsMin', e.target.value)}
            className="w-full h-11 px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">🚿 Any</option>
            <option value="1">🚿 1 Bathroom</option>
            <option value="2">🚿 2 Bathrooms</option>
            <option value="3">🚿 3+ Bathrooms</option>
          </select>
        </div>

        <hr className="border-gray-100" />

        {/* Furnishing */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Furnishing Status
          </label>
          <select
            value={localFilters.furnishingStatus}
            onChange={(e) => updateLocal('furnishingStatus', e.target.value)}
            className="w-full h-11 px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">🏡 All</option>
            <option value="furnished">🛋️ Furnished</option>
            <option value="unfurnished">📦 Unfurnished</option>
            <option value="semi-furnished">🪑 Semi-Furnished</option>
          </select>
        </div>

        {/* Star Rating */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-600 uppercase tracking-wide">
            Star Rating
          </label>
          <select
            value={localFilters.starRating}
            onChange={(e) => updateLocal('starRating', e.target.value)}
            className="w-full h-11 px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">⭐ All Ratings</option>
            <option value="1">⭐</option>
            <option value="2">⭐⭐</option>
            <option value="3">⭐⭐⭐</option>
            <option value="4">⭐⭐⭐⭐</option>
            <option value="5">⭐⭐⭐⭐⭐</option>
          </select>
        </div>

        <hr className="border-gray-100" />

        <button
          onClick={handleApply}
          className="w-full h-11 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
