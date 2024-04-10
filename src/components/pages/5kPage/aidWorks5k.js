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
                    We are thrilled to present the Shrewsbury 5K Run for Medical Relief, a community-driven event aimed at raising funds for families/individuals struggling with medical bills. This event will take place on June 22, 2024, at the Shrewsbury Common. Our 5K Run is designed to be a fun and engaging 5K run or walk, promoting health and wellness while contributing to a noble cause.
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