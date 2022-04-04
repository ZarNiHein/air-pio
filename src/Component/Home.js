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
          backgroundColor: "black",
          paddingTop: "3%",
          marginTop: 55,
          backgroundImage: `url(${DejavuLandingPage})`,
          backgroundRepeat: "no-repeat",
          opacity: 0.8,
          backgroundSize: "contain",
        }}
      >
        <Container fluid="md">
          <Row>
            <Col>
              <h1 style={{ fontSize: "4vw" }}>Welcome to "AIR-PIO"</h1>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-none d-lg-block"
              style={{ height: 700 }}
            ></Col>
            <Col xs={12} md={6} lg={4} style={{ height: "18vh" }}></Col>
            <Col
              xs={12}
              md={6}
              lg={4}
              className="justify-content-md-center w-auto"
            >
              <Row>
                <Col>
                  <h5 style={{ marginTop: "10vh", marginBottom: 40 }}>
                    AIR-PIO aim to solve the air pollution problem around
                    Yangon.By Visualization, we describe "Air Pollution"
                    information before and during COVID-19.
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6 style={{ marginBottom: 20 }}>
                    Click Button to watch the Dashboard.
                  </h6>
                </Col>
              </Row>
              <Row style={{ justifyContent: "center", alignItems: "center" }}>
                <Col xs={12} md={6}>
                  <Nav className="justify-content-center">
                    <Nav.Link
                      id="NavClick"
                      onClick={() => {
                        document.getElementById("PM25AQI").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                    >
                      AQI
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col xs={12} md={6}>
                  <Nav className="justify-content-center">
                    <Nav.Link
                      id="NavClick"
                      onClick={() => {
                        document.getElementById("HealthRisk").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                    >
                      Health Risk
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col xs={12} md={6}>
                  <Nav className="justify-content-center">
                    <Nav.Link
                      id="NavClick"
                      onClick={() => {
                        document.getElementById("Trend").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                    >
                      Trend
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col xs={12} md={6}>
                  <Nav className="justify-content-center">
                    <Nav.Link
                      id="NavClick"
                      onClick={() => {
                        document.getElementById("Beehive").scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                    >
                      Beehive
                    </Nav.Link>
                  </Nav>
                </Col>
                <Col md={12}>
                  <Nav className="justify-content-center">
                    <Nav.Link
                      id="NavClick"
                      style={{ width: 160 }}
                      onClick={() => {
                        document
                          .getElementById("PM Comparison")
                          .scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                    >
                      PM Comparison
                    </Nav.Link>
                  </Nav>
                </Col>
              </Row>
            </Col>
          </Row>
          <Container>
            <Topic />
            <DatasetsLocation />
            <PM25AQI />
            <HealthRisk />
            <Trend />
            <Beehive />
            <PM_Com />
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
