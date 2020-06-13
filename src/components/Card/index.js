import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Typography } from "antd";
import "./style.scss";

const Card = (props) => {
  return (
    <Link to="/product">
      <div className="card rounded mb-3">
        <Avatar
          className="card__image m-0 w-100"
          shape="square"
          src={props.item.itemImage}
          alt="item image"
        ></Avatar>
        <div className="p-2">
          <p className="card__name m-0">{props.item.itemName}</p>
          <Typography.Title level={4}>
            ${props.item.itemPrice.toLocaleString("en")}
          </Typography.Title>
        </div>
      </div>
    </Link>
  );
};

export default Card;
