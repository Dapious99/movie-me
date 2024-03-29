import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-orange-400 text-white font-sansSerif py-4 px-12 lg:px-5 md:px-4 sm:px-3 xs:px-2">
      <Link to="/" className="italic text-2xl text-red-700">
        movieMe
      </Link>
    </div>
  );
};

export default Navbar;
