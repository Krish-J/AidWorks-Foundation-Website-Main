import React from "react";
import "../../../App.css";
import "./ourTeam.css"
import Jai from "./jaiPhoto.jpg";
import Siddh from "./siddhPhoto.jpg";
import Madhavan from "./madhavanPhoto.jpg";
import Krish from "./krishPhoto(2).jpg";
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
                        Head of Technology
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
                        Director of Logisitics
                        </p>
                        <p class="text-blk feature-text">
                        I'm Aadi, an 11th-grade student whose passions include helping others, problem solving, and giving back to my community.
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
                        Head of Volunteer Services
                        </p>
                        <p class="text-blk feature-text">
                        I'm Madhavan, a 12th grader passionate about helping the community and managing volunteers.
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
                        Head of Public Health
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
                        Executive Assistant
                        </p>
                        <p class="text-blk feature-text">
                        I'm Juan, a 12th-grade student who loves reading, working out and volunteering in my community.
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
                        Deputy Director of Technology
                        </p>
                        <p class="text-blk feature-text">
                        I'm Arnav, a 12th-grade student who enjoys coding, tennis and learning how things work.
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
                        Director of Public Affairs
                        </p>
                        <p class="text-blk feature-text">
                        I'm Siddh, a 12th grade student who enjoys outdoor activities, talking, and helping out my community
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