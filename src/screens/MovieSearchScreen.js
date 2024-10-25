import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import MovieItem from '../components/MovieItem';
import { SearchHistoryContext } from '../context/SearchHistoryContext';

const OMDB_API_KEY = '6a2fbb7';

const MovieSearchScreen = () => {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const { addToSearchHistory } = useContext(SearchHistoryContext);
    const navigate = useNavigate();

    const searchMovies = async (text) => {
        setQuery(text);
        if (text.length > 2) {
            try {
                const response = await axios.get(`http://www.omdbapi.com/?s=${text}&apikey=${OMDB_API_KEY}`);
                if (response.data.Search) {
                    setMovies(response.data.Search);
                    addToSearchHistory(text);
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            setMovies([]);
        }
    };

    const handleViewHistory = () => {
        navigate('/history');
    };

    return (
        <div className="">
            <div className="search-container">
            <input
                type="text"
                placeholder="Search for a movie..."
                value={query}
                onChange={(e) => searchMovies(e.target.value)}
                className="search-bar"
            />
            <button className="view-history-button" onClick={handleViewHistory} >
                View Search History
            </button>
            </div>
            <ul className="movie-list">
                {movies.map((movie) => (
                    <li key={movie.imdbID} className="movie-item">
                        <Link to={`/details/${movie.imdbID}`}>
                            <MovieItem title={movie.Title} year={movie.Year} />
                        </Link>
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default MovieSearchScreen;
