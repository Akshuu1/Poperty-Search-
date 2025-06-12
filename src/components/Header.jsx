import React, { useState, useEffect } from 'react';

const Header = ({ onSearch }) => {
  const [locationInput, setLocationInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocationId, setSelectedLocationId] = useState('');

  const handleSearch = () => {
    if (selectedLocationId) {
      onSearch({ locationExternalIDs: selectedLocationId });
    }
  };

  // 🔥 Fetch suggestions as user types
  useEffect(() => {
    const fetchLocations = async () => {
      if (locationInput.length < 2) return setSuggestions([]);
      try {
        const res = await fetch(`https://bayut.p.rapidapi.com/auto-complete?query=${locationInput}`, {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'd0922aa31dmshe81c8fefd12d849p12c1a0jsnf083b257780d',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
        });
        const data = await res.json();
        const locationResults = data.hits || [];
        setSuggestions(locationResults);
      } catch (err) {
        console.error('Error fetching location suggestions:', err);
        setSuggestions([]);
      }
    };

    fetchLocations();
  }, [locationInput]);

  const handleSelectSuggestion = (location) => {
    setLocationInput(location.name);
    setSelectedLocationId(location.externalID);
    setSuggestions([]);
  };

  return (
    <div className='w-full bg-gradient-to-r from-sky-400 to-blue-500 px-8 py-4 text-white shadow-xl'>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-3xl font-extrabold tracking-wide drop-shadow-md">
          Espiro
        </div>

        {/* Location Search */}
        <div className="relative w-full max-w-2xl bg-white rounded-full flex items-center px-6 py-3 shadow-lg mx-8">
          <div className="flex flex-col items-start w-full">
            <label className='text-xs font-semibold text-gray-600 mb-1'>Where</label>
            <input
              type="text"
              placeholder='Search for destinations (e.g. Dubai)'
              className='text-gray-800 text-base focus:outline-none w-full placeholder-gray-400'
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute top-full left-0 w-full bg-white z-50 rounded-xl shadow-2xl max-h-64 overflow-y-auto mt-2 border border-gray-100">
                {suggestions.map((loc) => (
                  <li
                    key={loc.id}
                    onClick={() => handleSelectSuggestion(loc)}
                    className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm text-gray-700 border-b border-gray-50 last:border-b-0 transition-colors duration-150"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">📍</span>
                      {loc.name}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-lg px-6 py-3 rounded-full transition-all duration-300 ml-4 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center min-w-[60px]"
          >
            🔍
          </button>
        </div>

        {/* Profile Icon */}
        <div className="h-12 w-12 bg-white rounded-full shadow-lg flex items-center justify-center text-xl font-bold cursor-pointer hover:rotate-180 transition-transform duration-500 text-blue-500 hover:shadow-xl">
          🔄
        </div>
      </div>
    </div>
  );
};

export default Header;
