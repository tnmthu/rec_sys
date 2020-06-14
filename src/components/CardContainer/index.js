import React, { useState, useEffect } from "react";
import Card from "../Card";
import { Typography, Button } from "antd";
import "./style.scss";

function CardContainer(props) {
  const [currentItems, setCurrentItems] = useState([]);
  const [visibleSeeMore, setVisibleSeeMore] = useState(true);

  useEffect(() => {
    if (props.items) {
      setCurrentItems(props.items.slice(0, 10));
    }
  }, [props.items]);

  const handleSeeMore = () => {
    setCurrentItems(props.items);
    setVisibleSeeMore(false);
  };

  return (
    <div className="mb-4">
      <Typography.Title level={3} className="ml-3 mb-1">
        {props.sectionName}
      </Typography.Title>
      <div className="card-container py-2 d-flex flex-column align-items-center">
        <div className="d-flex flex-wrap card-container-wrapper">
          {currentItems.map((item) => {
            return <Card item={item}></Card>;
          })}
        </div>
        <div className="w-75 mb-2 d-flex">
          {visibleSeeMore && (
            <Button
              onClick={() => handleSeeMore()}
              type="primary"
              shape="round"
              size="large"
              className="btn-container"
            >
              Xem Thêm
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
