import React, { createContext, useState } from 'react';

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState('numbers'); // Default filter

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  return (
    <FilterContext.Provider value={{ selectedFilter, handleFilterChange }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext, FilterProvider };