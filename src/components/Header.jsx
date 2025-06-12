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
    <div className='w-full bg-[#5DB1FF] px-[2vw] py-[1vw] text-[#121210] shadow-lg'>
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-[1.8vw] font-extrabold tracking-wide">Espiro</div>

        {/* Location Search */}
        <div className="relative w-[45vw] bg-white h-[4vw] rounded-full flex justify-between items-center px-[1vw] shadow-lg">
          <div className="flex flex-col items-start px-[1vw] w-full">
            <label className='text-[0.8vw] font-semibold'>Where</label>
            <input
              type="text"
              placeholder='Search for destinations (e.g. Dubai)'
              className='text-[#333] text-[.95vw] focus:outline-none w-full'
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />

            {/* Suggestions Dropdown */}
            {suggestions.length > 0 && (
              <ul className="absolute top-[4vw] left-0 w-full bg-white z-10 rounded-md shadow-lg max-h-[12vw] overflow-y-auto">
                {suggestions.map((loc) => (
                  <li
                    key={loc.id}
                    onClick={() => handleSelectSuggestion(loc)}
                    className="px-4 py-2 hover:bg-[#5DB1FF33] cursor-pointer text-[.9vw]"
                  >
                    {loc.name}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="bg-[#5DB1FF] hover:bg-[#4aa6f5] text-white text-[1vw] px-[1.5vw] py-[0.8vw] rounded-full transition duration-300 ml-2"
          >
            🔍
          </button>
        </div>

        {/* Profile Icon */}
        <div className="h-[3.2vw] w-[3.2vw] bg-white rounded-full shadow-md flex items-center justify-center text-lg font-bold cursor-pointer hover:rotate-180 transition">
          🔄
        </div>
      </div>
    </div>
  );
};

export default Header;
