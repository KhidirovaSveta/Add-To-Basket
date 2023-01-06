import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./index.scss";

const ProductDetails = () => {
  const [productDetails, setproductDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://northwind.vercel.app/api/products/${id}`)
      .then((resp) => resp.json())
      .then((data) => setproductDetails(data));
  }, []);

  return (
    <div className="container">
      <div className="data">
        <div className="info">
        <p> {productDetails.name}</p>
          <p> ID: {productDetails.id}</p>
          <p> Unit price: {productDetails.unitPrice}</p>
          <p> Quantity per unit: {productDetails.quantityPerUnit}</p>
          <p> Units in stock: {productDetails.unitsInStock}</p>
          <p> Units on order: {productDetails.unitsOnOrder}</p>

          <button>
            {" "}
            <Link to={"/pages/product-list"}> Go back </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
