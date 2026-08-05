import React from "react";
import "../../../App.css";
import LandingPage from "./landingPage.js";
import ScrollPage from "./scrollpage.js";
import MissionStatement from "./missionStatement.js";
import AboutUs from "./aboutUs.js";
import Partners from "./partners.js";
import CallToAction from "./callToAction.js";

function Home() {
  return (
    <>
      <LandingPage />
      <ScrollPage />
      <MissionStatement />
      <AboutUs />
      <Partners />
      <CallToAction />
    </>
  );
}

export default Home;
