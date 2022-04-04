import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavLinkComponent extends Component {
  render() {
    const { id, title } = this.props;
    return (
      <Nav.Link
        as={Link}
        onClick={() => {
          document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        }}
      >
        {title}
      </Nav.Link>
    );
  }
}
