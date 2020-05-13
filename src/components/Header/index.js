import React from "react";
import "./style.scss";
import logo_bk from "../../assets/images/logo_bk.png";
import { Input, Typography, Button } from "antd";
import Nav from "./Nav";

const { Search } = Input;

const Header = () => {
  return (
    <div className="header">
      <div className="header__upper">
        <div className="header__upper__brand-container">
          <img className="header__logo" src={logo_bk} alt="logo BK" />
          <Typography.Title level={4} style={{ color: "#fff" }}>
            BK SHOP
          </Typography.Title>
        </div>
        <Search
          placeholder="Search item..."
          size="large"
          onSearch={(value) => console.log(value)}
        />
        <div className="header__upper__btn-container">
          <Button className="header__upper__btn header__upper__btn--login">
            Login
          </Button>
          <Button className="header__upper__btn header__upper__btn--register">
            Register
          </Button>
        </div>
      </div>

      <div className="header__lower">
        <Nav></Nav>
      </div>
    </div>
  );
};

export default Header;
