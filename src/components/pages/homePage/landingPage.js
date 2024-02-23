import "./landingPage.css";
import {Link} from "react-router-dom";
import bgImage from "./landingPageBg.jpg";

function LandingPage() {
    return (
        <div className="landingParent">
            <div className="landingContent">
                //*<h1 className="landingTitle">For The People</h1>*//
                <h1 className="landingTitle">Compassion Creates Change</h1>
                <button className="landDonate">
                <a target="_blank" rel="noopener" href="https://docs.google.com/forms/d/e/1FAIpQLSc9_Qu3yH-YX5PXIsMJIWdHeNLmLZBP6v7hZmFe2ypopmPG0Q/viewform" className="landingButton"> Volunteer Now!</a>
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
