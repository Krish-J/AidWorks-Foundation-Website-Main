import React from "react";
import "../../../App.css";
import "./aidWorks5kMap.css";
import {Link} from "react-router-dom";


function AidWorks5kMap(){
    return(
        <div className="aidWorks5kMapParent">
            <div className="mapContent">
                <h1 className="mapTitle">
                    Map of Route
                </h1>
                <hr className="mapTextBreak"></hr>
                <p className="mapDescription">
                    Reprehenderit ut deserunt culpa nisi. Laborum sint quis ullamco voluptate anim eu eiusmod eu anim quis sint mollit. Enim deserunt elit id aute est excepteur dolore duis aute pariatur. Mollit ex fugiat sit in incididunt do excepteur non. Occaecat proident nostrud consectetur aliquip anim exercitation nulla consectetur nostrud in irure ex.
                </p>
            </div>
            <div className="mapParent">
                <div className="map"/>
                <iframe className="plotaroute_map_2526168" src="https://www.plotaroute.com/embedmap/2526168?units=miles" frameborder="0" scrolling="no" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen>
                </iframe>
            </div>
        </div>
    );
}

export default AidWorks5kMap;