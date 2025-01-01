import React, { useContext } from "react";
import { ProductContext } from "../context/Context";
import { Link } from "react-router-dom";

function AdmProduct() {
  const { data } = useContext(ProductContext);

  return (
    <div className="">
      {/* <h1>Product List</h1> */}
      <table border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>No.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Type</th>
            <th>Brand</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id || index}>
              <td>{index + 1}</td>
              <td>
              <Link to={`productdetails/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "50px", height: "50px" }}
                />
                </Link>
              </td>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdmProduct;
