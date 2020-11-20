import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, NavItem, NavLink } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import "./App.css";

import Home from './Component/Home';

function App() {
  return(
    <div className="App" color="black">
  <Navbar className="fixed-top" style={{textAlign:"start"}} collapseOnSelect expand="lg"  bg="dark" variant="dark">
    <Navbar.Brand  href="/">AIR-PIO</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto"> 
      <NavDropdown title="Dashboard">
        <NavDropdown.Item as={Nav} onClick={()=>{document.getElementById("PM25AQI").scrollIntoView({behavior:'smooth'})}}>PM2.5 AQI
        </NavDropdown.Item>
        <NavDropdown.Item as={Nav} onClick={()=>{document.getElementById("HealthRisk").scrollIntoView({behavior:'smooth'})}}>Hourly Health Risk
        </NavDropdown.Item>
        <NavDropdown.Item as={Nav} onClick={()=>{document.getElementById("Trend").scrollIntoView({behavior:'smooth'})}}>Trend of PM2.5 AQI
        </NavDropdown.Item>
        <NavDropdown.Item as={Nav} onClick={()=>{document.getElementById("Beehive").scrollIntoView({behavior:'smooth'})}}>Beehive
        </NavDropdown.Item>
        <NavDropdown.Item as={Nav} onClick={()=>{document.getElementById("PM Comparison").scrollIntoView({behavior:'smooth'})}}>Daily PM Comparison
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} onClick={()=>{document.getElementById("Topic").scrollIntoView({behavior:'smooth'})}}>Topic</Nav.Link>
      <Nav.Link as={Link} onClick={()=>{document.getElementById("AboutUs").scrollIntoView({behavior:'smooth'})}}>About Us</Nav.Link>
      <Nav.Link as={Link} onClick={()=>{document.getElementById("Contact").scrollIntoView({behavior:'smooth'})}}>Contact</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
    <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  )
}

export default App;