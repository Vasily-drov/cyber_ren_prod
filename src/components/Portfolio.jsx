import React from "react";
import {NavLink} from "react-router-dom";



function Portfolio() {


    return (
        <div className="portfolio">

            <div className="container">
                <p>Our portfolio is our price list?:
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
                <div className="card-group">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">Web development</h1>
                                <h5 className="card-text">
                                    Pricing:
                                </h5>
                                <button>
                                    <NavLink to="/portfolio/webdevelopment">Learn More </NavLink>
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">Content Creating</h1>
                                <h5 className="card-text">
                                    Pricing:
                                </h5>
                                <button>
                                    <NavLink to="/portfolio/webcontent">Learn More</NavLink>
                                </button>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title">blockchain consulting</h1>
                                <h5 className="card-text">
                                    Pricing:
                                </h5>
                                <button>
                                    <NavLink to="/portfolio/blockchain">Learn More </NavLink>
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </div>

    );
}


export default Portfolio;
