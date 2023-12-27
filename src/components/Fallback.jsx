import React from "react";
// import { TbError404Off } from "react-icons/tb";
import { Link } from "react-router-dom";

const Fallback = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center">
      {/*<TbError404Off size={30} className="text-red-800" />*/}
      <h1 className="lg:text-5xl md:text-4xl text-3xl text-red-800">
        Error 404
      </h1>
      <p className="text-xl text-[#304065]">
        The page or resource you are requesting is not available.
      </p>
      <Link to="/" className="text-[#0F172A]">
        Home
      </Link>
    </div>
  );
};

export default Fallback;
