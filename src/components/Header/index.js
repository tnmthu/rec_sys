import React from "react";
import "./style.scss";
import logo_bk from "../../assets/images/logo_bk.png";
import { Input, Typography } from "antd";
import DropdownContainer from "./Dropdown";

const { Search } = Input;

const menuData = [
  {
    name: "Thời trang nữ",
    subMenu: ["Đầm", "Váy", "Áo công sở", "Áo thun", "Quần tây"],
  },
  {
    name: "Thời trang nam",
    subMenu: ["Quần", "Áo sơ mi", "Áo thun", "Áo khoác"],
  },
  {
    name: "Công nghệ",
    subMenu: ["Máy tính", "Thiết bị di động"],
  },
  {
    name: "Đời sống",
    subMenu: ["Trang trí bàn", "Trang trí nhà cửa"],
  },
  {
    name: "Giày dép",
    subMenu: ["Giày nam", "Giày nữ", "Giày thể thao"],
  },
];

function Header(props) {

  return (
    <div className="header">
      <div className="header__upper">
        <div className="header__upper__brand-container">
          <img className="header__logo" src={logo_bk} alt="logo BK" />
          <Typography.Title level={4} style={{ color: "#fff" }} className="m-0">
            BK SHOP
          </Typography.Title>
        </div>
        <Search
          placeholder="Search item..."
          size="large"
          onSearch={(value) => console.log(value)}
        />
        <div className="header__upper__btn-container">
          <>
            <span className="mr-2 text-white font-weight-bold h5">Welcome back!</span>
          </>
        </div>
      </div>

      <div className="header__lower">
        {menuData.map((item) => {
          return (
            <DropdownContainer subMenu={item.subMenu}>
              {item.name}
            </DropdownContainer>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
