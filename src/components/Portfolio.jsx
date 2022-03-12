import React from "react";
import {NavLink} from "react-router-dom";



function Portfolio() {


    return (
        <div className="portfolio">
            <NavLink to="/portfolio/webdevelopment">WEB Dev </NavLink>
            <NavLink to="/portfolio/webcontent">Blockhain </NavLink>
            <NavLink to="/portfolio/blockchain">Content </NavLink>
        </div>
    );
}


export default Portfolio;
