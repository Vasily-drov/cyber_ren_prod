import {useEffect, React, useRef} from "react";
import { gsap } from "gsap";
import {Col, Row} from "react-bootstrap";



const tl = gsap.timeline()

function PlayerForAnimation() {

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

                <Col className="col-lg-5 offset-lg-1 col-10 offset-2">


                    <Col className="col-lg-8 col-12">


                        <a className="btn contactUs mb-5" href="https://calendly.com/cyberenaissance/30min" role="button"><h1>Book a virtual meeting</h1></a>
                        <br/>
                    </Col>
                </Col>
            </Row>
        </div>
    );
}


export default PlayerForAnimation;
