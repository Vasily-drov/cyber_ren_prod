import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { useEffect } = React;
const tl = gsap.timeline()

gsap.registerPlugin(ScrollTrigger);

function AboutExt() {

    useEffect(() => {
        
        tl.fromTo("#venus", {x:-800, y:-700, opacity:0}, {
            x:-400,
            y:-100,
            opacity:1, 
            duration: 5,
            ease:"none",
        })

        tl.fromTo("#greg", {x:100,y:80,opacity:0, scale:0}, {
            x:-200,
            y:0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease:"back.out"
        })

        tl.fromTo("#liza", {x:0, opacity:0, scale:0}, {
            x:400,
            y:0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease:"back.out"
        })

        tl.fromTo("#vasya", {x:100, y:100, opacity:0, scale:0}, {
            x:0,
            y:0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease:"back.out"
        })

        
    
      });


    return (
        <div className="aboutext">
            <div className="container pageCont">
                <div className="row my-5">
                    <div className="col-lg-5">
                        <img id="venus"src="/about/venus.png" class="img-fluid" alt="..."></img>
                    </div>
                    <div className="col-lg-7">
                    <h2>OUR TEAM:</h2>

                    

                        <div className="card our-team" id="greg">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Gregg Watermann</h5> 
                                <p className="card-text">fghjbknml,;</p>  
                                <a href="/about">link</a>
                            </div>
                        </div>
                        <br />
                        <div className="card our-team" id="liza">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Elizabeth Mendez</h5> 
                                <p className="card-text">fghjbknml,;</p>  
                                <a href="/about">link</a>
                            </div>
                        </div>
                        <br />
                        <div className="card our-team" id="vasya">
                            <img src="..." class="card-img-top" alt="..."></img>
                            <div className="card-body">
                                <h5 className="card-title">Vasily Drovetskiy</h5> 
                                <p className="card-text">fghjbknml,;</p>  
                                <a href="/about">link</a>
                            </div>
                        </div>
                        

                    </div>

                </div>

                
            </div>
        </div>
    );
}


export default AboutExt;
