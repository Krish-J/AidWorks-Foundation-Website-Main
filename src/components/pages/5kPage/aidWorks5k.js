import React from "react";
import "../../../App.css";
import "./aidWorks5k.css";
import {Link} from "react-router-dom";
import aidWorks5kPhoto from "./aidWorks5kPhoto.jpg";


function AidWorks5k() {
    return (
        <div className="aidWorks5kParent">
            <div className="aidWorks5kContent">
                <div className="aidWorks5kRunBox">
                    <hr className="aidWorks5kRunLine"></hr>
                    <h1 className="aidWorks5kRunTitle">
                        The AidWorks Foundation 5k-Run
                    </h1>
                    <hr className="aidWorks5kRunLine"></hr>
                    <p className="aidWorks5kExplain">
                    Mark your calendars for August 17th, 2024 at 9:30 am, and join us at Saint Anne's for a day of fun and compassion. Whether you're a seasoned runner, a casual jogger, or simply want to show your support, everyone is welcome at the Shrewsbury 5K Run for Medical Relief. Together, we can make a positive impact and help ensure that medical care remains accessible to all in our community.
                    </p>
                    <a className="registrationButton" onClick={() => document.getElementById("registrationTitle").scrollIntoView()}>Register Here!</a>
                    {/* <a target="_blank" rel="noopener" href="https://www.zeffy.com/en-US/ticketing/5f8ad0da-6279-403e-afc5-1d5550ca477f" className="registrationButton"> Register Here </a> */}
                    <a className="registrationButton" href="https://forms.gle/zHy7besQ7rEVw8fX6" target="_blank" rel="noopener noreferrer">Volunteer with Us!</a>
                </div>
                <img class="aidWorks5kRunPhoto" src={aidWorks5kPhoto}/>
            </div>
        </div>
    );
}

export default AidWorks5k;