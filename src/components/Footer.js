import "./Footer.css";
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import React from "react";  

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Vancouver</p>
                            <p>British Columbia</p>                
                            <p>Canada</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{color: "#fff", marginRight: "2rem" }} />
                        +1-778-870-1268</h4>
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem" }} />
                        nicholas.theisen1997@gmail.com </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>My name is Nicholas Theisen and I am a web developer. I have a passion for coding and I am always looking for new challenges. I am a quick learner and I am always looking to improve my skills. I am currently looking for a job as a web developer. </p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/nicholas-theisen-495b1a220/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={20} style={{color: "#fff", marginRight: "2rem" }} />
                        </a>
                        <a href="https://github.com/NicholasTheisen" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={20} style={{color: "#fff", marginRight: "2rem" }} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;