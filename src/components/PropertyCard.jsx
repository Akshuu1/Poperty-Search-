import React from 'react';

const PropertyCard = ({ properties }) => {
  return (
    <div className="w-full lg:w-3/4 h-screen overflow-y-auto p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 overflow-hidden"
          >
            <div className="relative overflow-hidden">
              <img
                src={property.coverPhoto?.url || 'https://via.placeholder.com/400x300'}
                alt="property"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {property.isVerified && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                  <span>✅</span>
                  <span className="font-medium">Verified</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-gray-800 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                {property.title?.slice(0, 60)}...
              </h3>
              
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-blue-600">
                  {new Intl.NumberFormat('en-AE', {
                    style: 'currency',
                    currency: 'AED',
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(property.price)}
                </span>
                {property.rentFrequency && (
                  <span className="text-sm text-gray-500 font-medium">
                    / {property.rentFrequency}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span className="text-blue-500">🛏️</span>
                  <span className="font-medium">{property.rooms}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-blue-500">🛁</span>
                  <span className="font-medium">{property.baths}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-blue-500">📐</span>
                  <span className="font-medium">{property.area?.toFixed(0)} sqft</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                {property.furnishingStatus && (
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full text-xs font-medium text-gray-700 border border-gray-200">
                    🏠 {property.furnishingStatus}
                  </span>
                )}

                {property.starRating && (
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {Array.from({ length: property.starRating }, (_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">⭐</span>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium ml-1">
                      ({property.starRating})
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyCard;
