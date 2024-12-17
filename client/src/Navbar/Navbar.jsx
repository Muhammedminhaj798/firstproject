import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";



function Navbar() {
  return (
    <div className="bg-yellow-100">
        <div className="bg-amber-500 ">
            <p className="text-center">Welcome to shopiee</p>
        </div>
    <nav className="flex items-center p-6 bg-orange-500 justify-between">
      
      <div className="flex justify-evenly">
      <Link>
          <img 
          src=""
          alt="Site Logo"
          />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/man" className="px-3">Mens</Link>
        <Link to="/women"className="px-3">Women</Link>
        <Link to="/collections"className="px-3">Collections</Link>
        <Link to="/lookbook"className="px-3">LookBook</Link>
      </div>
      <div className="flex">
      <Link to="/contact" className="px-6">Contact</Link>
      <FaShoppingCart className="w-16 h-6 px-4"/>
      <Link to='/register'>
      <CgProfile className="w-16 h-6 px-4"/>
      </Link>
      </div>
    </nav>
    </div>
  );
}

export default Navbar;
