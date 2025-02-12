import {useEffect, React, useRef} from "react";
import { gsap } from "gsap";
import {Col, Row, Container} from "react-bootstrap";

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
                    <Col className="col-lg-4 col-12 offset-0 offset-lg-2">
                        <img id="pup" src="/contact/pup.png" className="img-fluid pup" alt="Friendly Dog with 3 heads"></img>
                    </Col>
                    <Col className="col-lg-5 offset-lg-0 col-10 offset-1 my-5">
                        <h1 className="contactUsBlueH1">Contact Us:</h1>
                        <h3 className="contactUsBlue mt-5" id="email">Email: cyberenaissance@protonmail.com</h3>

                        <Col className="col-lg-10 col-12">
                            <a className="btn contactUsBlue my-5" href="mailto:cyberenaissance@protonmail.com" role="button" id="contactsMob">Send email:
                                cyberenaissance@protonmail.com</a>
                            <br/>

                            <a className="btn contactUsBlue mb-5" href="https://calendly.com/cyberenaissance/30min" role="button" target="_blank"><h1>Book a virtual meeting with us</h1></a>
                            <br/>
                        </Col>
                    </Col>
                </Row>
        </div>
    );
}


export default Contact;
