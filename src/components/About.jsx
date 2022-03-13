import React from "react";


function About() {


    return (
        <div className="about">
            <div className="container pageCont vh-100">
                <div className="row my-5">
                    <h1> PHILOSOPHY OF CYBER RENAISSANCE</h1>
                </div>
                <div className="row">
                    <p className="fs-3 my-3">
                        Renaissance itself wasn’t only about brilliant artists and philosophers.
                        It was also about philanthropists and benefactors who supported all these geniuses and together were making a difference in the world.
                        There’s no shortage of money to do the sorts of things they did,
                        but what’s holding us back today is a shortage of vision.
                        The Renaissance would never be remembered if it’s leading members had simply made piles of cash. No one cares about that for any length of time.
                        We believe we should try to generate a cyber renaissance in our own societies. 
                    </p>
                </div>
                <div className="row our-team">
                    <h2>OUR TEAM:</h2>
                    <div>
                        <div className="col-lg-4">
                            <a href="/about">Gregg Watermann</a>
                        </div>
                        <div className="col-lg-4">
                            <a href="/about">Elizabeth Mendez</a>
                        </div>
                        <div className="col-lg-4">
                            <a href="/about">Vasily Drovetskiy</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;
