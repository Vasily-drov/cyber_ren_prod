import React from "react";
import { Carousel } from 'react-bootstrap';


function WebDevelopment() {

    return (
        <div className="webdevelopment">
            <div className="container">
                <h1>WEB DEV PAGE</h1>
            </div>
            <Carousel>
                <Carousel.Item>
                    <a href="https://pg-bootstrap.vercel.app/">
                    <img
                        className="d-block w-100"
                        src="/portfolio/pg.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Artist Patti Grabel</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="https://vr-v.herokuapp.com/room.html">
                    <img
                        className="d-block w-100"
                        src="/NFTempeScreen.png"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Virtual Gallery</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href="http://persephone.pythonanywhere.com/">
                    <img
                        className="d-block w-100"
                        src="/portfolio/UniversalUniversity.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Universal Univercity</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </a>
                </Carousel.Item>
                <Carousel.Item> <a href="https://canibeyourfriend.com/">
                    <img
                        className="d-block w-100"
                        src="/portfolio/friend.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Can I be your friend</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </a>
                </Carousel.Item>

            </Carousel>

            <div className="container">
                <h2> <a href="../contact">To make an order contact us RIGHT HERE!</a> </h2>
            </div>





        </div>
    );
}


export default WebDevelopment;
