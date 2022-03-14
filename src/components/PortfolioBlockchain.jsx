import React from "react";
import {NavLink} from "react-router-dom";



function PortfolioBlockchain() {


    return (
        <div className="portfolioext">

            <div className="portfolio">


                <div className="container">
                    <h1>Blockchain Portfolio
                    </h1>
                    <button>
                        <NavLink to="/portfolio/blockchain">Blockhain </NavLink>
                    </button>
                </div>

            </div>
        </div>

    );
}


export default PortfolioBlockchain;
