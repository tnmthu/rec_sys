import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
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

function Homepage() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = () => {
    setIsLogin(true);
    setOpenLoginModal(false);
  };

  const handleCancel = () => {
    setOpenLoginModal(false);
  };

  return (
    <div className="Homepage">
      <Header
        setOpenLoginModal={setOpenLoginModal}
        setIsLogin={setIsLogin}
        isLogin={isLogin}
      ></Header>
      <div className="body mt-4 mx-auto ">
        <CardContainer section={sanPhamHot} />
        {isLogin && <CardContainer section={riengChoBan} />}
      </div>
      <Modal
        title="Login"
        visible={openLoginModal}
        onOk={() => handleLogin()}
        onCancel={() => handleCancel()}
      >
        <Form>
          <Form.Item label="User Id">
            <Input></Input>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Homepage;
