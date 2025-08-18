import React from "react";
import "../../../App.css";
import "./ourTeam.css"
import * as motion from "motion/react-client"
import Siddh from "./pictures/siddhPhoto.png";
import Madhavan from "./pictures/madhavanPhoto.jpg";
import Krish from "./pictures/krishPhoto.jpg";
import Trung from "./pictures/trungPhoto.jpg";
import Aadi from "./pictures/aadiPhoto.jpg";
import Arnav from "./pictures/arnavPhoto.jpg";
import Advith from "./pictures/advithPhoto.jpg";
import Ishan from "./pictures/ishanPhoto.jpg";
import Connor from "./pictures/connorPhoto.jpg";
import Emily from "./pictures/emilyphoto.jpg";
import Brian from "./pictures/brianPhoto.jpg";
import Raghu from "./pictures/raghuPhoto.jpg";
import Gayatri from "./pictures/gayatriPhoto.jpg";
import Raashid from "./pictures/raashidPhoto.jpg";
import Pratap from "./pictures/pratapPhoto.jpg";
import Satya from "./pictures/satyaPhoto.png";
import Aarya from "./pictures/aaryaPhoto.jpg";
import Mahesh from "./pictures/maheshPhoto.jpg";
import KatherineM from "./pictures/katherineMPhoto.jpg";
import Lillian from "./pictures/lillianPhoto.jpg";
import Shreya from "./pictures/shreyaPhoto.jpg";

function TeamCard({image, name, position, bio}) {
    return (
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <motion.div className="card"
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.8}}
            >
                <div className="team-image-wrapper">
                    <img className="team-member-image" src={image} alt={"Photo of " + name} />
                </div>
                <p className="text-blk name"> {name} </p>
                <p className="text-blk position"> {position} </p>
                <p className="text-blk feature-text"> {bio} </p>
            </motion.div>
        </div>
    );
}
const boardOfDirectors = [
    {
        image: Trung,
        name: "Trung Nguyen",
        position: "Chief Executive Officer",
        bio: "I'm Trung, a sophomore in college who is passionate about managing non-profits, finances, and benefiting society."
    },
    {
        image: Krish,
        name: "Krish Jain",
        position: "Chief Information Officer",
        bio: "I'm Krish, a sophomore in college who enjoys coding, teaching, and giving back to the community."
    },
    {
        image: Aadi,
        name: "Aadi Dixit",
        position: "Chief Compliance Officer",
        bio: "I'm Aadi, a freshman in college who loves to problem-solve and help others within our community."
    },
    {
        image: Madhavan,
        name: "Madhavan Rajagopalan",
        position: "Chief Operating Officer",
        bio: "I'm Madhavan, a sophomore in college who is passionate about helping the community and managing volunteers."
    }
];

const ourTeam = [

    {
        image: Siddh,
        name: "Siddh Patel",
        position: "Deputy Chief of Human Resources Officer",
        bio: "I'm Siddh, a sophomore in college who enjoys outdoor activities, talking, and helping out my community."
    },
    {
        image: Brian,
        name: "Brian Olsen",
        position: "Head of Volunteering",
        bio: "I'm Brian, a high school senior passionate about basketball, golf, education, and helping others."
    },
    {
        image: Ishan,
        name: "Ishan Jain",
        position: "Head of Finance",
        bio: "I'm Ishan, a high school senior passionate about giving back to communities, having fun, and designing my own CAD projects."
    },
    {
        image: Emily,
        name: "Emily Chow",
        position: "Head of Marketing",
        bio: "I'm Emily, a high school senior, musician, and rhythmic gymnastics coach who aims to create a more uplifting community!"
    },
    {
        image: Satya,
        name: "Satya Divakaruni",
        position: "Head of Public Health",
        bio: "I'm Satya, a junior in high school and I enjoy helping others through various different community service projects and campaigns."
    },
    {
        image: Arnav,
        name: "Arnav Sharma",
        position: "Technology Manager",
        bio: "I'm Arnav, a sophomore in college who enjoys coding, tennis and learning how things work."
    },
    {
        image: Raghu,
        name: "Raghu Rajagopalan",
        position: "Director of Food Security",
        bio: "I'm Raghu, a high school sophomore passionate about volunteering and enthusiastic about helping our community."
    },
    {
        image: null,
        name: "Adi Kinhikar",
        position: "Volunteering Department",
        bio: ""
    },
    {
        image: null,
        name: "Emad Makhdumi",
        position: "Volunteering Department",
        bio: ""
    },
    {
        image: null,
        name: "Katherine",
        position: "Marketing Department",
        bio: ""
    },
    {
        image: Advith,
        name: "Advith Velamakanni",
        position: "Marketing Department",
        bio: "I'm Advith, a junior in college passionate about filmmaking, fencing, and supporting our community."
    },
    {
        image: Connor,
        name: "Connor Duffy",
        position: "Marketing Department",
        bio: "I'm Connor, a junior in college who is passionate about fostering positivity and hope through community service and outreach."
    },
    {
        image: Pratap,
        name: "Pratap Srivastava",
        position: "Marketing Department",
        bio: "I'm Pratap, an high school senior who loves playing piano, cars, aviation, and staying active."
    },
    {
        image: Gayatri,
        name: "Gayatri Iyer",
        position: "Finance Department",
        bio: "I'm Gayatri, a high school senior who is very interested in volunteering, community service, and business & finance projects."
    },
    {
        image: Aarya,
        name: "Aarya Deepak",
        position: "Finance Department",
        bio: "I'm Aarya, a freshman in college who loves helping out his local community through fundraising and volunteering."
    },
    {
        image: Mahesh,
        name: "Mahesh Manneru",
        position: "Finance Department",
        bio: "I'm Mahesh, a high school senior who loves to code and play chess. I want to make a good change in our community."
    },
    {
        image: Raashid,
        name: "Raashid Abdullah",
        position: "Public Health Department",
        bio: "I'm Raashid, a high school senior who loves to do art, is ecstatic about biology, and likes to volunteer to give back to the community."
    },
    {
        image: Shreya,
        name: "Shreya Saikia",
        position: "Public Health Department",
        bio: "Hi my name is Shreya and I am excited to be apart of a community that’s passionate about public health!"
    },
    {
        image: KatherineM,
        name: "Katherine Mui",
        position: "Public Health Department",
        bio: "Hi I’m Katherine. I’m passionate about helping our community and I’m excited to be apart of TAWF!"
    },
    {
        image: Lillian,
        name: "Lillian Wen",
        position: "Public Health Department",
        bio: "I’m Lillian, a senior passionate about public health and committed to supporting community wellness through education and outreach."
    },
];


function OurTeam() {
    return (
        <div className="mainTeamParent">
            <div className="navBarCover"></div>
            <div className="teamParent">

                <div className="responsive-container-block teamContainer">
                    <p className="text-blk team-head-text">
                        Board of Directors
                    </p>
                    <div className="responsive-container-block">
                        {boardOfDirectors.map((member, index) => (
                            <TeamCard key={index} {...member} />
                        ))}
                    </div>
                <p className="text-blk team-head-text">
                    Our Team
                </p>
                <div className="responsive-container-block">
                    {ourTeam.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            
            </div>
              
        </div>
        </div>
    );

    
}

export default OurTeam;
