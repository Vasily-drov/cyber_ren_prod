import React from "react";

//import Blockchain from "./portfolio/Blockchain";
import WebDevelopment from "./portfolio/WebDevelopment";
import AnimationPortfolio from "./portfolio/AnimationPortfolio";



function Portfolio() {


    return (
        <div className="portfolio">
            <div className="container">
                <h1>Portfolio Page
                </h1>
                <WebDevelopment/>
                <AnimationPortfolio/>

             </div>

        </div>

    );
}


export default Portfolio;
