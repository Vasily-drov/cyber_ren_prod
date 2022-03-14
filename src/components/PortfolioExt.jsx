import React from "react";
import {NavLink} from "react-router-dom";



function PortfolioExt() {


    return (
        <div className="portfolioext">

            <div className="portfolio">


                <div className="container">
                    <h1>Content Portfolio
                    </h1>
                    <button>
                        <NavLink to="/portfolio/webcontent">Content </NavLink>
                    </button>

                </div>

            </div>
        </div>

    );
}


export default PortfolioExt;
