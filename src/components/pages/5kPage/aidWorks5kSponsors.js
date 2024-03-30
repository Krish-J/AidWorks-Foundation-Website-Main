import React from "react";
import "../../../App.css";
import "./aidWorks5kSponsors.css";
import {Link} from "react-router-dom";
import Sponsor1 from "./5kRunMap.png";
import Sponsor2 from "./5kRunMap.png";
import Sponsor3 from "./5kRunMap.png";
import Sponsor4 from "./5kRunMap.png";
import Sponsor5 from "./5kRunMap.png";
import Sponsor6 from "./5kRunMap.png";


function Sponsors() {
    return (
        <div className="SponsorsParent">
            <div className="SponsorsText">
                <h1 className="SponsorsTitle">Our Sponsors</h1>
                <p className="SponsorsDescription">
                This achievement is made possible entirely thanks to our sponsors' support. We owe a debt of gratitude to each and every one of them for their instrumental role in making our goals a reality.
                </p>
            </div>
            <div className="Images">
                <img className="logos" src={Sponsor1}/>
                <img className="logos" src={Sponsor2}/>
                <img className="logos" src={Sponsor3}/>
                <img className="logos" src={Sponsor4}/>
                <img className="logos" src={Sponsor5}/>
                <img className="logos" src={Sponsor6}/>

            </div>
        </div>
    );
}

export default Sponsors;