import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import FilterPanel from './components/FilterPanel';
import PropertyCard from './components/PropertyCard';
import { fetchProperties } from './api/propertyAPI.js';

const App = () => {
  const [filters, setFilters] = useState({
    purpose: 'for-sale',
    locationExternalIDs: '5002',
    categoryExternalID: '4',
    priceMin: '',
    priceMax: '',
    roomsMin: '',
    bathsMin: '',
    furnishingStatus: '',
    sort: 'price-desc',
    hitsPerPage: 12,
    page: 1,
    rating: ''
  });

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProperties(filters);
      setProperties(data);
    };
    fetchData();
  }, [filters]);

  return (
    <div className="bg-[#f6f8fb]">
        <Header onSearch={(newFilters) => setFilters((prev) => ({ ...prev, ...newFilters }))} />
      <div className="w-full flex mt-5">
      <FilterPanel filters={filters} setFilters={setFilters} />
        <PropertyCard properties={properties} />
      </div>
    </div>
  );
};

export default App;
