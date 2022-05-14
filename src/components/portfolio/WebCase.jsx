
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
        review: "With great pleasure, I want to share my gratitude to  Cyber Renaissance for helping me create my new website - " +
            "that with their vision captured the essence of my artistic practice. Their patience and understanding of my needs & concerns was admirable. " +
            "With full confidence, I would highly recommend Cyber Renaissance.  - Patti Grabel" ,
        link: "https://patti-grabel.com/",
        photo: "../portfolio/photos/pg_face.jpeg",
        social: "https://www.instagram.com/pattigrabel/"
    },

    {   index: 1,
        description: "Virtual 3D gallery",
        img:"/portfolio/nftemple.gif",
        review: "It was amazing to work with Cyber Renaissance - Gregg Watermann",
        link: "/portfolio/room.html",
        photo: "../portfolio/photos/greg.jpg",
        social: "https://www.instagram.com/GREGWATERMANN/"},

    {   index: 2,
        description: "Educational social media",
        img: "/portfolio/uu.gif",
        review: "Professional, Wonderfull! Above expectations, delivered faster then expected. - Alicia Pérez" ,
        link: "http://persephone.pythonanywhere.com/",
        photo: "../portfolio/photos/Alicia.jpg",
        social: "/"},

    {   index: 3,
        description: "Multi-language landing page",
        img:"/portfolio/can.gif",
        review: "With great pleasure, I want to share my gratitude to  Cyber Renaissance for helping me create my new website - " +
            "that with their vision captured the essence of my artistic practice. Their patience and understanding of my needs & concerns was admirable. " +
            "With full confidence, I would highly recommend Cyber Renaissance.  - Kristina Odobetckaia" ,
        link: "https://canibeyourfriend.com/",
        photo: "../portfolio/photos/kristina.jpg",
        social: "https://www.instagram.com/odobetcaia/"}]

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
            <div>
                <h1>{projects[this.state.index].description}</h1>

                <button className="back-to-top caseBtn btn contactUs my-3 col-lg-6 col-sm-6 col-6"  onClick={this.previousCase}>
                    <h5>Prev</h5>
                </button>
                <button className="back-to-top caseBtn btn contactUs my-3 col-lg-6 col-sm-6 col-6"  onClick={this.nextCase}>
                    <h5>Next</h5>
                </button>
                <div className='websiteViewer'>
                    <a href={projects[this.state.index].link}  target="_blank">
                        <img className="d-block w-100 " src= {projects[this.state.index].img} alt="Web site example"/>
                    </a>
                </div>

                <br />
                <Container>
                <Row className="review">

                    <Col className='col-lg-3 col-5 offset-lg-0 offset-4'>
                        <a href={projects[this.state.index].social} className="" target="_blank">
                            <img className="rounded col-lg-12 col-10 clientPhoto" src= {projects[this.state.index].photo} alt="Client's photo"/>
                        </a>
                    </Col>

                    <Col className='col-lg-8 col-12 offset-lg-1'>
                        <h3>{projects[this.state.index].review}</h3>
                    </Col>


                <br/>
                </Row>
                </Container>
                <button className="back-to-top caseBtn btn contactUs my-3 col-lg-6 col-sm-6 col-6"  onClick={this.previousCase}>
                    <h5>Prev</h5>
                </button>
                <button className="back-to-top caseBtn btn contactUs my-3 col-lg-6 col-sm-6 col-6"  onClick={this.nextCase}>
                    <h5>Next</h5>
                </button>
                {/* Set click handler */}
            </div>
        )
    }

}

export default WebCase;
