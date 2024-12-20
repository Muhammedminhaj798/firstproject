import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Navbar() {
  return (
    <div className="bg-yellow-100">
      <div className="bg-slate-400">
        <p className="text-center text-sm md:text-base">Welcome to shopiee</p>
      </div>
      <nav className="flex flex-wrap items-center p-4 md:p-6 bg-zinc-500 justify-between">
        <div className="flex items-center gap-4 md:gap-6">
          <Link>
            <img 
              src=""
              alt="Site Logo"
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
          <Link to="/" className="text-sm md:text-base text-white">Home</Link>
          <Link to="/man" className="px-2 md:px-3 text-sm md:text-base text-white">Mens</Link>
          <Link to="/women" className="px-2 md:px-3 text-sm md:text-base text-white">Women</Link>
          <Link to="/collections" className="px-2 md:px-3 text-sm md:text-base text-white">Collections</Link>
          <Link to="/kids" className="px-2 md:px-3 text-sm md:text-base text-white">Kids</Link>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/contact" className="px-2 md:px-3 text-sm md:text-base text-white">Contact</Link>
          <Link to="/cart" className="flex items-center">
            <FaShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </Link>
          <Link to="/register" className="flex items-center">
            <CgProfile className="w-5 h-5 md:w-6 md:h-6 text-white" />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
