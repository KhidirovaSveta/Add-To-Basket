import React, { useContext } from "react";
import { ProductContext } from "../../context";
import "./index.scss"

const ProductInBasket = () => {
  const { basket, setBasket } = useContext(ProductContext);

  return (
    <div className="container">
      <table>
        <thead>
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
                  <button>remove</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductInBasket;
