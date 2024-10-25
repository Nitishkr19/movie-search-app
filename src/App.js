import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieSearchScreen from './screens/MovieSearchScreen';
import MovieDetailsScreen from './screens/MovieDetailsScreen';
import SearchHistoryScreen from './screens/SearchHistoryScreen';
import { SearchHistoryProvider } from './context/SearchHistoryContext';
import './App.css';
function App() {
  return (
    <SearchHistoryProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={<MovieSearchScreen />} />
        <Route path="/details/:id" element={<MovieDetailsScreen />} />
        <Route path="/history" element={<SearchHistoryScreen />} />
      </Routes>
    </Router>
    </SearchHistoryProvider>
  );
}

export default App;
