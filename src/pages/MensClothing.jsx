import React, { useContext, useEffect } from "react";
import ProductContext from "../context/products/ProductContext";
import ProductCard from "../components/ProductCard";
import { fetchCategoryProducts } from "../context/products/ProductAction";

const MensClothing= () => {
  const { products, dispatch } = useContext(ProductContext);

  const getMensClothing = async (category) => {
    const data = await fetchCategoryProducts(category);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    getMensClothing("men's clothing ");
  });

  if (!products) {
    return (
      <div className="container">
        <h1 className="all-products-title">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="all-products-title">Mens Clothing </h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MensClothing;
