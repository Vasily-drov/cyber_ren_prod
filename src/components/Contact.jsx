import {useEffect, React, useRef} from "react";
import { gsap } from "gsap";
import {Col, Row} from "react-bootstrap";

const tl = gsap.timeline()

function Contact() {

    const ref = useRef();

    useEffect(() => {

        const element = ref.current;
        
        tl.from(element.querySelector("#pup"), {scale:0, opacity:0, duration:2, ease:"back"})
        tl.to(element.querySelector("#pup"), {
            duration: 1.7,
            y: -70,
            repeat: -1,
            stagger: 1,
            yoyo: true,
            ease: "sine.inOut"
        });
      });

    return (
        <div className="contact" ref = {ref}>
                <Row>
                    <Col className="col-lg-4 offset-lg-2 col-sm-12 col-12">
                        <img id="pup" src="/contact/frame.png" className="img-fluid pup" alt="Friendly Dog with 3 heads"></img>
                    </Col>
                    <Col className="col-lg-5 offset-lg-1 col-sm-11 col-11 offset-sm-1 offset-1 my-5 pt-5">
                        <h1 className="contactUs">Contact Us:</h1>
                        <Col className="col-lg-8 col-12">
                            <p className="contacts pt-5">Email: cyber-ren@protonmail.com</p>
                            < a href="mailto:john@example.com">John</a>
                            <br/>
                            <a className="btn btn-lg contactUs" href="/" role="button">Instagram</a>
                            <br/>
                        </Col>
                    </Col>
                </Row>
        </div>
    );
}


export default Contact;
