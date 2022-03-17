import {React, useEffect, useRef} from "react";
import {Row,Col, Container, } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




function AnimationPortfolio() {

    gsap.registerPlugin(ScrollTrigger);

    const ref = useRef();

    useEffect(() => {

        const element = ref.current;

        let q = element.querySelector(".con")

        let c = q

        console.log(c)
        makeBoxes(30);

        function makeBoxes(n){
            for (let i=0; i<n; i++){
                let b = document.createElement('div');
                b.className = 'f ldiv'
                c.appendChild(b);
            }
        }
        console.log(c)

        gsap.to(c, 0.4, {perspective:200, backgroundColor:'#fff'});


        Object.keys(c).forEach(function (key){
            console.log(c[key]);
        });


        let l = c.querySelectorAll('.f')
        console.log(l)

        let ii = 0
        l.forEach(myFunction, ii);



        function myFunction(item, index) {
            console.log(item)
            index = index + 1;
            gsap.set(item, {
                left:'55%',
                top:'50%',
                margin:-250,
                width: 400,
                height: 400,
                borderRadius:'10%',
                backgroundImage:'url(/portfolio/art/'+String(index)+"/1.jpg",
                clearProps:'transform',
                backfaceVisibility:'hidden'
            });
            console.log('url(/portfolio/art/'+String(index)+"/"+String(index)+".jpg")
            item.tl = gsap.timeline({paused:true, defaults:{immediateRender:true}})
                .fromTo(item, {
                    scale:0.3,
                    rotationX:index/l.length*360,// - 90,
                    transformOrigin:String("50% 50% -500%")
                },{
                    rotationX:'+=360',
                    ease:'none'
                })
                .timeScale(0.05)

            item.addEventListener('mouseover', (e)=>{ gsap.to(e.currentTarget, {opacity:0.5, scale:0.36, duration:0.4, ease:'expo'}) });
            item.addEventListener('mouseout', (e)=>{ gsap.to(e.currentTarget, {opacity:1, scale:0.3, duration:0.2, ease:'back.out(3)', overwrite:'auto'}) });
            item.addEventListener('click', (e)=>{ window.open(e.currentTarget.style.backgroundImage.slice(5,-2), '_blank') });

        }



        ScrollTrigger.create({
            trigger: '#scrollDist',
            start: "top top",
            end:"bottom bottom",
            onRefresh: self => {
                l.forEach((b, i) =>{ gsap.set(b.tl, {progress:self.progress}); })
            },
            onUpdate: self => { console.log(self.progress)
                l.forEach((b, i) =>{ gsap.to(b.tl, {progress:self.progress});console.log("done") })
            }
        });



    });






    return (

            <div className="tes" ref={ref}>

                    <Row>
                        <Col className="col">
                <div id="scrollDist" className="ldiv"></div>
                            <p>asbvfku</p>
                            <h1>sdfldhjJHGYJKFE</h1>
                <div id="conta" className="con ldiv"></div>
                        </Col>
                        <Col>
                            <p>asbvfku</p>
                            <h1>sdfldhjJHGYJKFE</h1>
                        </Col>
                     </Row>
            </div>

    );
}

export default AnimationPortfolio;


