import React, { Component } from "react";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import DejavuLandingPage from "../Images/DajaVu_Landing_Page.png";
import { Col, Container, Nav, Row } from "react-bootstrap";
import PM25AQI from "./Dashboard/PM25AQI";
import HealthRisk from "./Dashboard/HealthRisk";

import Topic from "./Topic";
import Beehive from "./Dashboard/Beehive";
import PM_Com from "./Dashboard/PM_Com";
import Trend from "./Dashboard/Trend";
import DatasetsLocation from "./DatasetsLocation";

class Home extends Component {
  render() {
    return (
      <div
        style={{
          position: "relative",
          backgroundColor: "black",
          paddingTop: "3%",
          top: 55,
          backgroundImage: `url(${DejavuLandingPage})`,
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
          backgroundSize: "contain",
        }}
      >
        <Container fluid>
          <Row>
            <Col lg={12}>
              <h1 style={{ fontSize: "4vw" }}>Welcome to "AIR-PIO"</h1>
            </Col>
            <Col
              lg={4}
              className="d-none d-lg-block"
              style={{ height: 600 }}
            ></Col>
            <Col xs={8} sm={8} md={8} lg={4} style={{ height: "18vw" }}></Col>
            <Col xs={4} sm={4} md={4} lg={4} className="w-auto">
              <h1
                style={{
                  marginTop: "10vw",
                  marginBottom: "30vw",
                  fontSize: "2vw",
                }}
              >
                AIR-PIO aim to solve the air pollution problem around Yangon.By
                Visualization, we describe "Air Pollution" information before
                and during COVID-19.
              </h1>
              {/* <Col lg={12} md={0} sm={0}>
                  <p style={{ marginBottom: 20, fontSize: "1vw" }}>
                    Click Button to watch the Dashboard.
                  </p>
                  <div>
                    <Nav className="justify-content-between px-3">
                      <Nav.Link
                        className="NavClick"
                        onClick={() => {
                          document.getElementById("HealthRisk").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                      >
                        <small style={{ fontSize: "1vw" }}>Health Risk</small>
                      </Nav.Link>{" "}
                      <Nav.Link
                        className="NavClick"
                        onClick={() => {
                          document.getElementById("Trend").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                      >
                        <small style={{ fontSize: "1vw" }}>Trend</small>
                      </Nav.Link>{" "}
                      <Nav.Link
                        className="NavClick"
                        onClick={() => {
                          document.getElementById("Beehive").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }}
                      >
                        <small style={{ fontSize: "1vw" }}>Beehive</small>
                      </Nav.Link>
                    </Nav>
                  </div>
                </Col> */}
            </Col>
          </Row>
          <Container>
            <Topic />
            <DatasetsLocation />
            {/* <PM25AQI /> */}
            <HealthRisk />
            <Trend />
            <Beehive />
            {/* <PM_Com /> */}
          </Container>
          <Row style={{ paddingBottom: 20 }}>
            <Col xs={12} md={6}>
              <AboutUs />
            </Col>
            <Col xs={12} md={6}>
              <Contact />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
