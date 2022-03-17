import React from "react";
import { Carousel } from 'react-bootstrap';

function Blockchain() {


    return (

        <div className="blockchain">
            <div className="container">
                <h1>Blockchain Page(Video)</h1>
            </div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/portfolio/CyberRenaissance.gif"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/portfolio/pg.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/NFTempeScreen.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/NFTempeScreen.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>


            <div className="container">
                <h2>
                    Here's some reviews:
                </h2>

            </div>
            <div className="container">
                <a href="/portfolio/webcontent"> And we do content for it</a>
            </div>
            <div className="container">
                <a href="/portfolio/webdevelopment"> And we do web dev for it</a>
            </div>
            <div className="container">
                <a href="../contact">To make an order contact us RIGHT HERE!</a>
            </div>

        </div>

    );
}


export default Blockchain;
