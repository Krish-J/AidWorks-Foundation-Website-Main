import "./missionStatement.css";
import {Link} from "react-router-dom";
import bgImage from "./landingPageBg.jpg";

function MissionStatement() {
    return (
        <div className="missionContainer">
            <div className="missionContent">
                <h1 className="missionTitle">Our Mission</h1>
                <p1 className="missionText">
                AidWorks Foundation, a student-led nonprofit supported by the local government, 
                is dedicated to helping households in Shrewsbury and surrounding areas.
                Our aim is to bridge the gap in access to opportunities for immigrants throughout Massachusetts.
                </p1>
                
            </div>
        </div>
    );
}

export default MissionStatement;