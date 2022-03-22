import React from "react";
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

    return (
        <div className="webdevelopment">
            <Container>
            <h1>Web development cases</h1>
            <Carousel>
                <Carousel.Item>
                    <a href="https://pg-bootstrap.vercel.app/">
                    <img
                        className="d-block w-100"
                        src="/portfolio/pg.gif"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Patti Grabel</h3>
                        <p>Artist's personal website</p>
                    </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://vr-v.herokuapp.com/room.html">
                    <img
                        className="d-block w-100"
                        src="/portfolio/nftemple.gif"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>NFTemple</h3>
                        <p>Virtual 3D gallery</p>
                    </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="http://persephone.pythonanywhere.com/">
                    <img
                        className="d-block w-100"
                        src="/portfolio/uu.gif"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Universal University</h3>
                        <p>Educational social media</p>
                    </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item> <a href="https://canibeyourfriend.com/">
                    <img
                        className="d-block w-100"
                        src="/portfolio/can.gif"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Can I be your friend</h3>
                        <p>Multi-language landing page</p>
                    </Carousel.Caption>
                </a>
                </Carousel.Item>

            </Carousel>

            <Row className="my-3">
                <Col className="text-center mb-3">
                    <img src="/portfolio/arrow5.ico" className="img-fluid" id="arrow5" alt="..."></img>
                 </Col>
            </Row>

            <Row>
                <h3 className="text-center">Click to open website</h3>
            </Row>
            <br />

            <Row className="my-5">
                <Col className="text-center">
                    <a className="btn contactUs" id="contactBtn" href="./Contact" role="button">Contact us!</a>
                </Col>  
            </Row>
            </Container>
       
        </div>
    );
}


export default WebDevelopment;
