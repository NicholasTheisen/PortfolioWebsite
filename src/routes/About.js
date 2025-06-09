import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";
import AboutImg from "../components/AboutImg";

const About = () => {
    return (
        <div>
            <Navbar/>
            <AboutImg heading="ABOUT ME" text="I am a full stack developer with the passion to develop professional and modern websites."/>
            <AboutContent />
            <Footer/>
        </div>
    );
    }
    
export default About;