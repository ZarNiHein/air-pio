import React, { Component, createRef, useRef } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Contact from './Contact';
import yangon from '../Images/Dejavu.png';
import yangonStreet from '../Images/yangonStreet.jpg';
import compare from '../Images/compare.png';
import { Image, Nav } from 'react-bootstrap';
import PM25AQI from './Dashboard/PM25AQI';
import HealthRisk from './Dashboard/HealthRisk';


class Home extends Component {
    render(){
        return(
          <div style={{backgroundColor:"white",padding:60,marginTop: 55,marginBottom:55, backgroundImage:`url(${compare})`, backgroundRepeat:'no-repeat', opacity: 0.8, backgroundSize: "contain"}}>
            <>
            <h1>Welcome to "Air-Po"</h1>
            <Nav className="flex-column" style={{width: 500, marginLeft:650,marginTop:100, height: 600}}>
                <h5 style={{alignSelf:"center",paddingLeft:100, marginBottom:20}}>Air-Po aim to solve the air pollution problem around Yangon.By Visualization, we describe "Air Pollution" information before and during COVID-19.</h5>
                <h6 style={{alignSelf:"center",paddingLeft:100, marginBottom:20}} > Click Button to watch the Dashboard.</h6>
                <Nav style={{alignSelf:"center",paddingLeft:100, marginBottom:20}}>
                  <Nav.Link style={{backgroundColor: "lightsalmon",width:150, alignSelf:"flex-end", borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8, margin:15}} onClick={()=>{document.getElementById("PM25AQI").scrollIntoView({behavior:'smooth', block: 'start'})}}>AQI</Nav.Link>
                  <Nav.Link style={{backgroundColor: "lightsalmon",width:150, alignSelf:"flex-end", borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8, margin:15}} onClick={()=>{document.getElementById("HealthRisk").scrollIntoView({behavior:'smooth', block: 'start'})}}>HR</Nav.Link>
                </Nav>
                {/* <Nav.Link style={{backgroundColor: "lightsalmon",width:150, alignSelf:"flex-end", borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8, marginBottom:15}} onClick={()=>{document.getElementById("AboutUs").scrollIntoView({behavior:'smooth', block: 'start'})}}>About Us</Nav.Link>
                <Nav.Link style={{backgroundColor: "lightsalmon",width:150, alignSelf:"flex-end", borderRadius:10, fontWeight:"bold", color:"#383950", opacity:0.8, marginBottom:15}} onClick={()=>{document.getElementById("Contact").scrollIntoView({behavior:'smooth', block: 'start'})}}>Contact</Nav.Link> */}
            </Nav>
            <PM25AQI/>
            <HealthRisk/>
            <AboutUs/>
            <Contact/>
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