import React from "react";
import "../../../App.css";
import "./aidWorks5kInfo.css";
import {Link} from "react-router-dom";
import Cost from "./cost.png";
import SaintAnnes from "./saintannes.png";
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
                    
                    <div className="benefits">
                        <img className="columnPhotos" src={Benefits}/>
                        <h1 className="columnTitles">Benefits</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                        All proceeds from the event will directly contribute to alleviating medical expenses for cancer patients in need within our community. We will work closely with local healthcare providers to identify and support those facing financial challenges due to medical treatments.</p>
                    </div>
                    <div className="cost">
                        <img class="columnPhotos" src={Cost}/>
                        <h1 className="columnTitles">Cost</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                        First 50: $25
                        <br/>
                        <br/>
                        Regular Cost: $35
                        <br/>
                        <br/>
                        Cost from August 10th Onwards: $45
                        </p>
                    </div>
                    <div className="prizes">
                        <img className="columnPhotos" src={SaintAnnes}/>
                        <h1 className="columnTitles">About Saint Anne's</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                        St. Anne's is a Catholic Christian community rich in a tradition of giving and caring for its Church and its people. Their mission is to inform and educate through their lived faith at St. Anne's. For generations, St. Anne's has been a beacon of hope and compassion, embodying the principles of love, charity, and community service. This year, they are proud to support AidWorks' 5k run, as their commitment to aiding those in need aligns perfectly with AidWorks' mission to create positive change through community involvement and support.
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
                        <br></br>
                        <center><div>The 5K has been pushed back to August 17th, we apologize for the inconvenience.</div></center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AidWorks5kInfo;