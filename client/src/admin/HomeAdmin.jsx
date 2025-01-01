import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdmProduct from "./AdmProduct";
import Users from "./Users";

function HomeAdmin() {
  const [product, setProduct] = useState("users");
  return (
    <div className="fixed">
      <div className="w-1/3 h-screen bg-slate-500 flex flex-col ">
        <h1 className="text-center text-5xl pt-28">FootFusion</h1>
        
        <Link to="/admin-product">
          <button className="text-center text-4xl py-5">Products</button>
        </Link>
        <Link to={'/admin_users'}>
        <h1 className="text-center text-4xl py-5">Users</h1>
        </Link>
        <h1 className="text-center text-4xl py-5">orders</h1>
        <button>Logout</button>
      </div>
    
    </div>
  );
}

export default HomeAdmin;
