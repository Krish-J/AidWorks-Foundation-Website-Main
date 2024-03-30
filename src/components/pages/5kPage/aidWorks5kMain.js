import React from "react";
import "../../../App.css";
import AidWorks5k from "./aidWorks5k.js";
import AidWorks5kInfo from "./aidWorks5kInfo.js"
import AidWorks5kMap from "./aidWorks5kMap.js";


function AidWorks5kMain(){
    return(
        <>
        <AidWorks5k/>
        <AidWorks5kInfo/>
        <AidWorks5kMap/>
        </>
    );
}

export default AidWorks5kMain;