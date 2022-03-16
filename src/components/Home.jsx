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
                <div className="panel" >
                    <Portfolio/>
                </div>
                <div className="panel" >
                    <PortfolioExt/>
                </div>
                <div className="panel">
                    <PortfolioBlockchain/>
                </div>
                <div className="panel orange contact">
                   <Contact/>
                </div>

            </div>



    );
}


export default Home;