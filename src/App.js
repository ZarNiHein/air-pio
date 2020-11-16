import React, { useState } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown, NavItem, NavLink } from 'react-bootstrap';
import { Route, Link, Switch } from 'react-router-dom';
import "./App.css";

import Home from './Component/Home';

function App() {
  return(
    <div className="App" color="black">
  <Navbar className="fixed-top" bg="dark" variant="dark">
    <Navbar.Brand href="/">Air-Po</Navbar.Brand>
    <Nav className="mr-auto"> 
      <NavDropdown title="Dashboard">
        <NavDropdown.Item as={Nav} onClick={()=>{document.getElementById("PM25AQI").scrollIntoView({behavior:'smooth'})}}>PM2.5 AQI
        </NavDropdown.Item>
        <NavDropdown.Item as={Nav} onClick={()=>{document.getElementById("HealthRisk").scrollIntoView({behavior:'smooth'})}}>Hourly Health Risk
        </NavDropdown.Item>
      </NavDropdown>
      <Nav.Link as={Link} onClick={()=>{document.getElementById("AboutUs").scrollIntoView({behavior:'smooth'})}}>About Us</Nav.Link>
      <Nav.Link as={Link} onClick={()=>{document.getElementById("Contact").scrollIntoView({behavior:'smooth'})}}>Contact</Nav.Link>
    </Nav>
    {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form> */}
  </Navbar>
    <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  )
}

export default App;