import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "antd";

const DropdownContainer = (props) => {
  const dropdownMenu = (
    <Menu>
      {props.subMenu.map((item) => {
        return (
          <Menu.Item>
            <Link to="#">{item}</Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Dropdown
      className="dropdown"
      overlay={dropdownMenu}
      placement="bottomRight"
    >
      <span>{props.children}</span>
    </Dropdown>
  );
};

export default DropdownContainer;
