import React, { useContext, useEffect } from "react";
import { fetchCategoryProducts } from "../context/products/ProductAction";
import ProductContext from "../context/products/ProductContext";
import ProductCard from "../components/ProductCard";

const Jwellery = () => {
  const { products, dispatch } = useContext(ProductContext);

  const getJwellery = async (category) => {
    const data = await fetchCategoryProducts(category);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    getJwellery("jewelery");
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
      <h1 className="all-products-title">Jwellery</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Jwellery;
