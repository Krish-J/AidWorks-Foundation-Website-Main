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
                    Mark your calendars for June 22, 2024 (estimated date), and join us at the Shrewsbury High School Trails for a day of fun and compassion. Whether you're a seasoned runner, a casual jogger, or simply want to show your support, everyone is welcome at the Shrewsbury 5K Run for Medical Relief. Together, we can make a positive impact and help ensure that medical care remains accessible to all in our community.
                    </p>
                    <button className="registrationButtonParent" onClick={() => window.scrollTo({ top: 3650, behavior: "smooth" })}>
                        {/* <a target="_blank" rel="noopener" href="https://www.zeffy.com/en-US/ticketing/5f8ad0da-6279-403e-afc5-1d5550ca477f" className="registrationButton"> Register Here </a> */}
                        <a className="registrationButton"> Register Here </a>
                    </button>
                </div>
                <img class="aidWorks5kRunPhoto" src={aidWorks5kPhoto}/>
            </div>
        </div>
    );
}

export default AidWorks5k;