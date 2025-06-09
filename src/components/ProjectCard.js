import "./ProjectCard.css";
import React from "react";
import DeezDemRenos from "../assets/deezdemrenos.png";
import PhotoLabs from "../assets/photolabs.jpeg";
import TinyApp from "../assets/tinyapp.png";
import Tweeter from "../assets/tweeter.png";
import { NavLink } from "react-router-dom";

const ProjectCard = () => {
    return (
        <div className="project-card-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
        <div className="project-card">
                <img src={ DeezDemRenos } alt="Dee'ZDem Reno's"/>
                <h2 className="project-title">Dee'ZDem Reno's</h2>
                <div className="project-description">
                    <p>Dee'ZDem Reno's is a project I did for a friend of mine for his start-up Home Renovation company. Check out his website below.</p>
                    <div className="project-btns">
                        <NavLink to ="https://deezdemrenos.ca" className="btn">Website</NavLink>
                    </div>
                </div>            
            </div>
            <div className="project-card">
                <img src={ PhotoLabs } alt="PhotoLabs"/>
                <h2 className="project-title">PhotoLabs</h2>
                <div className="project-description">
                    <p>PhotoLabs is a photo sharing website where users can upload and share their photos with others. Users can also like and comment on photos.</p>
                    <div className="project-btns">
                        <NavLink to ="https://github.com/NicholasTheisen/PhotoLabsMain" className="btn">GitHub</NavLink>
                    </div>
                </div>            
            </div>
            <div className="project-card">
                <img src={ TinyApp } alt="TinyApp"/>
                <h2 className="project-title">TinyApp</h2>
                <div className="project-description">
                    <p>TinyApp is a web application that shortents URL's with a unique encryption method, and allows users to be redirected using a shortened URL. Create an account and log-in to save your previous URL's you have generated.</p>
                    <div className="project-btns">
                        <NavLink to ="https://github.com/NicholasTheisen/tinyapp" className="btn">GitHub</NavLink>
                    </div>
                </div>            
            </div>
            <div className="project-card">
                <img src={ Tweeter } alt="Tweeter"/>
                <h2 className="project-title">Tweeter</h2>
                <div className="project-description">
                    <p>Tweeter is a simple Twitter clone we made in Bootcamp. You can create an account, post a Tweet, and like other people's tweets on your feed.</p>
                    <div className="project-btns">
                        <NavLink to ="https://github.com/NicholasTheisen/tweeter" className="btn">GitHub</NavLink>
                    </div>
                </div>            
            </div>
        </div>
    </div>
    );
};

export default ProjectCard;