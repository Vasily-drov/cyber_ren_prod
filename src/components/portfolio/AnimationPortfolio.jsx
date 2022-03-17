import React from "react";
import {Carousel} from "react-bootstrap";



function AnimationPortfolio() {


    return (
        <div className="content">
            <div className="container">
                <h1>Content Page</h1>
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
                <h2> <a href="../contact">To make an order contact us RIGHT HERE!</a> </h2>
            </div>

        </div>
    );
}


export default AnimationPortfolio;
