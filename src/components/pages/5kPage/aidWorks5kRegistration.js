import React from "react";
import "../../../App.css";
import "./aidWorks5kRegistration.css";
import {Link} from "react-router-dom";

function AidWorks5kRegistration(){
    return(
        <div className="aidWorks5kRegistrationParent">
            <div className="registrationTitleParent">
                <h1 className="registrationTitle">Register Here</h1>
            </div>
            
            <div className="registrationParent">
                <iframe className="donationForm" src='https://www.zeffy.com/en-US/embed/ticketing/5f8ad0da-6279-403e-afc5-1d5550ca477f' allowpaymentrequest allowTransparency="true">
                    </iframe>
            </div>
        </div>
    );
}

export default AidWorks5kRegistration;