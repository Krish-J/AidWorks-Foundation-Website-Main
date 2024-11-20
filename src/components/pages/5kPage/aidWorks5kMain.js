import React from "react";
import "../../../App.css";
import AidWorks5k from "./aidWorks5k.js";
import AidWorks5kInfo from "./aidWorks5kInfo.js"
import AidWorks5kMap from "./aidWorks5kMap.js";
import AidWorks5kSponsors from "./aidWorks5kSponsors.js";
import AidWorks5kRegistration from "./aidWorks5kRegistration.js";


function AidWorks5kMain(){
    return(
        <>
        <AidWorks5k/>
        <AidWorks5kInfo/>
        <AidWorks5kMap/>
        {/* <AidWorks5kSponsors/> */}
        <AidWorks5kRegistration/>
        </>
    );
}

export default AidWorks5kMain;