
import React, { Component } from 'react'
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const { useEffect } = React;
gsap.registerPlugin(ScrollTrigger);


let projects = [
    {   index: 0,
        description: "Artist's personal website",
        img:"/portfolio/pg.gif",
        review: "With great pleasure , I want to share my gratitude to  Cyber Renaissance for helping me create my new website - " +
            "that with their vision captured the essence of my artistic practice. Their patience and understanding of my needs & concerns was admirable. " +
            "With full confidence, I would highly recommend Cyber Renaissance.  " ,
        link: "https://patti-grabel.com/",
        photo: "../portfolio/photos/pg_face.jpeg",
        social: "https://www.instagram.com/pattigrabel/"
    },

    {   index: 1,
        description: "Virtual 3D gallery",
        img:"/portfolio/nftemple.gif",
        review: "With great pleasure , I want to share my gratitude to  Cyber Renaissance for helping me create my new website - ",
        link: "https://vr-v.herokuapp.com/room.html",
        photo: "",
        social: ""},

    {   index: 2,
        description: "Educational social media",
        img: "/portfolio/uu.gif",
        review: "Amazing! And Wonderfull" ,
        link: "http://persephone.pythonanywhere.com/",
        photo: "../portfolio/photos/Alicia.jpg",
        social: "/"},

    {   index: 3,
        description: "Multi-language landing page",
        img:"/portfolio/can.gif",
        review: "With great pleasure , I want to share my gratitude to  Cyber Renaissance for helping me create my new website - " +
            "that with their vision captured the essence of my artistic practice. Their patience and understanding of my needs & concerns was admirable. " +
            "With full confidence, I would highly recommend Cyber Renaissance.  " ,
        link: "https://canibeyourfriend.com/",
        photo: "",
        social: "/"}]

class WebCase extends Component {

    constructor(props){
        super(props)

        // Set initial state
        this.state = {
            index : 0
          }
        // Binding this keyword
        this.nextCase = this.nextCase.bind(this)
        this.previousCase = this.previousCase.bind(this)
    }
    nextCase(){
        // Changing state
        if (this.state.index < 3){
        this.setState((prevState) => {
            return { index: prevState.index + 1}
        })
        }
        else {
            this.setState((prevState) => {
                return { index: 0}
            })
        }

    }
    previousCase(){
        // Changing state
        if (this.state.index > 0)
        this.setState((prevState) => {
            return { index: prevState.index - 1}
        })
        else {
            this.setState((prevState) => {
                return { index: 3}
            })
        }
    }

    render(){
        return (
            <Container>
                <h2>{projects[this.state.index].description}</h2>
                <button className="back-to-top btn contactUs my-3 col-lg-6 col-10"  onClick={this.previousCase}>
                    <h5>-Back-</h5>
                </button>
                <button className="back-to-top btn contactUs my-3 col-lg-6 col-10"  onClick={this.nextCase}>
                    <h5>----></h5>
                </button>
                <a href={projects[this.state.index].link}  target="_blank">
                    <img className="d-block w-100" src= {projects[this.state.index].img} alt="Web site example"/>
                </a>
                <a href={projects[this.state.index].social}  target="_blank">
                    <img className="rounded-circle" src= {projects[this.state.index].photo} alt="Client's photo"/>
                </a>

                <h3>{projects[this.state.index].review}</h3>



                {/* Set click handler */}


            </Container>
        )
    }

}

export default WebCase;
