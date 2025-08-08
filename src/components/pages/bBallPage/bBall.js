import React from "react";
import "../../../App.css";
import "./bBall.css";
import {Link} from "react-router-dom";
import bBallPhoto from "./bBallPhoto.jpg";


function BBall() {
    return (
        <div className="bBallParent">
            <div className="bBallContent">
                <div className="bBallRunBox">
                    <hr className="bBallRunLine"></hr>
                    <h1 className="bBallRunTitle">
                        TAWF Basketball Tournament
                    </h1>
                    <hr className="bBallRunLine"></hr>
                    <p className="bBallExplain">
                    Mark your calendars for August 17th, 2025 at 12:30 pm, and join us at our Basketball Tournament!
                    </p>
                    <a className="registrationButton" href="https://forms.gle/zHy7besQ7rEVw8fX6" target="_blank" rel="noopener noreferrer">Register Here!</a>
                </div>
                <img class="bBallRunPhoto" src={bBallPhoto}/>
            </div>
        </div>
    );
}

export default BBall;