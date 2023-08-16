import React, { useState } from 'react';
import { globalStyle } from '../Styles/globalStyle';

const GlobalSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div style={globalStyle.searchContainer}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={globalStyle.searchInput}
      />
      <button onClick={handleSearch} style={globalStyle.searchButton}>
        Search
      </button>
    </div>
  );
};

export default GlobalSearch;
