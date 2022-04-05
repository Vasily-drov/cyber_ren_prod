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
        
                gsap.fromTo(element.querySelector("#liza"), {x:0, y:0,opacity:0, scale:0}, {
                    x:20,
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
        
                gsap.fromTo(element.querySelector("#vasya"), {x:0, y:0,opacity:0, scale:0}, {
                    x:30,
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

                    <h1 className="shimmer" id="our_services">Our services:</h1>
                        <Row>
                            <Col className="col-lg-4 col-md-6">
                                <div className="card our-team" id="greg">
                                    <img src="/our_s/bronzePalm.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">$ Bronze palm package $</h5>
                                        <p className="card-text">Small website (1-2 pages) with your content</p>
                                        <p className="card-text">+ domain name on us if you buy a subcription</p>
                                        <p className="card-text">$ 1000 </p>
                                        <p className="card-text">Full maintance + hosting $200/month </p>
                                        <button className="back-to-top btn contactUs my-3 col-lg-8 col-10"  onClick={scrollToContact}>
                                            <h5>Contact us</h5>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <br />
                            <Col className="col-lg-4 col-md-6 col-12">
                                <div className="card our-team" id="liza">
                                    <img src="/our_s/silverPalm.png" className="card-img-top" alt="..."></img>
                                    
                                    <div className="card-body">
                                        <h5 className="card-title text-center">$$ Silver palm package $$</h5>
                                        <p className="card-text">Complex website to help grow your business</p>
                                        <p className="card-text">full size website </p>
                                        <p className="card-text">+ QR code </p>
                                        <p className="card-text">+ menu, flyers, cards and other needed branded design</p>
                                        <p className="card-text">+ Instagram branded content (with existed content) </p>
                                        <p className="card-text">+ motion and stop motion graphic video </p>
                                        <p className="card-text">$ 5000 - $ 7000</p>
                                        <p className="card-text">Full maintance + hosting $400/month </p>
                                        <button className="back-to-top btn contactUs my-3 col-lg-8 col-10"  onClick={scrollToContact}>
                                            <h5>Contact us</h5>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                            <Col className="col-lg-4 col-md-6 col-12">
                                <div className="card our-team " id="vasya">
                                    <img src="/our_s/goldPalm.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">$$$ Gold palm package $$$</h5>
                                        <p className="card-text">Everything from silver palm package</p>
                                        <p className="card-text">+ photo/video content creation from scratch </p>
                                        <p className="card-text">+ SMM strategy ?</p>
                                        <p className="card-text">+ ...</p>
                                        <p className="card-text">+ </p>
                                        <p className="card-text">+ </p>
                                        <p className="card-text">$ 10 000 +</p>
                                        <p className="card-text">Full maintance + hosting $?/month </p>
                                        <br />
                                        <button className="back-to-top btn contactUs my-3 col-lg-8 col-10"  onClick={scrollToContact}>
                                            <h5>Contact us</h5>
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col className="col-lg-4 col-md-8 offset-md-2 offset-lg-0 col-12">
                                <div className="card our-team" id="consult">
                                    <img src="/our_s/bluePalm.png" className="card-img-top" alt="..."></img>
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
                            <div className="col-lg-8">
                                <img src="/about/v_j.png" className="img-fluid" id="ven_jup" alt="..."></img>
                            </div>
                        </Row>
                        <Row className="portfolioBtn">
                            <div className="col-6 col-md-4 col-lg-2">
                                <a  className="btn btn-lg contactUs" id="webPort" href="/portfolio/webdevelopment" role="button"><h1>Web development portfolio</h1></a>
                            </div> 
                            <div className="col-6 offset-lg-8 col-lg-2 offset-md-4 col-md-4">
                                <a  className="btn btn-lg contactUs" id="animPort" href="/portfolio/animationportfolio" role="button"><h1>Motion graphics portfolio</h1></a>
                            </div>
                        </Row>
                        <br />
                        <Row className="mt-5">
                            <div className="col-lg-3 col-md-4 offset-lg-1 col-4">
                                <img src="/about/arrow2.png" className="img-fluid" id="arrow" alt="..."></img>
                            </div>
                            <div className="col-4 col-lg-4 col-md-4 offset-lg-1">
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
