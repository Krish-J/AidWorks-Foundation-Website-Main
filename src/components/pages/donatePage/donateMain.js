import React from "react";
import "../../../App.css";
import Donate from "./donate.js";
import DonateNav from "./donateNav";
import "./donateMain.css";


function DonateMain(){
    return(
        <>
        <DonateNav/>
        <Donate/>
        
        </>
    );
}

export default DonateMain;