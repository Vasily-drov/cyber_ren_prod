import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {About,Intro, Contact,   AboutExt} from "./index";

gsap.registerPlugin(ScrollTrigger);


function Home() {

    return (
        <div className="wrap">
            <div className="home">
                <Intro/>
                <About/>
                <AboutExt/>
                <Contact/>
            </div>
           
        </div>
    );
}


export default Home;