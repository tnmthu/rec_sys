import React from "react";
import { Menu } from "antd";
import "./style.scss";

const SideMenu = (props) => {
  return (
    <div className="sideMenu">
      <Menu>
        <Menu.ItemGroup title={props.menuName}>
          {props.subMenuNames.map((subItem) => (
            <Menu.Item>{subItem}</Menu.Item>
          ))}
        </Menu.ItemGroup>
      </Menu>
    </div>
  );
};

export default SideMenu;
