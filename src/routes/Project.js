import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutImg from "../components/AboutImg";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
    return (
        <div>
            <Navbar/>
            <AboutImg heading="PROJECTS" text="Check out my recent projects!"/>
            <ProjectCard/>
            <Footer/>
        </div>
    );
    }

export default Project;