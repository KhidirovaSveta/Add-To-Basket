import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <div className="heade">
      <div className="container">
        <div className="header">
          <h1>Products</h1>

          <ul>
            <li>
              <NavLink to={"../pages/home"}> Home </NavLink>
            </li>
            <li>
              <NavLink to={"../pages/product-list"}> Product List</NavLink>
            </li>
            <li>
              <NavLink to={"../pages/product-in-backet"}>
                {" "}
                Product In Basket{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
