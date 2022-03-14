import React, {useRef, useEffect} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {About,Intro} from "./index";

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
                    className="description panel blue"
                    ref={(e) => createPanelsRefs(e, 0)}>
                    <div>
                        <Intro/>
                        <div className="scroll-down">
                            Scroll down<div className="arrow"></div>
                        </div>

                    </div>
                </div>
                <section className="panel red" ref={(e) => createPanelsRefs(e, 1)}>
                    <About/>
                </section>
                <section className="panel orange" ref={(e) => createPanelsRefs(e, 2)}>
                    TWO
                </section>
                <section className="panel purple" ref={(e) => createPanelsRefs(e, 3)}>
                    THREE
                </section>
                <section className="panel green" ref={(e) => createPanelsRefs(e, 4)}>
                    FOUR
                </section>

            </div>


        </div>
    );
}


export default Home;