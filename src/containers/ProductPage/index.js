import React from "react";
import Header from "../../components/Header";
import SideMenu from "../../components/SideMenu";
import Product from "../../components/Product";
import "./style.scss";

const sideMenuData = {};

const ProductPage = (props) => {
  return (
    <div className="product-page">
      <Header></Header>
      <div className="body mx-auto">
        <div>Breadcrumbs here</div>
        <div className="content-containter">
          <SideMenu></SideMenu>
        </div>
        <Product></Product>
      </div>
    </div>
  );
};

export default ProductPage;
