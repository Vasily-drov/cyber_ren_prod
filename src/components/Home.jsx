import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {About,Intro, Contact, Portfolio, PortfolioExt, AboutExt, PortfolioBlockchain} from "./index";

gsap.registerPlugin(ScrollTrigger);


function Home() {

    return (
        <div className="wrap">
            <div className="about">
                <Intro/>
            </div>
                <div className="about">
                    <About/>
                </div>
                <div className="about">
                    <AboutExt/>
                </div>
            <div className="sdf">

               <a href="/portfolio"><h1>Portfolio</h1></a>
            </div>
            <h1>SAVE the link above from dog!</h1>
                <div className="panel orange contact">
                   <Contact/>
                </div>

            </div>



    );
}


export default Home;