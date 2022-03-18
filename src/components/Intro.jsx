import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tl = gsap.timeline()
const { useEffect} = React;

gsap.registerPlugin(ScrollTrigger);

function Intro() {

    useEffect(() => {

        ScrollTrigger.matchMedia({
            "(min-width: 800px)": function() {
                gsap.fromTo("#venus_mirror", {x:0, y:-50}, {
                    x:1100,
                    y:-50,
                    ease:"none",
                    scrollTrigger: {
                        trigger: "#venus_mirror",
                        start: 'top center', 
                        end: 'bottom center',
                        scrub: 1,
                      }
                    });
                
            },
        })
        
        gsap.fromTo("#venus_mirror", {x:-230,y:0, opacity:0,}, {x:0, y:-50, duration:5, opacity:1, ease: "power3.out"})
        
        gsap.set("h1 div", {yPercent:-103})

        tl.to("h1 div", {duration:1, yPercent:0, stagger:0.05, ease:"expo.inOut"})
        tl.to("h1 div:not([data-char='.'])", {duration:1, yPercent:103, stagger:0.1, ease:"expo.inOut"})
    
      });
    return (
        <div className="intro">
                <div className="row">  
                    <div className="col ">  
                        <h1 className="main_letters">
                            <div data-char=".">C</div>
                            <div data-char="Y">*'</div>
                            <div data-char=".">B</div>
                            <div data-char="E">Z</div>
                            <div data-char=".">R</div>
                        </h1>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">  
                    <div className="col">
                        <h1 className="main_letters">
                            <div data-char=".">R</div>
                            <div data-char="E">&</div>
                            <div data-char="N">#</div>
                            <div data-char=".">A</div>
                            <div data-char="I">!</div>
                            <div data-char="S">7</div>
                            <div data-char=".">S</div>
                            <div data-char="A">;/</div>
                            <div data-char=".">N</div>
                            <div data-char="C">%</div>
                            <div data-char=".">E</div>
                        </h1>
                    </div>
                </div>
                <div className="row">  
                    <div className="col offset-lg-7 offset-6">
                        <h1 className="main_letters other_letters">
                            <div data-char="p">$</div>
                            <div className="ms-1" data-char=".">r</div>
                            <div data-char="o">*</div>
                            <div data-char=".">d</div>
                            <div data-char="u">^</div>
                            <div data-char="c">=</div>
                            <div data-char=".">t</div>
                            <div data-char="i">!</div>
                            <div data-char=".">o</div>
                            <div data-char="n">%</div>
                        </h1>
                    </div>
                </div>
            <div className="row v_m">
                <div className="col-lg-8">
                    <img src="/venus_mirorr.png" class="img-fluid" id="venus_mirror" alt="..."></img>
                </div>
            </div>
        </div>
    );
}

export default Intro;


