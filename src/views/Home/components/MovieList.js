import React, { useState } from "react";
import Movie from "./Movie";
import { ImCancelCircle } from "react-icons/im";
const MovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };
  return (
    <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:gap-x-2 sm:gap-y-2 xs:grid-cols-1 xs:gap-x-1 xs:gap-y-1 gap-x-4 gap-y-4">
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie)}>
          <Movie movie={movie} />
        </div>
      ))}
      {selectedMovie && (
        <div
          className="fixed inset-0 flex items-center justify-center px-16 bg-black text-blue-700 opacity-95 flex-col gap-6"
          onClick={handleCloseDetails}
        >
          <div className="absolute right-6 top-44">
            <ImCancelCircle
              size={34}
              className="text-blue-700"
              onClick={handleCloseDetails}
            />
          </div>
          <div className="">
            <h2>Title: {selectedMovie.title}</h2>
            <p>Release date: {selectedMovie.release_date}</p>
            <p>Overview: {selectedMovie.overview}</p>
            <p>Popularity: {selectedMovie.popularity}</p>
            <p>Language: {selectedMovie.original_language}</p>
            <p>Can watch: {selectedMovie.video ? "Yes" : "No"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
