import "./landingPage.css";
import {Link} from "react-router-dom";
import bgImage from "./landingPageBg.jpg";

function LandingPage() {
    return (
        <div className="parent">
            <div className="content">
                <h1>For The People</h1>
                <button className="landDonate">
                    <Link to="/donate" className="landingButton">
                        Donate
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default LandingPage;