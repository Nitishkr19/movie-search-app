import React, { createContext, useState } from 'react';
export const SearchHistoryContext = createContext();

export const SearchHistoryProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  const addToSearchHistory = (query) => {
    const now = new Date().toLocaleString();
    setSearchHistory(prevHistory => [...prevHistory, { query, date: now }]);
  };

  return (
    <SearchHistoryContext.Provider value={{ searchHistory, addToSearchHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};
