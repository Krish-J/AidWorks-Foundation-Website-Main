import React from "react";
import "../../../App.css";
import LandingPage from "./landingPage.js";
import MissionStatement from "./missionStatement.js";
import AboutUs from "./aboutUs.js";
import Partners from "./partners.js";


function Home(){
    return(
        <>
        <LandingPage/>
        <MissionStatement/>
        <AboutUs/>
        <Partners/>
        </>
    );
}

export default Home;