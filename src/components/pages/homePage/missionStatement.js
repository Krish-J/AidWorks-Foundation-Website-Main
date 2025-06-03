import "./missionStatement.css";
import {Link} from "react-router-dom";
import bgImage from "./landingPageBg.jpg";

function MissionStatement() {
    return (
        <div className="missionContainer">
            <div className="missionContent">
                <h1 className="missionTitle">Our Mission</h1>
                <p1 className="missionText">
                AidWorks Foundation, a student-led nonprofit, is dedicated to enhancing the lives of children in foster care by providing essential resources, emotional support, and advocacy. Our mission is to empower foster families and ensure that every child experiences stability, love, and the opportunity to thrive.
                </p1>
                
            </div>
        </div>
    );
}

export default MissionStatement;