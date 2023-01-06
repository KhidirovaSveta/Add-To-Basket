import React, { createContext, useState } from "react";

export const ProductContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  const data = {
    products,
    setProducts,
    basket,
    setBasket,
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductsProvider;
