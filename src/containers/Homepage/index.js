import React, { useState, useEffect } from "react";
import { Modal, Form, Input } from "antd";
import Header from "../../components/Header";
import CardContainer from "../../components/CardContainer";
import "./style.scss";
import * as URL from "../../constants";

const sanPhamHot = [
  {
    name: "May doc sach Kindle",
    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
];
const riengChoBan = [
  {
    name: "May doc sach Kindle",
    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
  {
    name: "May doc sach Kindle",

    price: 123456,
  },
];

function Homepage() {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [homeItems, setHomeItems] = useState({});

  // useEffect(() => {
  //   fetch(URL.homepageItems)
  //     .then((res) => res.json())
  //     .then((data) => setHomeItems(data))
  //     .catch((err) => console.error("Error fetch home items"));
  // }, []);

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
        <CardContainer sectionName="Sản phẩm hot" items={sanPhamHot} />
        {isLogin && (
          <CardContainer sectionName="Dành riêng cho bạn" items={riengChoBan} />
        )}
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
