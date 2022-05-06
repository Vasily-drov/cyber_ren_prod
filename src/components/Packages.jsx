import {useEffect, React, useRef} from "react";
import { gsap } from "gsap";
import {Col, Row} from "react-bootstrap";

const tl = gsap.timeline()

function Packages() {

    const ref = useRef();

    useEffect(() => {

        const element = ref.current;

      });

    return (
        <div className="contact" ref = {ref}>
                <Row>
                    <Col className="col-lg-5 offset-lg-1 col-10 offset-2">
                        <h1 className="contactUs">Table is here:</h1>

                        <Col className="col-lg-8 col-12">


                            <a className="btn btn-lg contactUs" href="https://calendly.com/cyberenaissance/30min" role="button">Book a virtual meeting</a>
                            <br/>
                        </Col>
                    </Col>
                </Row>
        </div>
    );
}


export default Packages;
