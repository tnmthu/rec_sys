import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import "./style.scss";
import cart from "../../assets/images/cart.png";

const Product = (props) => {
  const { name } = useParams();
  const price = 10000000;
  const description =
    "This should be the descriptively descriptive description of the currently viewed product";

  return (
    <div className="item-container">
      <img className="item-img mr-4" src={cart} alt="item" />
      <div className="item-info">
        <Typography.Text className="item-info--name mb-3">
          {name}
        </Typography.Text>
        <br />
        <Typography.Text className="item-info--price m-0" level={3}>
          ${price.toLocaleString("en")}
        </Typography.Text>
        <br />
        <Typography.Text className="item-info--description">
          {description}
        </Typography.Text>
      </div>
    </div>
  );
};

export default Product;
