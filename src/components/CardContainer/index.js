import React from "react";
import Card from "../Card";
import { Typography, Button } from "antd";
import "./style.scss";

const CardContainer = (props) => {
  return (
    <div className="mb-4">
      <Typography.Title level={3} className="ml-3 mb-1">
        {props.section.sectionName}
      </Typography.Title>
      <div className="card-container py-2">
        <div className="items d-flex flex-wrap justify-content-around">
          {props.section.items.map((item) => {
            return <Card item={item}></Card>;
          })}
        </div>
        <div className="w-100 mb-2 d-flex justify-content-center">
          <Button type="primary" shape="round" size="large">
            Xem Them
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
