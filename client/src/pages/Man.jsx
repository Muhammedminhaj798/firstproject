import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Man() {
  const [men, setMen] = useState([]);
  const {data} = useContext(productContext)


  useEffect(() => {
    if (data) {
      setMen(data.filter((man) => man.type === "men"));
    }
  }, [data]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {men.map((item) => (
        <Link  key={item.id} to={`productdetails/${item.id}`}>
        <div
          key={item.id}
          className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            {/* <p className="text-gray-600 mt-2">{item.description}</p> */}
            <div className="flex items-center justify-between mt-4">
              <span className="text-lg font-bold text-gray-800">₹{item.price}</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default Man;
