import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { useEffect } = React;

gsap.registerPlugin(ScrollTrigger);

function OurServices() {

    useEffect(() => {
        
        

        gsap.fromTo("#greg", {y:0,opacity:0, scale:0}, {
            
            y:20,
            opacity: 1,
            scale: 1,
        
            ease:"none",
            scrollTrigger: {
                trigger: "#greg",
                scrub: true,
                start: "top 75%",
                end: "top 40%",
              }
        })

        gsap.fromTo("#liza", {x:0, y:0,opacity:0, scale:0}, {
            x:20,
            y:200,
            opacity: 1,
            scale: 1,
        
            ease:"none",
            scrollTrigger: {
                trigger: "#liza",
                scrub: true,
                start: "top 55%",
                end: "top 20%",
              }
        })

        gsap.fromTo("#vasya", {x:0, y:0,opacity:0, scale:0}, {
            x:30,
            y:400,
            opacity: 1,
            scale: 1,
        
            ease:"none",
            scrollTrigger: {
                trigger: "#vasya",
                scrub: true,
                start: "top 35%",
                end: "top 1%",
              }
        })

        gsap.fromTo("#consult", {y:0,opacity:0, scale:0}, {
            y:20,
            opacity: 1,
            scale: 1,
        
            ease:"none",
            scrollTrigger: {
                trigger: "#consult",
                scrub: true,
                start: "top 95%",
                end: "top 60%"
              }
        })

        gsap.fromTo("#ven_jup", {y:0,x:0}, {
            y:250,
            x:-100,
        
            ease:"none",
            scrollTrigger: {
                trigger: "#ven_jup",
                scrub: true,
                start: "top 65%",
                end: "top 20%"
              }
        })

        

        
        
    
      });


    return (
        <div className="aboutext">
            <div className="container pageCont">
                <div className="row">
                    
                    <div className="col-lg-12">
                    <h1 className="shimmer" id="our_services">Our services:</h1>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="card our-team" id="greg">
                                    <img src="/logo192.png" class="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Personal website</h5>
                                        <p className="card-text">Basic landing with 1-2 pages.</p>
                                        <p className="card-text">$ 1000 +</p>
                                        <a href="/about">link</a>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="col-lg-4">
                                <div className="card our-team" id="liza">
                                    <img src="/logo192.png" class="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Complex website for bussineses and interpreneurs </h5>
                                        <p className="card-text">Modern website to help grow your bussines</p>
                                        <p className="card-text">$ 3000 +</p>
                                        <a href="/about">link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card our-team " id="vasya">
                                    <img src="/logo192.png" class="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Full pack</h5>
                                        <p className="card-text">Complex website we take care of everything from content creation to deploying website</p>

                                        <p className="card-text">$ 6000 +</p>
                                        <a href="/about">link</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            
                            <div className="col-lg-4 ">

                                <div className="card our-team" id="consult">
                                    <img src="/logo192.png" className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Consultation</h5>
                                        <p className="card-text">You don't understand what do you need? Contact our proffesional consulting</p>

                                        <p className="card-text">$ FREE</p>
                                        <a href="/about">link</a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-7">
                                <img src="/about/v_j.png" className="img-fluid" id="ven_jup" alt="..."></img>
                            </div> 

                        </div>

                        <div className="row portfolioBtn">
                            <div className="col">
                                <a  className="btn btn-lg contactUs" href="/portfolio" role="button"><h1>Portfolio</h1></a>  
                            </div>  
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurServices;
