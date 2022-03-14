import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {About,Intro, Contact, Portfolio, PortfolioExt, AboutExt, PortfolioBlockchain} from "./index";

gsap.registerPlugin(ScrollTrigger);


function Home() {
    const panels = useRef([]);
    const panelsContainer = useRef();

    const createPanelsRefs = (panel, index) => {
        panels.current[index] = panel;
    };

    useEffect(() => {
        const totalPanels = panels.current.length;

        gsap.to(panels.current, {
            xPercent: -100 * (totalPanels - 1),
            ease: "none",
            scrollTrigger: {
                trigger: panelsContainer.current,
                pin: true,
                scrub: 1,
                snap: 1 / (totalPanels - 1),
                // base vertical scrolling on how wide the container is so it feels more natural.
                end: () => "+=" + panelsContainer.current.offsetWidth
            }
        });
    }, []);

    return (

        <div className="wrap">
            <div className="containe" ref={panelsContainer} id="content">
                <div
                    className="description panel blue contact"
                    ref={(e) => createPanelsRefs(e, 0)}>
                    <div>
                        <Intro/>
                        <div className="scroll-down">
                            Scroll down<div className="arrow"></div>
                        </div>
                    </div>
                </div>
                <section className="panel about" ref={(e) => createPanelsRefs(e, 1)}>
                    <About/>
                </section>
                <section className="panel about" ref={(e) => createPanelsRefs(e, 2)}>
                    <AboutExt/>
                </section>
                <section className="panel" ref={(e) => createPanelsRefs(e, 3)}>
                    <Portfolio/>
                </section>
                <section className="panel" ref={(e) => createPanelsRefs(e, 4)}>
                    <PortfolioExt/>
                </section>
                <section className="panel" ref={(e) => createPanelsRefs(e, 5)}>
                    <PortfolioBlockchain/>
                </section>
                <section className="panel orange contact" ref={(e) => createPanelsRefs(e, 6)}>
                   <Contact/>
                </section>

            </div>


        </div>
    );
}


export default Home;