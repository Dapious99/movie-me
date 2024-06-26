// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { HiSearch } from "react-icons/hi";
// import axios from "axios";
// import MovieList from "../../views/Home/components/MovieList";

// const Navbar = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchWord, setSearchWord] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       // Fetching movies data
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/discover/movie?api_key=c65746b544aa885476cc5360668dfd99&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
//       );
//       setMovies(response.data.results);
//       console.log("Api response", response);
//     };

//     fetchData();
//   }, [searchWord]);
//   return (
//     <>
//       <div className="bg-orange-400 text-white font-sansSerif py-4 px-12 lg:px-5 md:px-4 sm:px-3 xs:px-2 flex justify-between">
//         <Link to="/" className="italic text-2xl text-red-700">
//           movieMe
//         </Link>
//         <div className="bg-white px-3 py-2 rounded-lg flex items-center">
//           <HiSearch className="text-black" size={20} />
//           <input
//             placeholder="search your movie here"
//             value={searchWord}
//             onChange={(e) => setSearchWord(e.target.value)}
//           />
//         </div>
//       </div>
//       {searchWord && (
//         <div>
//           <MovieList movies={movies} />
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
// import { HiSearch } from "react-icons/hi";
// import axios from "axios";
// import MovieList from "../../views/Home/components/MovieList";
// import debounce from "lodash.debounce"; // Import lodash debounce

// const Navbar = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchWord, setSearchWord] = useState("");
//   const [error, setError] = useState(null);
//   console.log(movies);
//   // Function to fetch movies, either by search query or by default
//   const fetchMovies = async (query) => {
//     try {
//       setError(null); // Clear previous errors
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/${query ? "search" : "discover"}/movie`,
//         {
//           params: {
//             api_key: "c65746b544aa885476cc5360668dfd99",
//             language: "en-US",
//             sort_by: "popularity.desc",
//             include_adult: false,
//             include_video: false,
//             query: query || undefined, // Only include the query parameter if it's a search
//           },
//         }
//       );
//       setMovies(response.data.results); // Update state with fetched movies
//     } catch (err) {
//       console.error("API error", err);
//       setError("Failed to fetch movies. Please try again later."); // Set error state
//     }
//   };

//   // Debounced version of the fetchMovies function to avoid excessive API calls
//   const debouncedFetchMovies = useCallback(debounce(fetchMovies, 500), []);

//   // Effect to fetch movies based on the searchWord
//   useEffect(() => {
//     if (searchWord) {
//       debouncedFetchMovies(searchWord); // Fetch movies based on search input
//     } else {
//       fetchMovies(); // Fetch default popular movies
//     }
//   }, [searchWord, debouncedFetchMovies]);

//   return (
//     <>
//       <div className="bg-orange-400 text-white font-sansSerif py-4 px-12 lg:px-5 md:px-4 sm:px-3 xs:px-2 flex justify-between">
//         <Link to="/" className="italic text-2xl text-red-700">
//           movieMe
//         </Link>
//         <div className="bg-white px-3 py-2 rounded-lg flex items-center">
//           <HiSearch className="text-black" size={20} />
//           <input
//             className="ml-2 text-black"
//             placeholder="Search your movie here"
//             value={searchWord}
//             onChange={(e) => setSearchWord(e.target.value)} // Update searchWord state on input change
//           />
//         </div>
//       </div>
//       {error && (
//         <div className="bg-red-500 text-white p-2 text-center">
//           {error} // Display error message if any
//         </div>
//       )}
//       {searchWord && (
//         <div>
//           <MovieList movies={movies} />
//           {/*Render MovieList component with fetched*/}
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { HiSearch } from "react-icons/hi";
// import axios from "axios";

// const Navbar = () => {
//   const [allMovies, setAllMovies] = useState([]);
//   const [filteredMovies, setFilteredMovies] = useState([]);
//   const [searchWord, setSearchWord] = useState("");
//   const [error, setError] = useState(null);

//   // Function to fetch movies
//   const fetchMovies = async () => {
//     try {
//       setError(null); // Clear previous errors
//       const response = await axios.get(
//         `https://api.themoviedb.org/3/discover/movie`,
//         {
//           params: {
//             api_key: "c65746b544aa885476cc5360668dfd99",
//             language: "en-US",
//             sort_by: "popularity.desc",
//             include_adult: false,
//             include_video: false,
//           },
//         }
//       );
//       setAllMovies(response.data.results); // Store fetched movies
//       setFilteredMovies(response.data.results); // Initialize filtered movies
//     } catch (err) {
//       console.error("API error", err);
//       setError("Failed to fetch movies. Please try again later."); // Set error state
//     }
//   };
//   console.log(filteredMovies);
//   // Effect to fetch movies once when component mounts
//   useEffect(() => {
//     fetchMovies();
//   }, []);

