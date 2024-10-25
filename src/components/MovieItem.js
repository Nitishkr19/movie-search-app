import React from 'react';

const MovieItem = ({ title, year }) => {
  return (
    <div >
      <span className="movie-title">{title}</span>
      <span className="movie-year">({year})</span>
    </div>
  );
};

export default MovieItem;
