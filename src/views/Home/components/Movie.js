import React from "react";

const Movie = ({ movie }) => {
  return (
    <div className="text-blue-700">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="Movie poster"
        className="w-80 h-64 mb-2"
      />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default Movie;
