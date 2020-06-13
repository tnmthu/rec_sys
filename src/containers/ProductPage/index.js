import React from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import "./style.scss";
import cart from "../../assets/images/cart.png";

const tmp = {
  itemName:
    "Máy đọc sách Kindle PaperWhite Gen 4 (10th) - Bản 8GB 2019 - Hàng chính hãng",
  itemImage: cart,
  itemPrice: 123456,
  itemDescription:
    "Loại màn hình: Carta HD 6 inch Bộ nhớ 8GB Mật độ điểm ảnh: 300 ppi. Thời gian sử dụng pin 4 tuần 30ph/ ngày Không bị màn hình chói lóa. Tích hợp đèn - đọc mà không có mỏi mắt Dễ dàng lật trang và ghi chú lên sách",
};

const ProductPage = (props) => {
  return (
    <div className="product-page">
      <Header></Header>
      <div className="body mx-auto">
        <Product item={tmp}></Product>
      </div>
    </div>
  );
};

export default ProductPage;
