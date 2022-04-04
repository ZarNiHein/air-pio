import React, { Component } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

export default class NavDropdownItem extends Component {
  render() {
    const { id, title } = this.props;
    return (
      <NavDropdown.Item
        as={Nav}
        onClick={() => {
          document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        }}
      >
        {title}
      </NavDropdown.Item>
    );
  }
}
