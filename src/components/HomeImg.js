import "./HomeImg.css";
import React from "react";
import HomeBackgroundImg from "../assets/backgroundimg.jpg";
import { Link } from "react-router-dom";

const HomeImg = () => {
    return <div className="home">
        <div className="mask">
            <img className="homebackground-img" src={HomeBackgroundImg} alt="HomeBG" />
        </div>
        <div className="content">
            <p>Come Join Me On My Journey</p>
            <h1>Web Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>;
};

export default HomeImg;