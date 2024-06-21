import React from "react";
import "../../../App.css";
import "./aidWorks5kInfo.css";
import {Link} from "react-router-dom";
import RunMap from "./5kRunMap.png";
import Prizes from "./prizes.jpg";
import Benefits from "./benefits.jpg";
import Countdown from "./countdown.js"

function AidWorks5kInfo(){
    return(
        <div className="aidWorks5kInfoParent">
            <div className="aidWorks5kInfoContent">
                <h1 className="aidWorks5kInfoTitle">
                    Information
                </h1>
                <div className="aidWorks5kColumns">
                    <div className="cost">
                        <img class="columnPhotos" src={RunMap}/>
                        <h1 className="columnTitles">Cost</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                        First 50: $25
                        <br/>
                        <br/>
                        Regular Cost: $35
                        <br/>
                        <br/>
                        Cost from July 20th Onwards: $45
                        </p>
                    </div>
                    <div className="benefits">
                        <img className="columnPhotos" src={Benefits}/>
                        <h1 className="columnTitles">Benefits</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                        All proceeds from the event will directly contribute to alleviating medical expenses for cancer patients in need within our community. We will work closely with local healthcare providers to identify and support those facing financial challenges due to medical treatments.                        </p>
                    </div>
                    <div className="prizes">
                        <img className="columnPhotos" src={Prizes}/>
                        <h1 className="columnTitles">Prizes</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                        Aliqua quis elit mollit id aliqua nostrud occaecat. Elit laborum commodo adipisicing ad. Laboris fugiat labore ea laborum officia nulla. Minim dolor amet sint esse nulla occaecat sint id incididunt nostrud dolore. Esse voluptate amet nulla aliqua. Cupidatat ea dolore amet amet consequat nostrud.
                        </p>
                    </div> 
                </div>
                <Countdown/>
                <div className="countdownParent">
                    <div className="countdown-container">
                        <h1 className="columnTitles">Countdown</h1>
                        <div className="countdown-item" id="days">00</div>
                        <div className="countdown-item" id="hours">00</div>
                        <div className="countdown-item" id="minutes">00</div>
                        <div className="countdown-item" id="seconds">00</div>
                        <div className="countlabel">
                            <p className="label1">Days</p>
                            <p className="label2">Hours</p>
                            <p className="label3">Mins</p>
                            <p className="label4">Sec</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AidWorks5kInfo;