import React from "react";
import { gsap } from "gsap";


const { useEffect } = React;
const tl = gsap.timeline()



function Contact() {

    useEffect(() => {
        
        tl.from("#pup", {scale:0, opacity:0, duration:2, ease:"back"})
        tl.to("#pup", {
            duration: 1.7,
            y: -70,
            repeat: -1,
            stagger: 1,
            yoyo: true,
            ease: "sine.inOut"
        });
    
      });

    return (
        <div className="contact">
        
                <div className="row">
                    <div className="col-lg-6 col-sm-12 col-12">
                        <img id="pup" src="/contact/pup.png" className="img-fluid pup" alt="..."></img>
                    </div>
                    <div className="col-lg-5 offset-lg-1 col-sm-11 col-11 offset-sm-1 offset-1 my-5 pt-5">
                        <h1 className="contactUs">Contact Us:</h1>
                        <div className="col-lg-8 col-12">
                            <p className="contacts pt-5">Email: cyber-ren@protonmail.com</p>
                            <br/>
                            <a className="btn btn-lg contactUs" href="/" role="button">Instagram</a>
                            <br/>
                        </div>
                    </div>
                </div>
        </div>
    );
}


export default Contact;
