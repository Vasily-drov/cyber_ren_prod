import {React, useEffect, useRef} from "react";
import {Row,Col } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




function AnimationPortfolio() {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef();

    useEffect(() => {

        const element = ref.current;
        let q = element.querySelector(".con")
        let c = q

        makeBoxes(18);

        function makeBoxes(n){
            for (let i=0; i<n; i++){
                let b = document.createElement('div');
                b.className = 'f ldiv'
                c.appendChild(b);
            }
        }


        gsap.to(c, 0.4, {perspective:200, backgroundColor:'#303030'});
        let l = c.querySelectorAll('.f')
        let ii = 0;
        l.forEach(myFunction);

        function myFunction(item) {

            ii = ii +1

            gsap.set(item, {
                left:'55%',
                top:'50%',
                margin:-200,
                width: "350",
                height: "350",
                borderRadius:'10%',
                backgroundImage:'url(/portfolio/preview/'+String(ii)+".gif",
                backgroundSize: "cover",
                clearProps:'transform',
                backfaceVisibility:'hidden '
            });

            item.tl = gsap.timeline({paused:true, defaults:{immediateRender:true}})
                .fromTo(item, {
                    scale:0.33*3,
                    rotationX:ii/l.length*360,// - 90,
                    transformOrigin:String("50% 50% -1050%")
                },{
                    rotationX:'+=360',
                    ease:'ease-out'
                })
                .timeScale(0.05)

            item.addEventListener('mouseover', (e)=>{ gsap.to(e.currentTarget, {opacity:1, scale:1.1, duration:0.4, ease:'expo'}) });
            item.addEventListener('mouseout', (e)=>{ gsap.to(e.currentTarget, {opacity:1, scale:1, duration:0.2, ease:'back.out(3)', overwrite:'auto'}) });
            item.addEventListener('click', (e)=>{ console.log("portfolio/content/"+e.currentTarget.style.backgroundImage.slice(25,-5))
                window.open("content/"+e.currentTarget.style.backgroundImage.slice(25,-5)+"MOV", '_self', ) });

        };

        gsap.to(element.querySelector("#arrow4"), {
            y:10,
            duration: 0.8,
            yoyo: true,
            repeat: Infinity,
            ease: "slow"
        });


        ScrollTrigger.create({
            trigger: '#scrollDist',
            start: "top top",
            end:"bottom bottom",

            onRefresh: self => {
                l.forEach((b, i) =>{ gsap.set(b.tl, {progress:self.progress}); })
            },
            onUpdate: self => {
                l.forEach((b, i) =>{ gsap.to(b.tl, {progress:self.progress}); })
            }
        });

    });

    return (
            <div className="tes" ref={ref}>

                    <Row>
                         <Col>
                            <p className="text-center fs-2 ph">scroll down</p>
                         </Col>
                    </Row>
                    <Row>
                         <Col className="text-center mb-3">
                            <img src="/portfolio/arrow4.ico" className="img-fluid" id="arrow4" alt="..."></img>
                         </Col>

                    </Row>
                <div id="scrollDist" className="ldiv"></div>
                <div id="conta" className="con ldiv"></div>

            </div>
    );
}

export default AnimationPortfolio;


