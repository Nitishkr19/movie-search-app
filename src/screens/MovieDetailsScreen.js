import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const OMDB_API_KEY = '6a2fbb7';

const MovieDetailsScreen = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=${OMDB_API_KEY}`);
        setMovieDetails(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt={movieDetails.Title} className="movie-poster" />
      <p className="movie-year">Year: {movieDetails.Year}</p>
      <p className="movie-details">Plot: {movieDetails.Plot}</p>
      <Link to="/" className="button">Back to Search</Link>
    </div>
  );
};

export default MovieDetailsScreen;
