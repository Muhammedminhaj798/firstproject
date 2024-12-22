import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";

function Kids() {
  const [kids, setKids] = useState([]);
  const { data } = useContext(ProductContext);

  useEffect(() => {
    const filter = data.filter((kidd) => kidd.type === "kid");
    setKids(filter);
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {kids.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <Link key={item.id} to={`productdetails/${item.id}`}>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            {/* <p className="text-gray-600 mt-2">{item.description}</p> */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-gray-800">
                ₹{item.price}
              </span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Kids;
