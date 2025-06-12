import React from 'react';

const PropertyCard = ({ properties }) => {
  return (
    <div className="w-[70%] h-[79.5vh] overflow-y-auto p-[2vw] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <div
          key={property.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 cursor-pointer group"
        >
          <div className="relative">
            <img
              src={property.coverPhoto?.url || 'https://via.placeholder.com/400x300'}
              alt="property"
              className="w-full h-[12vw] object-cover rounded-xl group-hover:scale-105 transition duration-300"
            />
            {property.isVerified && (
              <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                ✅ Verified
              </span>
            )}
          </div>

          <div className="mt-4 space-y-1">
            <h3 className="text-md font-bold text-gray-800 dark:text-white">
              {property.title?.slice(0, 50)}...
            </h3>
            <p className="text-blue-600 dark:text-blue-300 font-semibold text-sm">
              AED {property.price.toLocaleString()}
              {property.rentFrequency ? ` / ${property.rentFrequency}` : ''}
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-xs">
              🛏 {property.rooms} &nbsp;&nbsp; 🛁 {property.baths} &nbsp;&nbsp; 📐 {property.area.toFixed(0)} sqft
            </p>

            {property.furnishingStatus && (
              <p className="text-xs inline-block mt-1 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500 dark:text-gray-300">
                {property.furnishingStatus}
              </p>
            )}

            {/* ⭐ Star Rating */}
            {property.starRating && (
              <p className="text-yellow-500 text-sm flex items-center">
                {Array.from({ length: property.starRating }, (_, i) => (
                  <span key={i}>⭐</span>
                ))}
                <span className="ml-1 text-gray-500 dark:text-gray-300">
                  ({property.starRating})
                </span>
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyCard;
