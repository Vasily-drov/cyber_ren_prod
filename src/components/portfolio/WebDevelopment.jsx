import React from "react";
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebCase from "./WebCase"

const { useEffect } = React;
gsap.registerPlugin(ScrollTrigger);

function WebDevelopment() {

    useEffect(() => {

        gsap.fromTo("#contactBtn", {scale:1.5}, {
            scale: 1.8,
            duration: 1.5,
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
            <Row className="my-5">
                    <Col className="col-lg-5 offset-lg-2 col-sm-5 col-5">
                        <h1 className="philosophy shimmer"> OUR CASES</h1>
                    </Col>
            </Row>
            <br />
            <WebCase/>
            <Container>

           

            <Row className="my-3">
                <Col className="text-center col-lg-2 col-4 offset-0 offset-lg-2">
                    <img src="/portfolio/arrow5.ico" className="img-fluid" id="arrow5" alt="..."></img>
                </Col>
               
            </Row>
            <Row>
                <Col className="col-lg-2 offset-0 col-4 offset-lg-2">
                    <p className="text-center ph">Click to open instagram</p>
                </Col>
            </Row>
            
           


            <br />

            <Row className="my-5">
                <Col className="col-lg-6 col-4 offset-2 text-center">
                    <a className="btn contactUs " id="contactBtn" href="https://calendly.com/cyberenaissance/30min" role="button" target="_blank">Book a virtual meeting with us</a>
                </Col>
                <Col className="col-lg-6 col-3 offset-2 text-center">
                    <a className="btn contactUs" id="contactBtn" href="/packages" role="button">See pricing</a>

                </Col>
            </Row>
            </Container>

            
       
        </div>
    );
}


export default WebDevelopment;