//   // Effect to filter movies based on searchWord
//   useEffect(() => {
//     if (searchWord) {
//       const filtered = allMovies.filter((movie) =>
//         movie.title.toLowerCase().includes(searchWord.toLowerCase())
//       );
//       setFilteredMovies(filtered);
//     } else {
//       setFilteredMovies(allMovies);
//     }
//   }, [searchWord, allMovies]);

//   return (
//     <>
//       <div className="bg-orange-400 text-white font-sansSerif py-4 px-12 lg:px-5 md:px-4 sm:px-3 xs:px-2 flex justify-between">
//         <Link to="/" className="italic text-2xl text-red-700">
//           movieMe
//         </Link>
//         <div className="bg-white px-3 py-2 rounded-lg flex items-center">
//           <HiSearch className="text-black" size={20} />
//           <input
//             className="ml-2 text-black"
//             placeholder="Search your movie here"
//             value={searchWord}
//             onChange={(e) => setSearchWord(e.target.value)} // Update searchWord state on input change
//           />
//         </div>
//       </div>
//       {error && (
//         <div className="bg-red-500 text-white p-2 text-center">{error}</div>
//       )}
//       {searchWord && (
//         <div className="">
//           <h2>Title: {filteredMovies.title}</h2>
//           <p>Release date: {filteredMovies.release_date}</p>
//           <p>Overview: {filteredMovies.overview}</p>
//           <p>Popularity: {filteredMovies.popularity}</p>
//           <p>Language: {filteredMovies.original_language}</p>
//           <p>Can watch: {filteredMovies.video}</p>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiSearch } from "react-icons/hi";
import axios from "axios";

const Navbar = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [error, setError] = useState(null);

  // Function to fetch movies
  const fetchMovies = async () => {
    try {
      setError(null); // Clear previous errors
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie`,
        {
          params: {
            api_key: "c65746b544aa885476cc5360668dfd99",
            language: "en-US",
            sort_by: "popularity.desc",
            include_adult: false,
            include_video: false,
          },
        }
      );
      setAllMovies(response.data.results); // Store fetched movies
      setFilteredMovies(response.data.results); // Initialize filtered movies
    } catch (err) {
      console.error("API error", err);
      setError("Failed to fetch movies. Please try again later."); // Set error state
    }
  };

  // Effect to fetch movies once when component mounts
  useEffect(() => {
    fetchMovies();
  }, []);

  // Effect to filter movies based on searchWord
  useEffect(() => {
    if (searchWord) {
      const filtered = allMovies.filter((movie) =>
        movie.title.toLowerCase().includes(searchWord.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(allMovies);
    }
  }, [searchWord, allMovies]);

  return (
    <>
      <div
        className={`bg-orange-400 text-white font-sansSerif py-4 px-12 lg:px-5 md:px-4 sm:px-3 xs:px-2 flex justify-between`}
      >
        <Link to="/" className="italic text-2xl text-red-700">
          movieMe
        </Link>
        <div className="bg-white px-3 py-2 rounded-lg flex items-center">
          <HiSearch className="text-black" size={20} />
          <input
            className="ml-2 text-black outline-none"
            placeholder="Search your movie here"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)} // Update searchWord state on input change
          />
        </div>
      </div>
      {error && (
        <div className="bg-red-500 text-white p-2 text-center">{error}</div>
      )}
      {searchWord && (
        <div className="p-4 shadow-lg z-40">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="border-b border-gray-200 mb-4 pb-4"
              >
                <h2 className="text-xl font-bold">Title: {movie.title}</h2>
                <p>Release date: {movie.release_date}</p>
                <p>Overview: {movie.overview}</p>
                <p>Popularity: {movie.popularity}</p>
                <p>Language: {movie.original_language}</p>
                <p>Can watch: {movie.video ? "Yes" : "No"}</p>
              </div>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
