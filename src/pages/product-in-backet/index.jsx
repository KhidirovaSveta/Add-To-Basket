import React, { useContext } from "react";
import { ProductContext } from "../../context";
import "./index.scss"

const ProductInBasket = () => {
  const { basket, setBasket } = useContext(ProductContext);


  const handleRemove = (product) => {
    setBasket(basket.filter(q => q !== product))
  }

  return (
    <div className="container">
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
      <button className="btn" onClick={() => setBasket([])}> Empty </button>
    </div>
  );
};

export default ProductInBasket;
