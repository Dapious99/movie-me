import React from "react";
import { TbError404Off } from "react-icons/tb";
import { Link } from "react-router-dom";

const Fallback = () => {
  return (
    <div className="flex flex-col gap-3 items-center h-screen justify-center">
      <TbError404Off size={36} className="text-red-800" />

      <p className="text-xl text-center text-[]">
        The page or resource you are requesting is not available.
      </p>
      <Link to="/" className="text-[#0F172A]">
        Go Home
      </Link>
    </div>
  );
};

export default Fallback;
