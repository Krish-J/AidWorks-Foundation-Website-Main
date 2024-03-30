import React from "react";
import "../../../App.css";
import "./aidWorks5kInfo.css";
import {Link} from "react-router-dom";
import RunMap from "./5kRunMap.png";
import Prizes from "./prizes.jpg";
import Benefits from "./benefits.jpg";

function AidWorks5kInfo(){
    return(
        <div className="aidWorks5kInfoParent">
            <div className="aidWorks5kInfoContent">
                <h1 className="aidWorks5kInfoTitle">
                    Information
                </h1>
                <div className="aidWorks5kColumns">
                    <div className="location">
                        <img class="columnPhotos" src={RunMap}/>
                        <h1 className="columnTitles">Location</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                        Aliqua quis elit mollit id aliqua nostrud occaecat. Elit laborum commodo adipisicing ad. Laboris fugiat labore ea laborum officia nulla. Minim dolor amet sint esse nulla occaecat sint id incididunt nostrud dolore. Esse voluptate amet nulla aliqua. Cupidatat ea dolore amet amet consequat nostrud.
                        </p>
                    </div>
                    <div className="benefits">
                        <img className="columnPhotos" src={Benefits}/>
                        <h1 className="columnTitles">Benefits</h1>
                        <hr className="columnTextBreak"></hr>
                        <p className="columnText">
                        Aliqua quis elit mollit id aliqua nostrud occaecat. Elit laborum commodo adipisicing ad. Laboris fugiat labore ea laborum officia nulla. Minim dolor amet sint esse nulla occaecat sint id incididunt nostrud dolore. Esse voluptate amet nulla aliqua. Cupidatat ea dolore amet amet consequat nostrud.
                        </p>
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
                <div className="countdownParent">
                    {/*ADD COUNTDOWN HERE*/}
                    
                </div>
            </div>
        </div>
    );
}

export default AidWorks5kInfo;