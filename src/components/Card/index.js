import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import "./style.scss";
import * as URL from "../../constants";
import cart from "../../assets/images/cart.png";

function Card(props) {
  const price = 10000000;

  const handleClickItem = () => {
    fetch(URL.postUserClick, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product_id: props.item.product_id }),
    });
  };

  //
  return (
    <Link to={`/product/${props.item.name}`}>
      <div className="card rounded mb-3" onClick={() => handleClickItem()}>
        <div className="card__image__container">
          <img className="card__image m-0 w-100" src={cart} alt="item" />
        </div>
        <div className="p-2">
          <p className="card__name m-0">{props.item.name}</p>
          <Typography.Title level={4}>
            ${price.toLocaleString("en")}
          </Typography.Title>
        </div>
      </div>
    </Link>
  );
}

export default Card;
