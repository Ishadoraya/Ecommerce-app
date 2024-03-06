import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../context/products/ProductContext";

const Navbar = () => {
  const { cartItems } = useContext(ProductContext);

  return (
    <nav>
      <Link to={"/"}>
        <h1 className="logo">Shoppodiction</h1>
      </Link>
      <ul className="nav-links" >
        <Link to={"/electronics"}>
          <li className="category">Electronics</li>
        </Link>
        <Link to={"/jewelery"}>
          <li className="category">Jewelery</li>
        </Link>
        <Link to={"/men's clothing"}>
          <li className="category">MensClothing</li>
        </Link>
        <Link to={"/women's clothing"}>
          <li className="category"> WomenClothing</li>
        </Link>
        <Link to={"/cart"}>
          <li>
            <button className="cart">CART ({cartItems.length})</button>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
