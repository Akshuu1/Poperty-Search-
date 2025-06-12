import React, { useState, useEffect } from 'react';

const FilterPanel = ({ filters, setFilters }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const updateLocal = (key, value) => {
    setLocalFilters({ ...localFilters, [key]: value });
  };

  const handleApply = () => {
    setFilters(localFilters);
  };

  return (
    <div className="w-[30%] rounded-[1vw] p-[2vw] bg-white shadow-md ">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 ">Filters</h2>

      {/* Purpose */}
      <label className="font-bold">Purpose</label>
      <select
        value={localFilters.purpose}
        onChange={(e) => updateLocal('purpose', e.target.value)}
        className="w-full p-2 mb-3"
      >
        <option value="for-sale">Buy</option>
        <option value="for-rent">Rent</option>
      </select>

      {/* Property Type */}
      <label className="font-bold">Type</label>
      <select
        value={localFilters.categoryExternalID}
        onChange={(e) => updateLocal('categoryExternalID', e.target.value)}
        className="w-full p-2 mb-3"
      >
        <option value="4">Apartment</option>
        <option value="16">Villa</option>
        <option value="3">Townhouse</option>
        <option value="25">Penthouse</option>
      </select>

      {/* Price Range */}
      <label className="font-bold">Price Range (AED)</label>
      <input
        type="range"
        min="10000"
        max="5000000"
        step="5000"
        value={localFilters.priceMin || 10000}
        onChange={(e) => updateLocal('priceMin', e.target.value)}
        className="w-full"
      />
      <input
        type="range"
        min="10000"
        max="5000000"
        step="5000"
        value={localFilters.priceMax || 5000000}
        onChange={(e) => updateLocal('priceMax', e.target.value)}
        className="w-full mb-3"
      />
      <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
        AED {localFilters.priceMin || 10000} - AED {localFilters.priceMax || 5000000}
      </p>

      {/* Bedrooms */}
      <label className="font-bold">Bedrooms</label>
      <select
        value={localFilters.roomsMin}
        onChange={(e) => updateLocal('roomsMin', e.target.value)}
        className="w-full p-2 mb-3"
      >
        <option value="">Any</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3+</option>
      </select>

      {/* Bathrooms */}
      <label className="font-bold">Bathrooms</label>
      <select
        value={localFilters.bathsMin}
        onChange={(e) => updateLocal('bathsMin', e.target.value)}
        className="w-full p-2 mb-3"
      >
        <option value="">Any</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3+</option>
      </select>

      {/* Furnishing */}
      <label className="font-bold">Furnishing</label>
      <select
        value={localFilters.furnishingStatus}
        onChange={(e) => updateLocal('furnishingStatus', e.target.value)}
        className="w-full p-2 mb-3"
      >
        <option value="">All</option>
        <option value="furnished">Furnished</option>
        <option value="unfurnished">Unfurnished</option>
        <option value="semi-furnished">Semi-Furnished</option>
      </select>

      {/* Star Rating */}
      <label className="font-bold">Star Rating</label>
      <select
        value={localFilters.starRating}
        onChange={(e) => updateLocal('starRating', e.target.value)}
        className="w-full p-2 mb-4"
      >
        <option value="">All</option>
        <option value="1">⭐️</option>
        <option value="2">⭐️⭐️</option>
        <option value="3">⭐️⭐️⭐️</option>
        <option value="4">⭐️⭐️⭐️⭐️</option>
        <option value="5">⭐️⭐️⭐️⭐️⭐️</option>
      </select>

      <button
        onClick={handleApply}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;
