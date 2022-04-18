import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {About,Intro, Contact, OurServices } from "./index";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    return (
        <div className="wrap">
            <div className="home">
                <Intro/>
                <About/>
                <OurServices/>
                <Contact/>
            </div>
        </div>
    );
}

export default Home;