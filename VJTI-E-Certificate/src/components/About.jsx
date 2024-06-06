import React from "react";
import "../css/About.css";
import { Card, Row, Col } from "react-bootstrap";
import image from '../Images/about.png'
import { Footer } from "./Footer";
export const About = () => {
  return (
    <>
      <div className="company" style={{ marginTop: '100px' }}>
        <div className="img">
          <img src={image} alt="" />
        </div>
        <div className="company-info">
          <span>Welcome to  <span className="our">VJTI E Certificate!</span></span>
          <p>
            <b></b> 

At VJTI E Certificate, we are dedicated to providing students with a seamless and efficient way to obtain their certificates for various clubs and events within our esteemed institution.
<br/>
<br/>
<br/>
<b>Our Mission</b>
<br/>

Our mission is to simplify the certificate acquisition process for students, ensuring that their accomplishments and participation in college clubs and events are duly recognized and documented. We strive to be a one-stop platform that facilitates the retrieval of certificates, allowing students to focus more on their academic and extracurricular pursuits.
<br/>
<br/>
<br/>
          </p>
        </div>
      </div>

      <div className="team"><span>OUR TEAM</span></div>

      <div className="container">
        {/* Individual Card Components */}
        <Row>
          {/* First Row */}
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
        </Row>
        {/* <Row>
        
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
          <Col md={4}>
            <Card />
          </Col>
        </Row> */}
        {/* Add more rows as needed */}
        {/* End of Individual Card Component */}
      </div>
      <Footer/>
    </>
  );
};

export default About;
