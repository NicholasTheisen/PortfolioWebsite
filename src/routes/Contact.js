import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Form from "../components/Form";
import AboutImg from "../components/AboutImg";

const Contact = () => {
    return (
        <div>
            <Navbar/>
            <AboutImg heading="CONTACT ME" text="Feel free to contact me!"/>
            <Form />
            <Footer/>
        </div>
    );
    }

export default Contact;