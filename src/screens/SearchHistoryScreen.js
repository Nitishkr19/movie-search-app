import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SearchHistoryContext } from '../context/SearchHistoryContext';

const SearchHistoryScreen = () => {
  const { searchHistory } = useContext(SearchHistoryContext);

  return (
    <div className="container">
      <Link to="/" className="back-button">Back to Search</Link>
      <h2>Search History</h2>
      {searchHistory.length > 0 ? (
        <ul className="history-list">
          {searchHistory.map((item, index) => (
            <li key={index} className="history-item">
              <p>Query: {item.query}</p>
              <p className="history-date">Date: {item.date}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No search history available.</p>
      )}
      
    </div>
  );
};

export default SearchHistoryScreen;
