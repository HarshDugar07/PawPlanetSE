import React from "react";
import { Dropdown, DropdownDivider, DropdownItem } from "flowbite-react";

const DropDownHover = () => {
  return (
    <div>
      <Dropdown label="Dropdown button">
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Separated link</Dropdown.Item>
      </Dropdown>
    </div>
  );
};

export default DropDownHover;
