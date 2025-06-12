const headers = {
  'X-RapidAPI-Key': 'd0922aa31dmshe81c8fefd12d849p12c1a0jsnf083b257780d',
  'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
};

export const fetchProperties = async (params = {}) => {
  const {
    purpose = 'for-sale',
    locationExternalIDs = '5002',
    categoryExternalID = '4',
    priceMin,
    priceMax,
    roomsMin,
    bathsMin,
    furnishingStatus,
    sort = 'price-desc',
    hitsPerPage = 12,
    page = 1,
  } = params;

  const query = new URLSearchParams({
    purpose,
    locationExternalIDs,
    categoryExternalID,
    sort,
    hitsPerPage,
    page,
  });

  if (priceMin) query.append('priceMin', priceMin);
  if (priceMax) query.append('priceMax', priceMax);
  if (roomsMin) query.append('roomsMin', roomsMin);
  if (bathsMin) query.append('bathsMin', bathsMin);
  if (furnishingStatus) query.append('furnishingStatus', furnishingStatus);

  try {
    const res = await fetch(
      `https://bayut.p.rapidapi.com/properties/list?${query.toString()}`,
      { method: 'GET', headers }
    );
    const data = await res.json();
    return (data.hits || []).map((property) => ({
      ...property,
      starRating: Math.floor(Math.random() * 5) + 1, // mock star rating
    }));
  } catch (err) {
    console.error('Error fetching properties:', err);
    return [];
  }
};
