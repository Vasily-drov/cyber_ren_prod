import React from "react";
import { gsap } from "gsap";
import {useRef, useEffect} from "react";
import {NavLink} from "react-router-dom";





function Home() {

    gsap.set("h1 div", {yPercent:-103})
    const tl = gsap.timeline()
    const { useEffect, useRef } = React;
    tl.to("h1 div", {duration:1, yPercent:0, stagger:0.05, ease:"expo.inOut"})

        .to("h1 div:not([data-char='.'])", {duration:1, yPercent:103, stagger:0.1, ease:"expo.inOut"})

    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
    });

    
    return (



        <div className="home">
            <NavLink to="/portfolio">Portfolio </NavLink>
            <NavLink to="/portfolio">Pricing </NavLink>

            <NavLink to="/contact">Contact Us </NavLink>
            <div className="box" ref={boxRef}>Hello</div>;
        </div>

    );
}

export default Home;


