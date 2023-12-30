import React from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-4">
      {movies.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          <Movie movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
