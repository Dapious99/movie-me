import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import axios from "axios";
import MovieList from "../../views/Home/components/MovieList";

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      // Fetching movies data
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=c65746b544aa885476cc5360668dfd99&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
      );
      setMovies(response.data.results);
      console.log("Api response", response);
    };

    fetchData();
  }, [searchWord]);
  return (
    <div className="bg-orange-400 text-white font-sansSerif py-4 px-12 lg:px-5 md:px-4 sm:px-3 xs:px-2 flex justify-between">
      <Link to="/" className="italic text-2xl text-red-700">
        movieMe
      </Link>
      <div>
        <div className="bg-white px-3 rounded-lg">
          <HiSearch />
          <input
            placeholder="search your movie here"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </div>
        <div>
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
