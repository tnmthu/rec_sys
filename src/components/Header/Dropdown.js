import React from "react";
import { Menu, Dropdown } from "antd";

const DropdownContainer = (props) => {
  const dropdownMenu = (
    <Menu>
      {props.subMenu.map((item) => {
        return (
          <Menu.Item>
            <a>{item}</a>
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
