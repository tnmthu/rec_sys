import React from "react";
import { Avatar, Typography } from "antd";
import "./style.scss";

const Card = (props) => {
  console.log({ props });
  return (
    <div className="card rounded mb-3">
      <Avatar
        className="card__image m-0 w-100"
        shape="square"
        src={props.item.itemImage}
        alt="item image"
      ></Avatar>
      <div className="p-2">
        <p className="card__name m-0">{props.item.itemName}</p>
        <Typography.Title level={4}>${props.item.itemPrice}</Typography.Title>
      </div>
    </div>
  );
};

export default Card;