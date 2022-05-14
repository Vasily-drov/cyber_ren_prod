import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Col, Container, Row} from "react-bootstrap";

const { useEffect } = React;

gsap.registerPlugin(ScrollTrigger);


function About() {

    useEffect(() => {

        ScrollTrigger.matchMedia({

            "(min-width: 800px)": function() {
                
                gsap.fromTo("#v_b", {x:0, y:0}, {
                    x: -150,
                    y: 100,
                    duration: 3,
                    yoyo: true,
                    repeat: Infinity,
                    ease: "sine.out"
                })
            },

            "(max-width: 799px)": function() {
                
                gsap.fromTo("#v_b", {x:50, y:-50}, {
                    x: -50,
                    y: 0,
                    duration: 3,
                    yoyo: true,
                    repeat: Infinity,
                    ease: "sine.out"
                })
            }
        })
      });

    return (
        <div className="about">
            <Container>
                
                <Row>
                    <Col className="col-lg-6 offset-lg-4 col-8 offset-4">
                        <h1 className="philosophy shimmer"> WE ARE...</h1>
                    </Col>
                </Row>
                
                
                <Row>
                    <Col classNameName="col-lg-12">


                        <p className="fs-3 my-3 ph lh-sm"> Happy to be your representative in a thriving digital world! Our Independent Development studio is based in Miami USA.
                            Constant adaptation of modern innovations in Web development helps us achieve contemporary quality and security of a product delivered in a timely manner. <a href="portfolio/webdevelopment" className="text-reset fs-3 contactUsBlue"> Let our happy clients and work portfolio speak for us.</a>
                        </p>


                        <p className="fs-3 my-3 ph lh-sm">  We face hard tasks with courage, allowing us to provide a wide range of different <a href="/packages" className="text-reset fs-3 contactUsBlue">services</a> for any of your Web needs.
                            We can cover everything from simple tasks to 3D animated experiences, from a basic landing page to a fully equipped Web 3.0 store.
                            Our flexibility and work attitude are based on personal customer relationships.
                            </p>
                        <p className="fs-2 my-3 ph fw-bold">You will receive the best price-quality result from us.</p>

                    </Col>
                </Row>
                <Row>
                    <Col className="col-lg-4 col-0">
                        <img id="v_b"src="/about/v_b.png" className="img-fluid" alt="..."></img>
                    </Col>
                    <Col className="col-lg-6 col-8">
                        <h1 className="philosophy shimmer"> PHILOSOPHY</h1>
                        <h1 className="philosophy shimmer" id="cyber"> OF CYBER</h1>
                        <h1 className="philosophy shimmer" id="renaissance"> RENAISSANCE</h1>
                    </Col>
                    
                </Row>
                <Row>
                    <Col className="col-lg-11">
                        <p className="fs-3 my-3 ph lh-sm">
                            The Renaissance itself wasn’t only about brilliant artists and philosophers.
                            It was also about philanthropists and benefactors who supported all these geniuses and together were making a difference in the world.
                            There’s no shortage of money to do the sorts of things they did but what’s holding us back today is a shortage of vision.
                            The Renaissance would never be remembered if it’s leading members had simply made piles of cash.
                            No one cares about that for any length of time. We believe we should try to generate a cyber renaissance in our own societies.

                        </p>
                        <p className="fs-3 my-3 ph fw-bold ">We believe we should try to generate a cyber renaissance in our own societies. </p>
                        <br/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}


export default About;
