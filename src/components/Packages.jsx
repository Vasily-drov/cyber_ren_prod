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
                <Col className="col-lg-10 offset-lg-1 col-10 offset-2 my-5">
                    <h1 className="contactUs">Choose your package* :</h1>
                </Col>
            </Row>

            <div class="table-responsive">
                <table className="table table-dark table-hover table-bordered border-info align-middle">
                    <thead>
                    <tr>
                        <th scope="col"> </th>
                        <th scope="col">Splash</th>
                        <th scope="col">Business</th>
                        <th scope="col">Web 3.0</th>
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
                        <th scope="row">Design Layout</th>
                        <td>1-2 pages</td>
                        <td>5+ pages</td>
                        <td>∞</td>
                    </tr>
                    <tr>
                        <th scope="row">Digital Bussines Card</th>
                        <td className="plus">+</td>
                        <td className="plus">+</td>
                        <td className="plus">+</td>
                    </tr>
                    <tr>
                        <th scope="row">Accept payments</th>
                        <td>-</td>
                        <td className="plus">+</td>
                        <td className="plus">+</td>
                    </tr>
                    <tr>
                        <th scope="row">Dinamic QR code</th>
                        <td>-</td>
                        <td className="plus">+</td>
                        <td className="plus">+</td>
                    </tr>

                    <tr>
                        <th scope="row">Animation</th>
                        <td>-</td>
                        <td className="plus">+</td>
                        <td className="plus">+</td>
                    </tr>
                    <tr>
                        <th scope="row">Web 3.0</th>
                        <td>-</td>
                        <td>-</td>
                        <td className="plus">+</td>
                    </tr>
                    <tr>
                        <th scope="row">3D Animation</th>
                        <td>-</td>
                        <td>-</td>
                        <td className="plus">+</td>
                    </tr>
                    <tr>
                        <th scope="row">Price</th>
                        <td>$1 000+</td>
                        <td>$3 000+</td>
                        <td>$10 000+</td>
                    </tr>
                    <tr>
                        <th scope="row">First month hosting</th>
                        <td>FREE</td>
                        <td>FREE</td>
                        <td>FREE</td>
                    </tr>
                    </tbody>
                </table>
                </div>
            <Row>
                <Col className="col-lg-10 offset-lg-1 text-center my-5">
                    <p className="fs-1 ph">Post production website maintenance, edits and support are provided at an hourly rate</p>
                </Col>
            </Row>
            <Row>
                <Col className="col-lg-12 offset-lg-0">
                    <h3>*Packages aren't final. We would be happy to adjust the contents of the package to your needs. </h3>
                    <h2>Feel free to contact us with any questions!</h2>
                </Col>
            </Row>
            <br />
            <Row className="my-5">
                <Col className="col-lg-6 col-6 text-center">
                    <a className="btn btn-lg blue col-lg-12 " href="https://calendly.com/cyberenaissance/30min" role="button" target="_blank"><h3>Book a virtual meeting</h3></a>
                </Col>
                <Col className="col-lg-6 col-6 text-center">
                    <a  className="btn btn-lg blue col-lg-12" id="webPort" href="/portfolio/webdevelopment" role="button"><h3>Check examples with reviews</h3></a>
                </Col>

            </Row>
            <br />
            </Container>

        </div>
    );
}


export default Packages;
