import React, { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { ProductContext } from "../../context";
import "./index.scss";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const { products, setProducts, basket, setBasket } =
    useContext(ProductContext);

  useEffect(() => {
    fetch(`https://northwind.vercel.app/api/products`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToBasket = (item) => {
    if (!basket.includes(item)) {
      setBasket([...basket, item]);
    } else {
      window.alert("you already have this product in your basket");
    }
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Product List</title>
        <meta description="this is product list page" />
      </Helmet>
      <table>
        <thead>
          <th> Product ID </th>
          <th> Product Name </th>
          <th> Unit Price </th>
          <th> Quantity Per Unit </th>
          <th> Phone </th>
          <th> ADD TO CARD </th>
        </thead>

        <tbody>
          {products?.map((products, id) => {
            return (
              <tr key={id}>
                <td>{products.id}</td>
                <td> {products.name}</td>
                <td> {products.unitPrice}</td>
                <td> {products.quantityPerUnit}</td>
                <td>
                  <Link to={`/pages/product-details/${products.id}`}>
                    {" "}
                    Product Detail{" "}
                  </Link>
                </td>
                <td>
                  {" "}
                  <button onClick={() => handleAddToBasket(products)}>
                    {" "}
                    Add to Card{" "}
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
