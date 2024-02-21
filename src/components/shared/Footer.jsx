import React from "react";
import { Link } from "react-router-dom";
import { currentYear } from "../../utils";

const Footer = () => {
  return (
    <div className="bg-orange-400 text-white font-sansSerif py-4 px-12 flex justify-between items-center sm:flex-col xs:flex-col lg:px-5 md:px-4 sm:px-3 xs:px-2">
      <Link to="/" className="italic text-2xl text-red-700">
        movieMe
      </Link>
      <p className="text-sm text-center p-4">
        &#169;Kodewarlock {currentYear}. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
