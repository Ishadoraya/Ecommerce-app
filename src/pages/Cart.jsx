import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import ProductContext from "../context/products/ProductContext";

const Cart = () => {
  const { cartItems } = useContext(ProductContext);

  const total = cartItems.reduce((p, c) => {
    return p + c.price;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="all-products-title">No Items In Your Cart!!</h1>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className="bill-section">
        <h1>
          Total Amount : <br />
          <br />${total}
        </h1>
        <button className="pay-btn">Pay Now</button>
      </div>
    </div>
  );
};

export default Cart;
