import React from "react";

//import Blockchain from "./portfolio/Blockchain";
import WebDevelopment from "./portfolio/WebDevelopment";
import WebContent from "./portfolio/WebContent";



function Portfolio() {


    return (
        <div className="portfolio">
            <div className="container">
                <h1>Portfolio Page
                </h1>
                <WebDevelopment/>
                <WebContent/>

             </div>

        </div>

    );
}


export default Portfolio;
