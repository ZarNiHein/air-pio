import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import logo from "./AIR-PIO.svg";
import "./App.css";

import Home from "./Component/Home";
import NavDropdownItem from "./Small Components/NavDropdownItem";
import NavLinkComponent from "./Small Components/NavLinkComponent";

function App() {
  return (
    <div className="App" color="black">
      <Navbar
        className="fixed-top"
        style={{ textAlign: "start" }}
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          AIR-PIO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="dashNavStyle mr-auto">
            <NavDropdown title="Dashboard">
              <NavDropdownItem id="PM25AQI" title="PM2.5 AQI" />
              <NavDropdownItem id="HealthRisk" title="Hourly Health Risk" />
              <NavDropdownItem id="Trend" title="Trend of PM2.5 AQI" />
              <NavDropdownItem id="Beehive" title="Beehive" />
              <NavDropdownItem id="PM Comparison" title="Daily PM Comparison" />
            </NavDropdown>
            <NavLinkComponent id="Topic" title="Topic" />
            <NavLinkComponent id="AboutUs" title="About Us" />
            <NavLinkComponent id="Contact" title="Contact" />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}

export default App;
