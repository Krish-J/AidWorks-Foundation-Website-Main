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
                Starting at Plainfield Avenue near White City, runners will proceed onto Villa Road and then Vancroft Avenue before turning left on to the scenic South Quinsigamond Road. Runners will then exit the beautiful road and turn left onto Grace Avenue. Then, they will turn onto Dorianna Avenue before taking a quick turn to Kenda Road. The final stretch of the run consists of a long run through Worthington Avenue, quick turns at Power Avenue, Svenson Road, and Naples Street before finally ending the run at the start point on Plainfield Avenue.
                </p>
            </div>
            <div className="mapParent">
                <div className="map"/>
                <iframe className="plotaroute_map_2626350" src="https://www.plotaroute.com/embedmap/2626350?units=miles" frameborder="0" scrolling="no" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen>
                </iframe>
            </div>
        </div>
    );
}

export default AidWorks5kMap;
