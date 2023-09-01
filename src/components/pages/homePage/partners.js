import "./partners.css";
import {Link} from "react-router-dom";
import labl from "../../companyLogos/labl.jpg";
import massGov from "../../companyLogos/massGov.jpg";
import shrewsburyGov from "../../companyLogos/shrewsburyGov.jpg";
import smoc from "../../companyLogos/smoc.png";
import ymca from "../../companyLogos/ymca.png";

function Partners() {
    return (
        <div className="partnersContainer">
            
            <div className="partnerText">
                <h1 className="partnersTitle">Our Partners and Sponsors</h1>
                <p className="partnersDescription">
                Our  partners and sponsors play an instrumental role in facilitating our support to families across Shrewsbury and its neighboring areas. Without the backing of these esteemed institutions, many individuals would grapple with significant integration challenges in the U.S. At Aidworks Foundation, we are profoundly grateful for the opportunity to work alongside our dedicated partners and sponsors, together turning aspirations into realities.
                </p>
            </div>
            <div className="partnerImages">
            <img className="logoImages" src={massGov}/>
            <img className="logoImages" src={shrewsburyGov}/>
            <img className="logoImages" src={smoc}/>
            <img className="logoImages" src={ymca}/>
            <img className="logoImages" src={labl}/>
            </div>
        </div>
    );
}

export default Partners;