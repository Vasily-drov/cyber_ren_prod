import React from "react";
import { gsap } from "gsap";

const { useEffect } = React;
const tl = gsap.timeline()

function About() {

    useEffect(() => {
        
        tl.fromTo("#v_b", {x:-600}, {x:0, duration:1, ease:"power3.out"})
        tl.to("#v_b", {
            duration: 3,
            x: -150,
            y: 100,
            repeat: -1,
            stagger: 2,
            yoyo: true,
            ease: "sine.inOut"
        });
    
      });


    return (
        <div className="about">
            <div className="container pageCont">
                <div className="row my-5">
                <div className="col-lg-4">
                    <img id="v_b"src="/about/v_b.png" class="img-fluid" alt="..."></img>
                </div>
                <div className="col-lg-7 offser-lg-1">
                    <h1 className="philosophy shimmer"> PHILOSOPHY</h1>
                    <h1 className="philosophy shimmer" id="cyber"> OF CYBER</h1>
                    <h1 className="philosophy shimmer" id="renaissance"> RENAISSANCE</h1>
                </div>
                    
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
