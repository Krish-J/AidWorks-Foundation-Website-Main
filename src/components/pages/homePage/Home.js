import React from "react";
import "../../../App.css";
import LandingPage from "./landingPage";
import MissionStatement from "./missionStatement";
import AboutUs from "./aboutUs";
import Partners from "./partners";


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