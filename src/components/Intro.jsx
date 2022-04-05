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
                    <Col className="col-lg-5 offset-lg-7 col-7 offset-5">
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
            <Row className="v_m mt-5">
                <Col className="col-lg-8">
                    <img src="/venus_mirorr.png" className="img-fluid" id="venus_mirror" alt="Woman lying on a cloud"></img>
                </Col>
            </Row>
        </div>
    );
}
export default Intro;


