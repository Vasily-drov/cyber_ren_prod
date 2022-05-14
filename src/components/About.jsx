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
            <div className="container ">
                <div className="row">
                    <div className="col-lg-4 col-4">

                    </div>
                    <div className="col-lg-6  col-8">
                        <h1 className="philosophy shimmer"> WE ARE...</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-11">


                        <p className="fs-3 my-3 ph"> Happy to be your representative in a thriving digital world! Our Independent Development studio is based in Miami USA.
                            Constant adaptation of modern innovations in Web development helps us achieve contemporary quality and security of a product delivered in a timely manner.</p>
                        <a href="portfolio/webdevelopment"> <h2 className="fs-3 my-3 ph">Let our happy clients and work portfolio speak for us.</h2></a>


                        <p className="fs-3 my-3 ph">  We face hard tasks with courage, allowing us to provide a wide range of different <a href="/packages">services</a> for any of your Web needs.
                            We can cover everything from simple tasks to 3D animated experiences, from a basic landing page to a fully equipped Web 3.0 store.
                            Our flexibility and work attitude are based on personal customer relationships.
                            </p>
                        <h3 className="fs-3 my-3 ph">From us you will receive The Best price-quality result.</h3>

                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-0">
                        <img id="v_b"src="/about/v_b.png" className="img-fluid" alt="..."></img>
                    </div>
                    <div className="col-lg-6 col-8">
                        <h1 className="philosophy shimmer"> PHILOSOPHY</h1>
                        <h1 className="philosophy shimmer" id="cyber"> OF CYBER</h1>
                        <h1 className="philosophy shimmer" id="renaissance"> RENAISSANCE</h1>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-lg-11">
                        <p className="fs-3 my-3 ph">
                            The Renaissance itself wasn’t only about brilliant artists and philosophers.
                            It was also about philanthropists and benefactors who supported all these geniuses and together were making a difference in the world.
                            There’s no shortage of money to do the sorts of things they did but what’s holding us back today is a shortage of vision.
                            The Renaissance would never be remembered if it’s leading members had simply made piles of cash.
                            No one cares about that for any length of time. We believe we should try to generate a cyber renaissance in our own societies.

                        </p>
                        <p className="fs-3 my-3 ph fw-bold ">We believe we should try to generate a cyber renaissance in our own societies. </p>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;
