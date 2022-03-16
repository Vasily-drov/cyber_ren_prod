import React from "react";
import {NavLink} from "react-router-dom";



function Portfolio() {


    return (
        <div className="portfolio">


            <div className="container">
                <h1>Web Development Portfolio
                </h1>
                <ul>
                    <li>
                        <a href="https://canibeyourfriend.com/"> Can I be your friend</a>
                    </li>
                    <li>
                        <a href="https://vr-v.herokuapp.com/room.html"> Virtual Gallery</a>
                    </li>
                    <li>
                        <a href="https://pg-bootstrap.vercel.app/">Artist Patti Grabel</a>
                    </li>
                    <li>
                        <a href="http://persephone.pythonanywhere.com/">Universal Univercity</a>
                    </li>
                </ul>




                <button>
                    <NavLink to="/portfolio/webdevelopment">WEB Dev </NavLink>
                </button>

             </div>

        </div>

    );
}


export default Portfolio;
