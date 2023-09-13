import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // useEffect(() => {
  //   const fetchResults = async () => {
  //     try {
  //       const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=9875b20a90bd4a48883b67d76db3e073`);
  //       const data = await response.json();
  //       onSearch(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchResults();
  // }, []);
  //query, onSearch

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="search-bar">
      <input type="text" placeholder="Search city..." value={query} onChange={handleInputChange} />
    </div>
  );
};

export default SearchBar;
