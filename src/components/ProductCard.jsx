import React, { useContext } from "react";
import ProductContext from "../context/products/ProductContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(ProductContext);

  const handleAdd = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    toast.success("Item Added In Your Cart!");
  };

  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
      <span>
        <h3>Price : {product.price}</h3>
        <button className="add_cart" onClick={() => handleAdd(product)}>
          Add to cart
        </button>
      </span>
    </div>
  );
};

export default ProductCard;
