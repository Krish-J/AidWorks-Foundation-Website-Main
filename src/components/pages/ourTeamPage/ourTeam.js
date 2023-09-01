import React from "react";
import "../../../App.css";
import "./ourTeam.css"
import Jai from "./jaiPhoto.jpg";
import Siddh from "./siddhPhoto.jpg";
import Madhavan from "./madhavanPhoto.jpg";
import Krish from "./krishPhoto.jpg";
import Juan from "./juanPhoto.jpg";
import Trung from "./trungPhoto.jpg";
import Aadi from "./aadiPhoto.jpg";
import Arnav from "./arnavPhoto.jpg";


function OurTeam(){
    return(
        <div className="mainTeamParent">
            <div className="navBarCover"> </div>  
        <div className="teamParent">
            <div class="responsive-container-block teamContainer">
                <p class="text-blk team-head-text">
                    Our Team
                </p>
                <div class="responsive-container-block">
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                    <div class="card">
                        <div class="team-image-wrapper">
                        <img class="team-member-image" src={Trung}/>
                        </div>
                        <p class="text-blk name">
                        Trung Nguyen
                        </p>
                        <p class="text-blk position">
                        Executive Director
                        </p>
                        <p class="text-blk feature-text">
                        I'm Trung, a 12th-grader passionate about managing non-profits, finances, and benefiting society.
                        </p>
                    </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                    <div class="card">
                        <div class="team-image-wrapper">
                        <img class="team-member-image" src={Krish}/>
                        </div>
                        <p class="text-blk name">
                        Krish Jain
                        </p>
                        <p class="text-blk position">
                        Director of Technology
                        </p>
                        <p class="text-blk feature-text">
                        I'm Krish, a 12th-grade student who enjoys coding, teaching, and giving back to the community.
                        </p>
                    </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                    <div class="card">
                        <div class="team-image-wrapper">
                        <img class="team-member-image" src={Aadi}/>
                        </div>
                        <p class="text-blk name">
                        Aadi Dixit
                        </p>
                        <p class="text-blk position">
                        Logisitics Director
                        </p>
                        <p class="text-blk feature-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                    <div class="card">
                        <div class="team-image-wrapper">
                        <img class="team-member-image" src={Madhavan}/>
                        </div>
                        <p class="text-blk name">
                        Madhavan Rajagopalan
                        </p>
                        <p class="text-blk position">
                        Volunteer Services Director
                        </p>
                        <p class="text-blk feature-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                    <div class="card">
                        <div class="team-image-wrapper">
                        <img class="team-member-image" src={Jai}/>
                        </div>
                        <p class="text-blk name">
                        Jaisuria Satish Babu
                        </p>
                        <p class="text-blk position">
                        Public Health Coordinator
                        </p>
                        <p class="text-blk feature-text">
                        I'm Jaisuria, a 12th-grade student passionate about medicine, badminton, and community health.
                        </p>
                    </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                    <div class="card">
                        <div class="team-image-wrapper">
                        <img class="team-member-image" src={Juan}/>
                        </div>
                        <p class="text-blk name">
                        Juan Leon
                        </p>
                        <p class="text-blk position">
                        Director of Marketing
                        </p>
                        <p class="text-blk feature-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                    <div class="card">
                        <div class="team-image-wrapper">
                        <img class="team-member-image" src={Arnav}/>
                        </div>
                        <p class="text-blk name">
                        Arnav Sharma
                        </p>
                        <p class="text-blk position">
                        Developer
                        </p>
                        <p class="text-blk feature-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    </div>
                    <div class="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                    <div class="card">
                        <div class="team-image-wrapper">
                        <img class="team-member-image" src={Siddh}/>
                        </div>
                        <p class="text-blk name">
                        Siddh Patel
                        </p>
                        <p class="text-blk position">
                        Executive Assistant
                        </p>
                        <p class="text-blk feature-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>
                    </div>
                </div>
            
            </div>
              
        </div>
        </div>
    );
}

export default OurTeam;