import React, { useContext } from "react";
import ProductContext from "../context/products/ProductContext";
import { toast } from "react-toastify";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(ProductContext);

  const handleRemove = (id) => {
    dispatch({
      type: "REMOVE_CART",
      payload: id,
    });

    toast.error("Item Removed");
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt="" />
      <span>
        <h1>{item.title}</h1>
        <h3>Rate : ${item.price}</h3>
        <h3>Qty : 1</h3>
      </span>
      <button className="remove-btn" onClick={() => handleRemove(item.id)}>
        Remove Item
      </button>
    </div>
  );
};

export default CartItem;
