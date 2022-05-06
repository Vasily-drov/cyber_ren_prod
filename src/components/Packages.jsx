import {useEffect, React, useRef} from "react";
import { gsap } from "gsap";
import {Col, Container, Row} from "react-bootstrap";

const tl = gsap.timeline()

function Packages() {

    const ref = useRef();

    useEffect(() => {

        const element = ref.current;

      });

    return (
        <div className="asdfbsfdv" ref = {ref}>
            <Container>
            <Row>
                <Col className="col-lg-5 offset-lg-1 col-10 offset-2">
                    <h1 className="contactUs">Choose your package:</h1>
                </Col>
            </Row>


            <table className="table">
                <thead>
                <tr>
                    <th scope="col"> </th>
                    <th scope="col">Landing</th>
                    <th scope="col">Ecommerce</th>
                    <th scope="col">Full Pack</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Estimated Delivery Time</th>
                    <td>3-5 days</td>
                    <td>10+ days</td>
                    <td>30+ days</td>
                </tr>
                <tr>
                    <th scope="row">Layout</th>
                    <td>1-2 pages</td>
                    <td>5+ pages</td>
                    <td>As Many as you want to</td>
                </tr>
                <tr>
                    <th scope="row">Digital Bussines Card</th>
                    <td>+</td>
                    <td>+</td>
                    <td>+</td>
                </tr>
                <tr>
                    <th scope="row">Accept payments</th>
                    <td>-</td>
                    <td>+</td>
                    <td>+</td>
                </tr>
                <tr>
                    <th scope="row">Dinamic QR code</th>
                    <td>-</td>
                    <td>+</td>
                    <td>+</td>
                </tr>

                <tr>
                    <th scope="row">Animation</th>
                    <td>-</td>
                    <td>+</td>
                    <td>+</td>
                </tr>
                <tr>
                    <th scope="row">Web 3.0</th>
                    <td>-</td>
                    <td>-</td>
                    <td>+</td>
                </tr>
                <tr>
                    <th scope="row">3D Animation</th>
                    <td>-</td>
                    <td>-</td>
                    <td>+</td>
                </tr>
                <tr>
                    <th scope="row">Price</th>
                    <td>1 000+</td>
                    <td>3 000+</td>
                    <td>10 000+</td>
                </tr>
                <tr>
                    <th scope="row">First month hosting</th>
                    <td>FREE</td>
                    <td>FREE</td>
                    <td>FREE</td>
                </tr>
                </tbody>
            </table>

                <Col className="col-lg-8 col-12">

                        <a  className="btn btn-lg contactUs" id="webPort" href="/portfolio/webdevelopment" role="button"><h1>Cheack examples with reviews</h1></a>


                    <a className="btn btn-lg contactUs" href="https://calendly.com/cyberenaissance/30min" role="button" target="_blank">Book a virtual meeting</a>
                    <br/>
                </Col>
            </Container>

        </div>
    );
}


export default Packages;
