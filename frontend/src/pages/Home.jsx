import React from "react";
import Product from "../features/Product/Product";
import ProductDetails from "./ProductDetails";
function Home() {
  return (
    <div>
      <ProductDetails />
      <Product />
    </div>
  );
}

export default Home;
