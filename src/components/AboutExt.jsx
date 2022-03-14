import React from "react";
import { gsap } from "gsap";

const { useEffect } = React;
const tl = gsap.timeline()

function AboutExt() {

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
        <div className="aboutext">
            <div className="container pageCont">
                <div className="row my-5">
                <div className="col-lg-4">
                    <img id="v_b"src="/about/v_b.png" class="img-fluid" alt="..."></img>
                </div>

                </div>

                <div className="row our-team">
                    <h2>OUR TEAM:</h2>

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
    );
}


export default AboutExt;
