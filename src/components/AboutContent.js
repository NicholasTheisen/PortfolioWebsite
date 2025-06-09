import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react.png";
import Ruby from "../assets/ruby.png";

const AboutContent = () => {
    return <div className="about">
        <div className="left">
            <h1>My Passionate Journey</h1>
            <p>
                Hi! My name is Nicholas Theisen. I am a full stack developer with the passion to develop professional and modern websites. I have experience in HTML, CSS, JavaScript, React, Node.js, Express.js, PostgreSQL, and Ruby on Rails. I am a quick learner and I am always looking to improve my skills. I gained my knowlege through Lighthouse Labs Web Developement Bootcamp, and I am currently working on personal projects to further my skills.
                I am currently looking for a full-time position as a junior developer. If you are interested in working with me, please feel free to contact me from the form below.
                </p>
            <Link to="/contact">
            <button className="btn">Contact Me</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="React"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Ruby} className="img" alt="Ruby"/>
                </div>
            </div>
        </div>
    </div>;
}


export default AboutContent;