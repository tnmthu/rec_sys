import React from "react";
import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import "./style.scss";

const sanPhamHot = {
  sectionName: "SAN PHAM HOT",
  items: [
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
  ],
};
const riengChoBan = {
  sectionName: "RIENG CHO BAN",
  items: [
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage:
        "https://salt.tikicdn.com/cache/w780/ts/product/be/f2/ba/f7cacd4da64139b88acb667612d814ba.jpg",
      itemPrice: 123456,
    },
  ],
};

const Homepage = () => {
  return (
    <div className="Homepage">
      <Header></Header>
      <div className="body mt-4 mx-auto ">
        <CardContainer section={sanPhamHot} />
        <CardContainer section={riengChoBan} />
      </div>
    </div>
  );
};

export default Homepage;