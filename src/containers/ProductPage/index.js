import React from "react";
import Header from "../../components/Header";
import { Typography, Avatar } from "antd";
import "./style.scss";

const ProductPage = (props) => {
  return (
    <div className="product-page">
      <Header></Header>
      <div className="body mx-auto">
        <div>Breadcrumbs here</div>
        <div className="item-container">
          <Avatar
            className="item-img mr-4"
            shape="square"
            src={props.item.itemImage}
            alt="item image"
          ></Avatar>
          <div className="item-info">
            <Typography.Text className="item-info--name mb-3">
              {props.item.itemName}
            </Typography.Text>
            <br />
            <Typography.Text className="item-info--price m-0" level={3}>
              ${props.item.itemPrice.toLocaleString("en")}
            </Typography.Text>
            <br />
            <Typography.Text className="item-info--description">
              Loại màn hình: Carta HD 6 inch Bộ nhớ 8GB Mật độ điểm ảnh: 300 ppi
              Thời gian sử dụng pin 4 tuần 30ph/ ngày Không bị màn hình chói lóa
              Tích hợp đèn - đọc mà không có mỏi mắt Dễ dàng lật trang và ghi
              chú lên sách
            </Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
