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
                        start: "top 75%",
                        end: "top 40%",
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
                        end: "top 20%",
                      }
                });
        
                gsap.fromTo(element.querySelector("#vasya"), {x:0, y:0,opacity:0, scale:0}, {
                    x:30,
                    y:400,
                    opacity: 1,
                    scale: 1,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#vasya",
                        scrub: 1,
                        start: "top 35%",
                        end: "top 1%",
                      }
                });
        
                gsap.fromTo(element.querySelector("#consult"), {y:0,opacity:0, scale:0}, {
                    y:20,
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
                    y:250,
                    x:-140,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#ven_jup",
                        scrub: 1,
                        start: "top 65%",
                        end: "top 20%"
                      }
                });

                gsap.to(element.querySelector("#animPort"), {
                    x: 480,
                    y:-120,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#animPort",
                        scrub: 1,
                        start: "top 99%",
                        end: "top 60%"
                    }

                });

                gsap.to(element.querySelector("#check"), {
                    y:50,
                    x:250,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#check",
                        scrub: 1,
                        start: "top 99%",
                        end: "top 70%"
                    }

                });

                gsap.to(element.querySelector("#webPort"), {
                    y:-100,
                    x: 20,
                    rotate:360,
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#webPort",
                        scrub: 1,
                        start: "top 99%",
                        end: "top 60%"
                      }
                });

            

                gsap.to(element.querySelector("#arrow"), {
                    y:-110,
                    rotate:320,
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#arrow",
                        scrub: 1,
                        start: "top 99%",
                        end: "top 70%"
                      }
                });


                gsap.to(element.querySelector("#arrow2"), {
                    y:-170,
                    x:80,
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#arrow2",
                        scrub: 1,
                        start: "top 99%",
                        end: "top 70%"
                      }
                });
                
                
            },

            "(min-width: 800px) and (max-width: 999px)": function() {
                gsap.fromTo(element.querySelector("#ven_jup"), {y:0,x:0}, {
                    y:-200,
                    x:150,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#ven_jup",
                        scrub: 1,
                        start: "top 95%",
                        end: "top 50%"
                      }
                });

                gsap.to(element.querySelector("#arrow"), {
                    y:-400,
                    rotate: 260,
                    scale: 0.9,
                    duration: 1,
                    ease: "slow"
                });

                gsap.to(element.querySelector("#animPort"), {
                    x: -100,
                    y:-200,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#animPort",
                        scrub: 1,
                        start: "top 99%",
                        end: "top 80%"
                    }

                });

                gsap.to(element.querySelector("#check"), {
                    x: -10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#check",
                        scrub: 1,
                        start: "top 99%",
                        end: "top 60%",

                    }

                });

                gsap.fromTo(element.querySelector("#greg"), {y:0,opacity:0, scale:0}, {
            
                    y:20,
                    opacity: 1,
                    scale: 1,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#greg",
                        scrub: 1,
                        start: "top 75%",
                        end: "top 40%",
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
                        end: "top 20%",
                      }
                });
        
                gsap.fromTo(element.querySelector("#vasya"), {x:0, y:0,opacity:0, scale:0}, {
                    x:30,
                    y:400,
                    opacity: 1,
                    scale: 1,
                
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#vasya",
                        scrub: 1,
                        start: "top 35%",
                        end: "top 1%",
                      }
                });
        
                gsap.fromTo(element.querySelector("#consult"), {y:0,opacity:0, scale:0}, {
                    y:20,
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
                        end: "top 50%"
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
                        end: "top 50%"
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
                        end: "top 50%"
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

                gsap.fromTo(element.querySelector("#animPort"), {x:500}, {
                    x:0,
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#animPort",
                        scrub: 1,
                        start: "top 85%",
                        end: "top 60%"
                      }
                });

                gsap.fromTo(element.querySelector("#webPort"), {x:-200, y:20}, {
                    x:0,
                    y:20,
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#webPort",
                        scrub: 1,
                        start: "top 80%",
                        end: "top 55%"
                      }
                });

                gsap.to(element.querySelector("#check"), {
                    rotate:360,
                    y:20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#check",
                        scrub: 1,
                        start: "top 99%",
                        end: "top 60%"
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

      });

    return (
        <div className="aboutext" ref = {ref}>
            <Container className="pageCont">

                    <h1 className="shimmer" id="our_services">Our services:</h1>
                        <Row>
                            <Col className="col-lg-4 col-md-4">
                                <div className="card our-team" id="greg">
                                    <img src="/portfolio/final_key.svg" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Personal website</h5>
                                        <p className="card-text">Small website (1-2 pages) with your content</p>
                                        <p className="card-text">$ 1000 +</p>
                                        <a  className="btn contactUs col-12"  href="/portfolio/webdevelopment" role="button">Web development portfolio</a>
                                    </div>
                                </div>
                            </Col>
                            <br />
                            <Col className="col-lg-4 col-md-4 col-12">
                                <div className="card our-team" id="liza">
                                    <img src="/portfolio/final_key2.svg" className="card-img-top" alt="..."></img>
                                    
                                    <div className="card-body">
                                        <h5 className="card-title">Website for businesses and interpreneurs </h5>
                                        <p className="card-text">Complex website to help grow your business</p>
                                        <p className="card-text">$ 3000 +</p>
                                        <a  className="btn contactUs col-12"  href="/portfolio/webdevelopment" role="button">Web development portfolio</a>
                                    </div>
                                </div>
                            </Col>
                            <Col className="col-lg-4 col-md-4 col-12">
                                <div className="card our-team " id="vasya">
                                    <img src="/portfolio/final_key3.svg" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Full pack</h5>
                                        <p className="card-text">Complex website we take care of everything from content creation to deploying website</p>
                                        <p className="card-text">$ 6000 +</p>
                                        <a  className="btn contactUs col-12"  href="/portfolio/webdevelopment" role="button">Web development portfolio</a>
                                        <br />
                                        <a  className="btn contactUs col-12"  href="/portfolio/animationportfolio" role="button">Content portfolio</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="col-lg-4 col-md-4 col-12">
                                <div className="card our-team" id="consult">
                                    <img src="/portfolio/final_key.svg" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Consultation</h5>
                                        <p className="card-text">You don't understand what do you need? Contact our proffesional consulting</p>
                                        <p className="card-text" id="free" >$ FREE</p>
                                        <button className="back-to-top btn contactUs my-3 col-lg-8 col-10"  onClick={scrollToContact}>
                                            <h5>Contact us</h5>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <div className="col-lg-7">
                                <img src="/about/v_j.png" className="img-fluid" id="ven_jup" alt="..."></img>
                            </div>
                        </Row>
                        <Row className="portfolioBtn">
                            <div className="col-lg-4 col-md-4 col-1">
                                <img src="/about/arrow.png" className="img-fluid" id="arrow" alt="..."></img>
                            </div> 
                            <div className="col-4 col-md-4 col-8">
                                <a  className="btn btn-lg contactUs" id="animPort" href="/portfolio/animationportfolio" role="button"><h1>Motion graphics portfolio</h1></a>
                            </div>
                            <div className="col-4 offset-4 col-md-4">
                                <p className="fs-2" id="check">check out our work</p>

                            </div>
                        </Row>
                        <Row className="portfolioBtn">
                            <div className="col-8 col-md-4 offset-lg-0 offset-4">
                                <a  className="btn btn-lg contactUs" id="webPort" href="/portfolio/webdevelopment" role="button"><h1>Web development portfolio</h1></a>
                            </div> 
                            <div className="col-lg-3 col-md-4 offset-lg-5">
                                <img src="/about/arrow2.png" className="img-fluid" id="arrow2" alt="..."></img>
                            </div>
                        </Row>
            </Container>
        </div>
    );
}
export default OurServices;
