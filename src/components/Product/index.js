import React from "react";
import { Avatar, Typography } from "antd";
import "./style.scss";

const Product = (props) => {
  return (
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
          {props.item.itemDescription}
        </Typography.Text>
      </div>
    </div>
  );
};

export default Product;
