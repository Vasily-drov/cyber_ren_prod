import React from "react";
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebCase from "./WebCase"

const { useEffect } = React;
gsap.registerPlugin(ScrollTrigger);

function WebDevelopment() {

    useEffect(() => {
        gsap.to("#contactBtn", {
            scale: 1.5,
            duration: 2,
            yoyo: true,
            repeat: Infinity,
            ease: "slow"
        });

        gsap.to("#arrow5", {
            y:10,
            duration: 0.8,
            yoyo: true,
            repeat: Infinity,
            ease: "slow"
        });

    });

    function myFunc(){
        console.log('executed')
    }

    return (

        <div className="webdevelopment">
<WebCase/>
            <Container>


            <br />

            <Row className="my-5">
                <Col className="text-center">
                    <a className="btn contactUs" id="contactBtn" href="https://calendly.com/cyberenaissance/30min" role="button" target="_blank">Book a virtual meeting</a>
                </Col>
                <Col>
                    <a className="btn contactUs" id="contactBtn" href="/packages" role="button">  <h5>Compare Packages & Make an Order</h5></a>

                </Col>
            </Row>
            </Container>

            <Row className="my-3">
                <Col className="text-center mb-3">
                    <img src="/portfolio/arrow5.ico" className="img-fluid" id="arrow5" alt="..."></img>
                </Col>
            </Row>

            <Row>
                <h3 className="text-center">Click to open website</h3>
            </Row>
       
        </div>
    );
}


export default WebDevelopment;
