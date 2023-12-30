import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
// import { Link } from "react-router-dom";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Fetching movies data
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c65746b544aa885476cc5360668dfd99`
      );
      setMovies(response.data.results);
      console.log("Api response", response);
    };

    fetchData();
  }, []);

  return (
    <div className="px-20">
      <h1>
        Welcome to <span className="italic">movieMe</span>
      </h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
