import React, { useState } from "react";
import { Modal, Form, Input } from "antd";
import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import "./style.scss";
import cart from "../../assets/images/cart.png";

const sanPhamHot = {
  sectionName: "SAN PHAM HOT",
  items: [
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
  ],
};
const riengChoBan = {
  sectionName: "RIENG CHO BAN",
  items: [
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
      itemPrice: 123456,
    },
    {
      itemName: "May doc sach Kindle",
      itemImage: cart,
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
