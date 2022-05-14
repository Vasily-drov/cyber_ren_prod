import React from "react";
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WebCase from "./WebCase"

const { useEffect } = React;
gsap.registerPlugin(ScrollTrigger);

function WebDevelopment() {

    useEffect(() => {

        

        ScrollTrigger.matchMedia({
            "(min-width: 1000px)": function() {
                gsap.fromTo("#contactBtn", {scale:1.5}, {
                    scale: 1.8,
                    duration: 1.5,
                    yoyo: true,
                    repeat: Infinity,
                    ease: "slow"
                });
            }
        })


    });

    function myFunc(){
        console.log('executed')
    }

    return (

        <div className="webdevelopment">   


            <Container>
                <Col className="col-lg-8 col-9">
                    <h1 className="philosophy shimmer"> OUR CASES</h1>
                </Col>
                <WebCase/>

                <Row className="my-5">
                    <Col className="text-center col-lg-6 col-12">
                        <a className="btn contactUs col-lg-6 col-12 my-2" id="contactBtn" href="https://calendly.com/cyberenaissance/30min" role="button" target="_blank">Book a vurtual meeting</a>
                    </Col>
                    <Col className="text-center col-lg-6 col-12">
                        <a className="btn contactUs col-lg-6 col-12 my-2" id="contactBtn" href="/packages" role="button">See pricing</a>

                    </Col>
                </Row>
            </Container>

            
       
        </div>
    );
}


export default WebDevelopment;
