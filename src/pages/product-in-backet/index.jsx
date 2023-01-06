import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { ProductContext } from "../../context";
import "./index.scss";

const ProductInBasket = () => {
  const { basket, setBasket } = useContext(ProductContext);

  const handleRemove = (product) => {
    setBasket(basket.filter((q) => q !== product));
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product Basket</title>
        <meta description="this is product basket page" />
      </Helmet>
      <table>
        <thead className="product-basket">
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>unitPrice</th>
            <th>quantityPerUnit</th>
            <th> Remove from card </th>
          </tr>
        </thead>
        <tbody>
          {basket?.map((basket, id) => {
            return (
              <tr key={id}>
                <td>{basket.id}</td>
                <td>{basket.name}</td>
                <td>{basket.unitPrice}</td>
                <td>{basket.quantityPerUnit}</td>
                <td>
                  <button onClick={() => handleRemove(basket)}>remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button className="btn" onClick={() => setBasket([])}>
        {" "}
        Empty{" "}
      </button>
    </div>
  );
};

export default ProductInBasket;
