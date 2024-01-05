import React, { useState } from "react";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-4">
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie)}>
          <Movie movie={movie} />
        </div>
      ))}

      {selectedMovie && (
        <div
          className="bg-black opacity-50 text-white"
          onClick={handleCloseDetails}
        >
          <div className="">
            <h2>Title: {selectedMovie.title}</h2>
            <p>Release date: {selectedMovie.release_date}</p>
            <p>Overview: {selectedMovie.overview}</p>
            <p>Popularity: {selectedMovie.popularity}</p>
            <p>Language: {selectedMovie.original_language}</p>
            <p>Can watch: {selectedMovie.video}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
