import React from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import "./style.scss";

const ProductPage = (props) => {
  return (
    <div className="product-page">
      <Header></Header>
      <div className="body mx-auto mt-4">
        <Product />
      </div>
    </div>
  );
};

export default ProductPage;
