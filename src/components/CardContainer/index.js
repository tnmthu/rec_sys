import React from "react";
import Card from "../Card";

const card = {
  itemName: "May doc sach Kindle",
  itemImage:
    "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
  itemPrice: 123456,
};

const CardContainer = () => {
  return <Card item={card}></Card>;
};

export default CardContainer;
