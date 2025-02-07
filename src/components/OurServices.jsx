import {useEffect, React, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Col, Row, Container} from "react-bootstrap";

gsap.registerPlugin(ScrollTrigger);

function OurServices() {

    const scrollToContact = () => {

        window.scrollTo({
            top: 100050,
            behavior: 'smooth'
        });

    };
    const ref = useRef()

    useEffect(() => {

        const element = ref.current;
        
        ScrollTrigger.matchMedia({

            "(min-width: 1000px)": function() {
                gsap.fromTo(element.querySelector("#greg"), {y:0,opacity:0, scale:0}, {
            
                    y:20,
                    opacity: 1,
                    scale: 1,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#greg",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 70%"
                      }
                });
        
                gsap.fromTo(element.querySelector("#liza"), { y:0,opacity:0, scale:0}, {

                    y:200,
                    opacity: 1,
                    scale: 1,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#liza",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 70%"
                      }
                });
        
                gsap.fromTo(element.querySelector("#vasya"), { y:0,opacity:0, scale:0}, {

                    y:400,
                    opacity: 1,
                    scale: 1,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#vasya",
                        scrub: 1,
                        start: "top 65%",
                        end: "top 21%"
                      }
                });
        
                gsap.fromTo(element.querySelector("#consult"), {y:0,opacity:0, scale:0}, {
                    y:-50,
                    opacity: 1,
                    scale: 1,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#consult",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 60%"
                      }
                });
        
                gsap.fromTo(element.querySelector("#ven_jup"), {y:0,x:0}, {
                    y:300,
                    x:-140,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#ven_jup",
                        scrub: 1,
                        start: "top 85%",
                        end: "top 40%"
                      }
                });

                
            },

            "(min-width: 800px) and (max-width: 999px)": function() {
                

                gsap.fromTo(element.querySelector("#greg"), {y:0,opacity:0, scale:0}, {
                    y:20,
                    opacity: 1,
                    scale: 1,
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#greg",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 70%"
                      }
                });

                gsap.fromTo(element.querySelector("#vasya"), {y:0,opacity:0, scale:0}, {
                    y:20,
                    opacity: 1,
                    scale: 1,
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#vasya",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 70%"
                      }
                });
        
                gsap.fromTo(element.querySelector("#liza"), {x:0, y:0,opacity:0, scale:0}, {
                    x:20,
                    y:200,
                    opacity: 1,
                    scale: 1,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#liza",
                        scrub: 1,
                        start: "top 55%",
                        end: "top 20%"
                      }
                });

                gsap.fromTo(element.querySelector("#consult"), {y:0, opacity:0, scale:0}, {
                    y:40,
                    opacity: 1,
                    scale: 1,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#consult",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 55%"
                      }
                });
                
              },

            "(max-width: 799px)": function() {

                
                gsap.fromTo(element.querySelector("#greg"), {opacity:0, scale:0}, {
            
                    opacity: 1,
                    scale: 0.8,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#greg",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 70%"
                      }
                });

                gsap.fromTo(element.querySelector("#liza"), {opacity:0, scale:0}, {
            
                    opacity: 1,
                    scale: 0.8,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#liza",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 70%"
                      }
                });

                gsap.fromTo(element.querySelector("#vasya"), {opacity:0, scale:0}, {
            
                    opacity: 1,
                    scale: 0.8,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#vasya",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 70%"
                      }
                });

                gsap.fromTo(element.querySelector("#consult"), {opacity:0, scale:0}, {
            
                    opacity: 1,
                    scale: 0.8,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#consult",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 50%"
                      }
                });

                gsap.to(element.querySelector("#ven_jup"), {
                    
                    rotate:360,
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#ven_jup",
                        scrub: 1,
                        start: "top 65%",
                        end: "top 20%"
                      }
                });

            }
        });

        gsap.fromTo(element.querySelector("#free"), {opacity:0}, {
            opacity: 1,
            yoyo: true,
            repeat: Infinity,
            ease: "slow"
        });

        gsap.fromTo(element.querySelector("#check"), {opacity:0}, {
            opacity: 1,
            yoyo: true,
            repeat: Infinity,
            ease: "slow"
        });

        gsap.to(element.querySelector("#arrow"), {
            rotate:210,
            ease:"none",
            scrollTrigger: {
                trigger: "#check",
                scrub: 1,
                start: "bottom 95%",
                end: "top 70%"
              }
        });

        gsap.to(element.querySelector("#arrow2"), {
            rotate:140,
            ease:"none",
            scrollTrigger: {
                trigger: "#check",
                scrub: 1,
                start: "bottom 95%",
                end: "top 70%"
              }
        });

      });

    return (
        <div className="aboutext" ref = {ref}>
            <Container className="pageCont">

                    <h1 className="shimmer" id="our_services">OUR SERVICES:</h1>
                        <Row>
                            <Col className="col-lg-4 col-md-6">
                                <div className="card our-team" id="greg">
                                    <img src="/our_s/bronzePalm.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center">$ Splash package $</h5>
{/*                                         <p className="card-text fw-lighter">Custom-designed static website</p> */}
                                        <Row className="pb-3">
{/*                                             <Col className="col-lg-6">
                                                <p className="card-text text-start">3-5 days</p>
                                            </Col> */}
                                            <Col className="col-lg-6">
                                                <p className="card-text text-end">$ 3 000+</p>
                                            </Col>
                                        </Row>

                                        <a  className="btn col-lg-12 col-12 btn-lg contactUs" id="webPort" href="/packages" role="button"> <h4>Compare & Order</h4></a>
                                    </div>
                                </div>
                            </Col>
                            <br />
                            <Col className="col-lg-4 col-md-6 col-12">
                                <div className="card our-team" id="liza">
                                    <img src="/our_s/silverPalm.png" className="card-img-top" alt="..."></img>
                                    
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center">$$ Business package $$</h5>
{/*                                         <p className="card-text fw-lighter">Complex full sized animated website (5+ pages) to help grow your business based on your content</p> */}
                                        <Row className="pb-3">
{/*                                             <Col className="col-lg-6">
                                                <p className="card-text text-start">10+ days</p>
                                            </Col> */}
                                            <Col className="col-lg-6">
                                                <p className="card-text text-end">$ 5 000+</p>
                                            </Col>
                                        </Row>
                                        <a  className="btn btn-lg col-lg-12 col-12 contactUs" id="webPort" href="/packages" role="button"> <h4>Compare & Order</h4></a>
                                    </div>
                                </div>
                            </Col>
                            <Col className="col-lg-4 col-md-6 col-12">
                                <div className="card our-team " id="vasya">
                                    <img src="/our_s/goldPalm.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body text-center">
                                        <h5 className="card-title text-center">$$$ Premium package $$$</h5>
{/*                                         <p className="card-text fw-lighter">Complex full sized animated website for modern engaging experience for your clients</p> */}
                                        <Row className="pb-3">
{/*                                             <Col className="col-lg-6">
                                                <p className="card-text text-start">30+ days</p>
                                            </Col> */}
                                            <Col className="col-lg-6">
                                                <p className="card-text text-end">$ 10 000 +</p>
                                            </Col>
                                        </Row>
                                        <a  className="btn btn-lg col-lg-12 col-12 contactUs" id="webPort" href="/packages" role="button"> <h4>Compare & Order</h4></a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                <br/>
                        <Row>
                            <Col className="col-lg-4 col-md-8 offset-md-2 offset-lg-0 col-12">
                                <div className="card our-team" id="consult">
                                    <img src="/our_s/bluePalm.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">Consultation</h5>
                                        <p className="card-text fw-lighter">Not sure what do you need? Contact our professional consultant!</p>
                                        <Row className="pb-3">
                                            <Col className="col-lg-6">
                                                <p className="card-text text-start">Up to 30 minutes</p>
                                            </Col>
                                            <Col className="col-lg-6">
                                                <p className="card-text text-end" id="free" >$ FREE</p>
                                            </Col>
                                        </Row>
                                        <a  className="btn btn-lg col-lg-12 col-12 contactUs" id="webPort" href="https://calendly.com/cyberenaissance/30min" role="button" target="_blank"> <h4>Book a virtual meeting</h4></a>
                                    </div>
                                </div>
                            </Col>

                            <div className="col-lg-7 offset-lg-1">
                                <img src="/about/v_j.png" className="img-fluid" id="ven_jup" alt="..."></img>
                            </div>
                        </Row>

                        <Row className="portfolioBtn">
                            <div className="col-5 col-md-4 col-lg-2">
                                <a  className="btn contactUs" href="/portfolio/webdevelopment" role="button"><h1>Web development portfolio</h1></a>
                            </div> 
                            <div className="col-lg-2 col-md-4 col-5 offset-2 offset-md-4 offset-lg-8 ">
                                <a  className="btn contactUs"  href="/portfolio/animationportfolio" role="button"><h1>Motion graphics portfolio</h1></a>
                            </div>
                        </Row>

                        <br />
                        <Row className="mt-5">
                            <div className="col-lg-3 col-md-4 offset-lg-1 col-4">
                                <img src="/about/arrow2.png" className="img-fluid" id="arrow" alt="..."></img>
                            </div>

                            <div className="col-4 col-lg-4 col-md-4 offset-lg-1 mt-5">
                                <p className="fs-1" id="check">check out our work</p>
                            </div>
                            <div className="col-lg-3 col-md-4 col-4">
                                <img src="/about/arrow.png" className="img-fluid" id="arrow2" alt="..."></img>
                            </div>
                        </Row>
            </Container>
        </div>
    );
}
export default OurServices;
