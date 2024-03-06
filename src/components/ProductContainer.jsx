import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../context/products/ProductContext";
import { fetchProducts } from "../context/products/ProductAction";

const ProductContainer = () => {
  const { products, dispatch } = useContext(ProductContext);

  const getProducts = async () => {
    const data = await fetchProducts();

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (!products) {
    return (
      <div className="container">
        <h1 className="all-products-title">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="all-products-title">All Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
