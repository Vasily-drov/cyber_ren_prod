import React from "react";
import { gsap } from "gsap";

const { useEffect } = React;
const tl = gsap.timeline()



function Contact() {

    useEffect(() => {
        
        tl.from("#pup", {scale:0, opacity:0, rotate: 360, duration:2, ease:"back"})
        tl.to("#pup", {
            duration: 1.7,
            y: -50,
            repeat: -1,
            stagger: 1,
            yoyo: true,
            ease: "sine.inOut"
        });
    
      });

    
      

    return (
        <div className="contact">
            <div className="vh-100">
                <div className="row">
                    <div className="col-lg-7">
                        <img id="pup" src="/contact/pup.png" class="img-fluid pup" alt="..."></img>
                    </div>
                    <div className="col-lg-5 my-5 pt-5">
                        <h1 className="my-5 contactUs">Contact Us:</h1>
                        <p className="fs-3 pt-5 mb-5 contacts">Email: cyber-ren@protonmail.com</p>
                        <br/>
                        <a className="btn btn-lg my-5 contactUs" href="/" role="button">Instagram</a>
                        <br/>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Contact;
