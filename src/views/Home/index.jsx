import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
// import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      // Fetching movies data
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=c65746b544aa885476cc5360668dfd99&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}`
      );
      setMovies(response.data.results);
      console.log("Api response", response);
    };

    fetchData();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1)); // Ensure page is not less than 1
  };

  return (
    <div className="px-20">
      <h1>
        Welcome to <span className="italic">movieMe</span>
      </h1>
      <MovieList movies={movies} />
      <div className="flex gap-6 justify-center pt-6 items-center">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className=""
        >
          <FaArrowCircleLeft size={30} />
        </button>
        <span>{currentPage}</span>
        <button onClick={handleNextPage}>
          <FaArrowCircleRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Home;
