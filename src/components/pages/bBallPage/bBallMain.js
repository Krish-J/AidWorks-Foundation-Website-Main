import React from "react";
import "../../../App.css";
import BBall from "./bBall.js";
import AidWorks5kInfo from "./aidWorks5kInfo.js"
import AidWorks5kMap from "./aidWorks5kMap.js";
import AidWorks5kRegistration from "./aidWorks5kRegistration.js";


export default function BBallMain(){
    return(
        <>
        <BBall/>
        <AidWorks5kInfo/>
        <AidWorks5kMap/>
        <AidWorks5kRegistration/>
        </>
    );
}