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


class Home extends Component {
    render(){
        return(
          <div style={{backgroundColor:"black",paddingTop:"3%",marginTop: 55, backgroundImage:`url(${DejavuLandingPage})`, backgroundRepeat:'no-repeat', opacity: 0.8, backgroundSize: "contain"}}>
            <>
            <Container>
              <Row>
                <Col><h1 style={{fontSize:"4vw"}}>Welcome to "Air-Po"</h1></Col>
              </Row>
              <Row>
                <Col xs={12} lg={4} className="d-none d-lg-block" style={{height:700}}></Col>
                <Col xs={12} lg={4} style={{height:100}}></Col>
                <Col xs={12} lg={4} style={{justifyContent:"center"}}>
                    <h5 style={{marginTop:100,marginBottom:40}}>Air-Po aim to solve the air pollution problem around Yangon.By Visualization, we describe "Air Pollution" information before and during COVID-19.</h5>
                    <h6 style={{marginBottom:20}}>Click Button to watch the Dashboard.</h6>
                  <Row>
                    <Col><Nav.Link style={{backgroundColor: "lightsalmon",width:150, borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8,marginTop:20}} onClick={()=>{document.getElementById("PM25AQI").scrollIntoView({behavior:'smooth', block: 'start'})}}>AQI</Nav.Link></Col>
                    <Col><Nav.Link style={{backgroundColor: "lightsalmon",width:150, borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8,marginTop:20}} onClick={()=>{document.getElementById("HealthRisk").scrollIntoView({behavior:'smooth', block: 'start'})}}>HR</Nav.Link></Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{marginBottom:50}}>
                <Col>
                  <Topic />
                </Col>
              </Row>
              <Row style={{marginBottom:50}}>
                <Col><PM25AQI/></Col>
              </Row>
              <Row style={{marginBottom:50}}>
                <Col><HealthRisk/></Col>
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
            {/* <Nav className="flex-column" style={{width: "42%", marginLeft:"62%",marginTop:"8%", height: "100vh"}}> */}
                {/* <Nav style={{justifyContent:"center"}} >
                  <h5 style={{ paddingLeft:50,paddingRight:50, marginBottom:40}}>Air-Po aim to solve the air pollution problem around Yangon.By Visualization, we describe "Air Pollution" information before and during COVID-19.</h5>
                  <h6 style={{ paddingLeft:50,paddingRight:50, marginBottom:20}}>Click Button to watch the Dashboard.</h6>
                  <Nav.Link style={{backgroundColor: "lightsalmon",width:150, borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8, margin:15}} onClick={()=>{document.getElementById("PM25AQI").scrollIntoView({behavior:'smooth', block: 'start'})}}>AQI</Nav.Link>
                  <Nav.Link style={{backgroundColor: "lightsalmon",width:150, borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8, margin:15}} onClick={()=>{document.getElementById("HealthRisk").scrollIntoView({behavior:'smooth', block: 'start'})}}>HR</Nav.Link>
                </Nav> */}
                {/*  <Nav.Link style={{backgroundColor: "lightsalmon",width:150, alignSelf:"flex-end", borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8, marginBottom:15}} onClick={()=>{document.getElementById("AboutUs").scrollIntoView({behavior:'smooth', block: 'start'})}}>About Us</Nav.Link>
                <Nav.Link style={{backgroundColor: "lightsalmon",width:150, alignSelf:"flex-end", borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8, marginBottom:15}} onClick={()=>{document.getElementById("Contact").scrollIntoView({behavior:'smooth', block: 'start'})}}>Contact</Nav.Link> */}
            {/* </Nav > */}
            {/* <Nav style= {{display:"flex",flexDirection:"row", justifyContent:"center" ,marginTop:"5%"}}>
            
            
            </Nav> */}
            {/* <div id="Dashboard">
              <p>Air Quality Index</p>
              <div ref={this.ref}></div>
            </div>
            <div id="AboutUs">
                <h2>About Us</h2>
                <p> Air-Po is ggoagij nmogag goag a naopw.ogij aog gja gga ogj go gawg oei.</p>
                <p>Designed by - Barry</p>
                <p>Developed by - Zack and Tt</p>
                <p>Dashboard - Yan Yan</p>
            </div>
            <div id="Contact">
              <h2>Contact</h2>
              <p>yanpaingmech@gmail.com</p>
              <p>pyaephyoesandara@gmail.com</p>
              <p>zarnihein2312@gmail.com</p>
              <p>theinthtethtetaung99@gmail.com</p>
            </div> */}
            </>
            </div>
        )
    }
}

export default Home