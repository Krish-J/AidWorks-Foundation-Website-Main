import React from "react";
import "../../../App.css";
import "./bBallInfo.css";
import Cost from "./cost.png";
import SaintAnnes from "./saintannes.png";
import FosterCare from "./fosterCare.png";
import Countdown from "./countdown.js"

function BBallInfo(){
    return(
        <div className="aidWorks5kInfoParent">
            <div className="aidWorks5kInfoContent">
                <h1 className="aidWorks5kInfoTitle">
                    Information
                </h1>
                <div className="aidWorks5kColumns">
                    <div className="columnBox">
                        <img className="columnPhotos" src={FosterCare} alt={"foster care photo"}/>

                        <h1 className="columnTitles">Prizes</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                            The winning team will choose a foster care shelter to receive all proceeds from the tournament. Winning teams will also receive awards, and all participants will enjoy free food.</p>
                    </div>
                    <div className="columnBox">
                        <img class="columnPhotos" src={Cost}/>
                        <h1 className="columnTitles">Cost</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                            The entry fee is $15 per person. Teams may have 3–4 players, resulting in a total cost of $45–$60 per team.
                            <br/>
                            <br/>
                            Note: Teams will need to register together under the same Google Form.
                        </p>
                    </div>
                    <div className="columnBox">
                        <img className="columnPhotos" src={SaintAnnes}/>
                        <h1 className="columnTitles">Specifics</h1>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BBallInfo;