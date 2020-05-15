import React from "react";
import { Avatar, Typography } from "antd";
import "./style.scss";

const Card = (props) => {
  console.log({ props });
  return (
    <div className="card">
      <Avatar
        className="card__image"
        shape="square"
        src={props.item.itemImage}
        alt="item image"
      ></Avatar>
      <p className="card__name">{props.item.itemName}</p>
      <Typography.Title level={4}>${props.item.itemPrice}</Typography.Title>
    </div>
  );
};

export default Card;
