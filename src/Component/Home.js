import React, { Component, createRef, useRef } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Contact from './Contact';
import DejavuLandingPage from '../Images/DajaVu_Landing_Page.png';
import yangon from '../Images/Dejavu.png';
import yangonStreet from '../Images/yangonStreet.jpg';
import compare from '../Images/compare.png';
import { Col, Container, Image, Nav, Row } from 'react-bootstrap';
import PM25AQI from './Dashboard/PM25AQI';
import HealthRisk from './Dashboard/HealthRisk';

import Topic from './Topic';
import Clustering from './Dashboard/Clustering';
import Beehive from './Dashboard/Beehive';
import Humidity from './Dashboard/Humidity';


class Home extends Component {
    render(){
        return(
          <div style={{backgroundColor:"black",paddingTop:"3%",marginTop: 55, backgroundImage:`url(${DejavuLandingPage})`, backgroundRepeat:'no-repeat', opacity: 0.8, backgroundSize: "contain"}}>
            <>
            <Container>
              <Row>
                <Col><h1 style={{fontSize:"4vw", color:"#ffcdba"}}>Welcome to "Air-Po"</h1></Col>
              </Row>
              <Row> 
                <Col xs={12} lg={4} className="d-none d-lg-block" style={{height:700}}></Col>
                <Col xs={12} lg={4} style={{height:100}}></Col>
                <Col xs={12} lg={4} style={{justifyContent:"center"}}>
                    <Row>
                      <Col>
                      <h5 style={{marginTop:100,marginBottom:40}}>Air-Po aim to solve the air pollution problem around Yangon.By Visualization, we describe "Air Pollution" information before and during COVID-19.</h5>
                    </Col>
                    </Row>
                  <Row>
                    <Col>
                    <h6 style={{marginBottom:20}}>Click Button to watch the Dashboard.</h6>
                    </Col>
                  </Row>
                  <Row style={{justifyContent:"center", alignItems:"center"}}>
                    <Col xs={6} md={4} style={{marginLeft:1,marginRight:1}}><Nav.Link id="NavClick" onClick={()=>{document.getElementById("HealthRisk").scrollIntoView({behavior:'smooth', block: 'start'})}}>AQI</Nav.Link></Col>
                    <Col xs={6} md={4} style={{marginLeft:1,marginRight:1}}><Nav.Link id="NavClick" onClick={()=>{document.getElementById("HealthRisk").scrollIntoView({behavior:'smooth', block: 'start'})}}>Health Risk</Nav.Link></Col>
                    <Col xs={6} md={4} style={{marginLeft:1,marginRight:1}}><Nav.Link id="NavClick" onClick={()=>{document.getElementById("Clustering").scrollIntoView({behavior:'smooth', block: 'start'})}}>Clustering</Nav.Link></Col>
                    <Col xs={6} md={4} style={{marginLeft:1,marginRight:1}}><Nav.Link id="NavClick" onClick={()=>{document.getElementById("Humidity").scrollIntoView({behavior:'smooth', block: 'start'})}}>Humidity</Nav.Link></Col>
                    <Col xs={6} md={4} style={{marginLeft:1,marginRight:1}}><Nav.Link id="NavClick" onClick={()=>{document.getElementById("Beehive").scrollIntoView({behavior:'smooth', block: 'start'})}}>Beehive (Max. Risk Factor)</Nav.Link></Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{marginBottom:50}}>
                <Col>
                  <Topic/>
                </Col>
              </Row>
              <Row style={{marginBottom:50}}>
                <Col><PM25AQI/></Col>
              </Row>
              <Row style={{marginBottom:50}}>
                <Col><HealthRisk/></Col>
              </Row>
              <Row style={{marginBottom:50}}>
                <Col><Clustering/></Col>
              </Row>
              <Row style={{marginBottom:50}}>
                <Col><Beehive/></Col>
              </Row>
              <Row style={{marginBottom:50}}>
                <Col><Humidity/></Col>
              </Row>
              <Row style={{paddingBottom:20}} >
                <Col xs={12} md={6}>
                  <AboutUs/>
                </Col>
                <Col xs={12} md={6}>
                  <Contact/>
                </Col>
              </Row>
            </Container>
            </>
            </div>
        )
    }
}

export default Home