import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { useEffect } = React;

gsap.registerPlugin(ScrollTrigger);


function About() {

    useEffect(() => {

        ScrollTrigger.matchMedia({

            "(min-width: 800px)": function() {
                
                gsap.fromTo("#v_b", {x:0, y:0}, {
                    x: -150,
                    y: 100,
                    duration: 3,
                    yoyo: true,
                    repeat: Infinity,
                    ease: "sine.out"
                })
            },

            "(max-width: 799px)": function() {
                
                gsap.fromTo("#v_b", {x:50, y:-50}, {
                    x: -50,
                    y: 0,
                    duration: 3,
                    yoyo: true,
                    repeat: Infinity,
                    ease: "sine.out"
                })
            }
        })
      });

    return (
        <div className="about">
            <div className="container pageCont">
                <div className="row">
                    <div className="col-lg-4 col-sm-5 col-5">
                        <img id="v_b"src="/about/v_b.png" className="img-fluid" alt="..."></img>
                    </div>
                    <div className="col-lg-6 col-sm-5 col-5">
                        <h1 className="philosophy shimmer"> PHILOSOPHY</h1>
                        <h1 className="philosophy shimmer" id="cyber"> OF CYBER</h1>
                        <h1 className="philosophy shimmer" id="renaissance"> RENAISSANCE</h1>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-11">
                        <p className="fs-3 my-3 ph">
                            Renaissance itself wasn’t only about brilliant artists and philosophers.
                            It was also about philanthropists and benefactors who supported all these geniuses and together were making a difference in the world.
                            There’s no shortage of money to do the sorts of things they did,
                            but what’s holding us back today is a shortage of vision.
                            The Renaissance would never be remembered if it’s leading members had simply made piles of cash. No one cares about that for any length of time.
                        </p>
                        <p className="fs-3 my-3 ph fw-bold ">We believe we should try to generate a cyber renaissance in our own societies. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;
