import React, { useContext, useEffect } from "react";
import ProductContext from "../context/products/ProductContext";
import ProductCard from "../components/ProductCard";
import { fetchCategoryProducts } from "../context/products/ProductAction";

const WomensClothing = () => {
  const { products, dispatch } = useContext(ProductContext);

  const getWomensClothing = async (category) => {
    const data = await fetchCategoryProducts(category);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    getWomensClothing("women's clothing");
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
      <h1 className="all-products-title">Womens Clothing</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default WomensClothing;
