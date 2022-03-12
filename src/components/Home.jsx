import React from "react";
import { gsap } from "gsap";
import {useRef, useEffect} from "react";
import {NavLink} from "react-router-dom";





function Home() {


    const boxRef = useRef();

    useEffect(() => {
        gsap.to(boxRef.current, { rotation: "+=360" });
    });


    return (



        <div className="home">
            <NavLink to="/portfolio">Portfolio </NavLink>
            <NavLink to="/portfolio">Pricing </NavLink>

          
            <div className="box" ref={boxRef}>Hello</div>;
        </div>

    );
}

export default Home;


