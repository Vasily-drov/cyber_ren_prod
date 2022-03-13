import React from "react";
import { gsap } from "gsap";
import {NavLink} from "react-router-dom";

const tl = gsap.timeline()
const { useEffect, useRef } = React;

function Home() {

    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
        gsap.to("img", {x:700, y:-200, scale:3, duration:2});
    
        gsap.set("h1 div", {yPercent:-103})
    
        tl.to("h1 div", {duration:1, yPercent:0, stagger:0.05, ease:"expo.inOut"})
        tl.to("h1 div:not([data-char='.'])", {duration:1, yPercent:103, stagger:0.1, ease:"expo.inOut"})
    
      });


    return (
        <div className="home">
            <NavLink to="/portfolio">Portfolio </NavLink>
            <NavLink to="/portfolio">Pricing </NavLink>
            <NavLink to="/about">About Us </NavLink>
            <NavLink to="/contact">Contact </NavLink>

            <div className="row">  
                <div className="col">  
                    <h1 className="main_letters">
                        <div data-char=".">C</div>
                        <div data-char="Y">*'</div>
                        <div data-char=".">B</div>
                        <div data-char="E">Z</div>
                        <div data-char=".">R</div>
                    </h1>
                </div>
            </div>
            <div className="row">  
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
            </div>

        </div>

    );
}

export default Home;


