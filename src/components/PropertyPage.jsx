// src/pages/PropertyPage.jsx

import React, { useState, useEffect } from 'react';
import FilterPanel from '../components/FilterPanel';
import PropertyCard from '../components/PropertyCard';
import { fetchProperties } from '../api/propertyAPI';

const PropertyPage = () => {
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
  });

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadProperties = async () => {
      const data = await fetchProperties(filters);
      setProperties(data);
    };
    loadProperties();
  }, [filters]);

  return (
    <div className="flex justify-center mt-8">
      <div className="w-[90vw] flex justify-between gap-6">
        <FilterPanel filters={filters} setFilters={setFilters} />
        <PropertyCard properties={properties} />
      </div>
    </div>
  );
};

export default PropertyPage;
