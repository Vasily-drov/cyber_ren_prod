import {Carousel, Container} from "react-bootstrap";
import {React} from "react";

<Container>
    <h1>Content Page</h1>
</Container>
<Carousel>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="/portfolio/CyberRenaissance.gif"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="/portfolio/pg.jpeg"
            alt="Second slide"
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
            className="d-block w-100"
            src="/NFTempeScreen.png"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item>
        <img
            className="d-block w-100"
            src="/NFTempeScreen.png"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>

</Carousel>
<Container>
    <h2> <a href="../contact">To make an order contact us RIGHT HERE!</a> </h2>
</Container>

<div className="blockchain">
    <div className="container">
        <h1>Blockchain Page(Video)</h1>
    </div>
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="/portfolio/content/CyberRenaissance.gif"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="/portfolio/pg.jpeg"
                alt="Second slide"
            />

            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="/NFTempeScreen.png"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
                className="d-block w-100"
                src="/NFTempeScreen.png"
                alt="Third slide"
            />

            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>


    <div className="container">
        <h2>
            Here's some reviews:
        </h2>

    </div>
    <div className="container">
        <a href="/portfolio/webcontent"> And we do content for it</a>
    </div>
    <div className="container">
        <a href="/portfolio/webdevelopment"> And we do web dev for it</a>
    </div>
    <div className="container">
        <a href="../contact">To make an order contact us RIGHT HERE!</a>
    </div>

</div>

);
}





import {useEffect, React, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Row, Col} from "react-bootstrap"

const tl = gsap.timeline()
gsap.registerPlugin(ScrollTrigger);

function Intro() {

    const scrollToContact = () => {

        window.scrollTo({
            top: 100050,
            behavior: 'smooth'
        });

    };

    const ref = useRef();
    useEffect(() => {

        const element = ref.current;


        ScrollTrigger.matchMedia({
            "(min-width: 800px)": function() {
                gsap.fromTo(element.querySelector("#venus_mirror"), {x:0, y:-50}, {
                    x:1100,
                    y:-50,
                    ease:"none",
                    scrollTrigger: {
                        trigger: element.querySelector("#venus_mirror"),
                        start: 'top center',
                        end: 'bottom center',
                        scrub: 1,
                    }
                });

            },
        })



        gsap.fromTo(element.querySelector("#venus_mirror"), {x:-230,y:0, opacity:0,}, {x:0, y:-50, duration:5, opacity:1, ease: "power3.out"})
        gsap.set(element.querySelectorAll("h1 div"), {yPercent:-103})
        tl.to(element.querySelectorAll("h1 div"), {duration:1, yPercent:0, stagger:0.05, ease:"expo.inOut"})
        tl.to(element.querySelectorAll("h1 div:not([data-char='.'])"), {duration:1, yPercent:103, stagger:0.1, ease:"expo.inOut"})

    });

    return (
        <div className="intro" ref = {ref}>
            <Row>
                <Col>
                    <h1 className="main_letters">
                        <div data-char=".">C</div>
                        <div data-char="Y">*'</div>
                        <div data-char=".">B</div>
                        <div data-char="E">Z</div>
                        <div data-char=".">R</div>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h1 className="main_letters">
                        <div data-char=".">R</div>
                        <div data-char="E">&</div>
                        <div data-char="N">#</div>
                        <div data-char=".">A</div>
                        <div data-char="I">!</div>
                        <div data-char="S">7</div>
                        <div data-char=".">S</div>
                        <div data-char="A">;/</div>
                        <div data-char=".">N</div>
                        <div data-char="C">%</div>
                        <div data-char=".">E</div>
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col className="col-lg-5 offset-lg-7">
                    <h1 className="offset-3 offset-lg-0 main_letters other_letters">
                        <div data-char="p">$</div>
                        <div className="ms-1" data-char=".">r</div>
                        <div data-char="o">*</div>
                        <div data-char=".">d</div>
                        <div data-char="u">^</div>
                        <div data-char="c">=</div>
                        <div data-char=".">t</div>
                        <div data-char="i">!</div>
                        <div data-char=".">o</div>
                        <div data-char="n">%</div>
                    </h1>
                    <button className="back-to-top btn contactUs my-3 col-lg-8 col-10"  onClick={scrollToContact}>
                        <h5>Let's create something mind-blowing</h5>
                    </button>
                </Col>
            </Row>
            <Row className="v_m pt-5">
                <Col className="col-lg-8">
                    <img src="/venus_mirorr.png" className="img-fluid" id="venus_mirror" alt="Woman lying on a cloud"></img>
                </Col>
            </Row>
        </div>
    );
}
export default Intro;



