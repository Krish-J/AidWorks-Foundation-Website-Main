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
                    Aliqua velit laborum aute nisi adipisicing ad proident. Veniam aliquip ut quis deserunt culpa irure exercitation exercitation ad ad eu labore. Enim minim Lorem duis duis quis. Aute qui mollit nisi non consectetur est sint incididunt enim culpa ex. Qui minim minim excepteur irure occaecat elit laborum deserunt. Laboris dolor ea laborum nostrud elit nisi excepteur. Laboris do commodo sit laborum commodo fugiat enim sint sit.
                    </p>
                    <button className="registrationButtonParent" onClick={() => window.scrollTo({ top: 3420, behavior: "smooth" })}>
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