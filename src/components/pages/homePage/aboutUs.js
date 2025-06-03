import "./aboutUs.css";
import {Link} from "react-router-dom";
import teamPhoto from "./teamPhoto2.jpg";

function AboutUs() {
    return (
        <div className="aboutParent">
            <div className="aboutContent">
                <h1 className="aboutTitle">Who We Are</h1>
                <div className="aboutImageMobile">
                    <img className="teamImageMobile" src={teamPhoto}/>
                </div>
                <p className="aboutText">We are a group of passionate and dedicated high schoolers and college students committed to making a positive impact in our community. Through our collective efforts, we aim to lend a helping hand to those in need, foster connections, and create a better environment for everyone.</p>
            </div>
            <div className="aboutImage">
            <img className="teamImage" src={teamPhoto}/>
            </div>
        </div>
    );
}

export default AboutUs;