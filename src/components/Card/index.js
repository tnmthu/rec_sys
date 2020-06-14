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
    <Link className="card-wrapper" to={`/product/${props.item.name}`}>
      <div className="card rounded mb-3 d-flex flex-column mb-4" onClick={() => handleClickItem()}>
        <div className="card__image__container">
          <img className="card__image m-0" src={cart} alt="item" />
        </div>
        <div className="px-5 mt-3 d-flex flex-column justify-content-between h-100">
          <p className="card__name">{props.item.name}</p>
          <Typography.Title level={4} className="mb-4">
            ${price.toLocaleString("en")}
          </Typography.Title>
        </div>
      </div>
    </Link>
  );
}

export default Card;
