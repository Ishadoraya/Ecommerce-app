import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import { ProductProvider } from "./context/products/ProductContext";
import Electronics from "./pages/Electronics";
import Jwellery from "./pages/Jwellery";
import WomensClothing from "./pages/WomensClothing";
import MensClothing from "./pages/MensClothing";

const App = () => {
  return (
    <Router>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jwellery />} />
          <Route path="/men's clothing" element={<MensClothing/>} />
          <Route path="/women's clothing" element={<WomensClothing/>} />
        </Routes>
        <ToastContainer />
        <Footer />
      </ProductProvider>
    </Router>
  );
};

export default App;
