import React from "react";
import { Carousel, Row, Col } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { useEffect } = React;
gsap.registerPlugin(ScrollTrigger);

function WebDevelopment() {

    useEffect(() => {
        gsap.to("#contactBtn", {
            scale: 2,
            duration: 2,
            yoyo: true,
            repeat: Infinity,
            ease: "back.out"
        })
    });

    return (
        <div className="webdevelopment">
            <div className="container">

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
                        <p>Multi language landing page for motivational couch</p>
                    </Carousel.Caption>
                </a>
                </Carousel.Item>

            </Carousel>

            <Row>
                <h3 className="text-center">Click to open website</h3>
            </Row>
            <br />

            <Row className="my-5">
                <Col className="text-center">
                    <a className="btn contactUs" id="contactBtn" href="./Contact" role="button">Contact us!</a>
                </Col>  
            </Row>
            </div>
       
        </div>
    );
}


export default WebDevelopment;
