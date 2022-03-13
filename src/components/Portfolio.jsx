import React from "react";
import {NavLink} from "react-router-dom";



function Portfolio() {


    return (
        <div className="portfolio">
            <div className="container">
                <h2>Portfolio Page</h2>
                <p>We have a lot to offer:</p>
            </div>

            <div className="container">
                <button>
                    <NavLink to="/portfolio/webdevelopment">WEB Dev </NavLink>
                </button>
                <button>
                    <NavLink to="/portfolio/webcontent">Content </NavLink>
                </button>
                <button>
                    <NavLink to="/portfolio/blockchain">Blockhain </NavLink>
                </button>
            </div>
        </div>
    );
}


export default Portfolio;
