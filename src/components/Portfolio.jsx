import React from "react";
import {NavLink} from "react-router-dom";



function Portfolio() {


    return (
        <div className="portfolio">


            <div className="container">
                <h1>Web Development Portfolio
                </h1>
                <button>
                    <NavLink to="/portfolio/webdevelopment">WEB Dev </NavLink>
                </button>

             </div>

        </div>

    );
}


export default Portfolio;
