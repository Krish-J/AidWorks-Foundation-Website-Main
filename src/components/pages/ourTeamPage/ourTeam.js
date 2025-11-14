import React from "react";
import "../../../App.css";
import "./ourTeam.css"
import * as motion from "motion/react-client"
import Siddh from "./pictures/siddhPhoto.png";
import Madhavan from "./pictures/madhavanPhoto.jpg";
import Krish from "./pictures/krishPhoto.jpg";
import Trung from "./pictures/trungPhoto.png";
import Aarya from "./pictures/aaryaPhoto.jpg";
import Aahish from "./pictures/aahishPhoto.jpg";
import Adam from "./pictures/adamPhoto.jpg";
import Aadi from "./pictures/aadiPhoto.jpg";
import Arnav from "./pictures/arnavPhoto.jpg";
import Ayur from "./pictures/ayurPhoto.jpg";
import Advith from "./pictures/advithPhoto.jpg";
import Brian from "./pictures/brianPhoto.jpg";
import Connor from "./pictures/connorPhoto.jpg";
import Emad from "./pictures/emadPhoto.png";
import Emily from "./pictures/emilyphoto.jpg";
import Gayatri from "./pictures/gayatriPhoto.jpg";
import Harsh from "./pictures/harshPhoto.png";
import Harshith from "./pictures/harshithPhoto.jpg";
import Ishan from "./pictures/ishanPhoto.jpg";
import KatherineM from "./pictures/katherineMPhoto.jpg";
import KatherineS from "./pictures/katherineSPhoto.jpg";
import Mahesh from "./pictures/maheshPhoto.jpg";
import Pratap from "./pictures/pratapPhoto.jpg";
import Raashid from "./pictures/raashidPhoto.jpg";
import Raghu from "./pictures/raghuPhoto.jpg";
import Satya from "./pictures/satyaPhoto.png";
import Shivam from "./pictures/shivamPhoto.jpg";
import Lillian from "./pictures/lillianPhoto.jpg";
import Shreya from "./pictures/shreyaPhoto.jpg";
import Sree from "./pictures/sreePhoto.jpg";
import Tej from "./pictures/tejPhoto.png";
import Vedanth from "./pictures/vedanthPhoto.png"


import { FaLinkedin } from "react-icons/fa"; 


function TeamCard({image, name, position, bio, linkedIn}) {
    return (
        <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
            <motion.div className="card"
                whileHover={{scale: 1.03}}
                whileTap={{scale: 0.97}}
            >
                <div className="team-image-wrapper">
                    <img className="team-member-image" src={image} alt={"Photo of " + name} />
                </div>
                {linkedIn && (
                    <a
                        href={linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="linkedin"
                    >
                        <FaLinkedin size={24} color="#0A66C2" />
                    </a>
                )}
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
        bio: "I'm Trung, a sophomore in college who is passionate about managing non-profits, finances, and benefiting society.",
        linkedIn: "https://www.linkedin.com/in/trung-nguyen-150ba3254/",
    },
    {
        image: Krish,
        name: "Krish Jain",
        position: "Chief Information Officer",
        bio: "I'm Krish, a sophomore in college who enjoys coding, teaching, and giving back to the community.",
        linkedIn: "https://www.linkedin.com/in/krishjain718",
    },
    {
        image: Aadi,
        name: "Aadi Dixit",
        position: "Chief Compliance Officer",
        bio: "I'm Aadi, a freshman in college who loves to problem-solve and help others within our community.",
        linkedIn: "https://www.linkedin.com/in/aadi-dixit-0b084a288/",
    },
    {
        image: Madhavan,
        name: "Madhavan Rajagopalan",
        position: "Chief Operating Officer",
        bio: "I'm Madhavan, a sophomore in college who is passionate about helping the community and managing volunteers.",
        linkedIn: "https://www.linkedin.com/in/madhavan-rajagopalan-590597299/",
    }
];

const ourTeam = [
    {
        image: Siddh,
        name: "Siddh Patel",
        position: "Chief of Human Resources Officer",
        bio: "I'm Siddh, a sophomore in college who enjoys outdoor activities, talking, and helping out my community.",
        linkedIn: "https://www.linkedin.com/in/siddh-patel-80a029279/",
    },
    {
        image: Gayatri,
        name: "Gayatri Iyer",
        position: "Deputy Chief Executive Officer",
        bio: "I'm Gayatri, a high school senior who is very interested in volunteering, community service, and business & finance projects.",
        linkedIn: "https://www.linkedin.com/in/gayatri-iyer-907419317/"
    },
    {
        image: Satya,
        name: "Satya Divakaruni",
        position: "Deputy Chief Operating Officer",
        bio: "I'm Satya, a junior in high school and I enjoy helping others through various different community service projects and campaigns.",
        linkedIn: null
    },
    {
        image: Brian,
        name: "Brian Olsen",
        position: "Deputy Chief of Human Resources Officer",
        bio: "I'm Brian, a high school senior passionate about basketball, golf, education, and helping others.",
        linkedIn: "https://www.linkedin.com/in/brian-olsen-9195b7388/",
    },
    {
        image: Arnav,
        name: "Arnav Sharma",
        position: "Head of Technology",
        bio: "I'm Arnav, a sophomore in college who enjoys coding, calisthenics and giving back to the community.",
        linkedIn: "https://www.linkedin.com/in/arnav-sharma-26252622a"
    },
    {
        image: Raghu,
        name: "Raghu Rajagopalan",
        position: "Head of Volunteering",
        bio: "I'm Raghu, a high school sophomore passionate about volunteering and enthusiastic about helping our community.",
        linkedIn: null
    },
    {
        image: Pratap,
        name: "Pratap Srivastava",
        position: "Head of Marketing",
        bio: "I'm Pratap, an high school senior who loves playing piano, cars, aviation, and staying active.",
        linkedIn: "https://www.linkedin.com/in/pratap-srivastava-2339a5313/"
    },
    {
        image: Mahesh,
        name: "Mahesh Manneru",
        position: "Head of Finance",
        bio: "I'm Mahesh, a high school senior who loves to code and play chess. I want to make a good change in our community.",
        linkedIn: "https://www.linkedin.com/in/mahesh-manneru-4b282a304/"
    },
    {
        image: Harsh,
        name: "Harsh Cheepurpalli",
        position: "Volunteer Coordinator",
        bio: "I'm Harsh, a high school junior who enjoys playing basketball and running track, and I strive to bring change in my community.",
        linkedIn: "https://www.linkedin.com/in/harshit-cheepurpalli-435596348/"
    },
    {
        image: Emad,
        name: "Emad Makhdumi",
        position: "Volunteering Department",
        bio: "Hey! My name is Emad, I'm a senior in high school and I love basketball, lifting weights, and helping out the community through various initiatives.",
        linkedIn: null
    },
    {
        image: KatherineS,
        name: "Katherine Shan",
        position: "Marketing Department",
        bio: "I’m Katherine, a high school senior, dancer, and rhythmic gymnastics coach. I love volunteering whenever I can and helping others!",
        linkedIn: "https://www.linkedin.com/in/katherine-shan-b3a8b6369/"
    },
    {
        image: Advith,
        name: "Advith Velamakanni",
        position: "Marketing Department",
        bio: "I'm Advith, a freshman in college passionate about filmmaking, fencing, and supporting our community.",
        linkedIn: "https://www.linkedin.com/in/advith-velamakanni-aa7b3031b/"
    },
    {
        image: Connor,
        name: "Connor Duffy",
        position: "Marketing Department",
        bio: "I'm Connor, a junior in college who is passionate about fostering positivity and hope through community service and outreach.",
        linkedIn: "https://www.linkedin.com/in/connor-duffy-24219b372/"
    },
    {
        image: Aarya,
        name: "Aarya Deepak",
        position: "Finance Department",
        bio: "I'm Aarya, a freshman in college who loves helping out his local community through fundraising and volunteering.",
        linkedIn: "https://www.linkedin.com/in/aarya-deepak-938272342/"
    },
    {
        image: Raashid,
        name: "Raashid Abdullah",
        position: "Public Health Department",
        bio: "I'm Raashid, a high school senior who loves to do art, is ecstatic about biology, and likes to volunteer to give back to the community.",
        linkedIn: "https://www.linkedin.com/in/raashid-abdullah-1aab3a332/"
    },
    {
        image: Shreya,
        name: "Shreya Saikia",
        position: "Public Health Department",
        bio: "Hi my name is Shreya and I am excited to be apart of a community that’s passionate about public health!",
        linkedIn: ""
    },
    {
        image: KatherineM,
        name: "Katherine Mui",
        position: "Public Health Department",
        bio: "Hi I’m Katherine. I’m passionate about helping our community and I’m excited to be apart of TAWF!",
        linkedIn: "https://www.linkedin.com/in/katherine-mui-259a05384"
    },
    {
        image: Lillian,
        name: "Lillian Wen",
        position: "Public Health Department",
        bio: "I’m Lillian, a senior passionate about public health and committed to supporting community wellness through education and outreach.",
        linkedIn: ""
    },
];

const pastMembers = [
    {
        image: Ishan,
        name: "Ishan Jain",
        position: "Head of Finance",
        bio: "I'm Ishan, a high school senior passionate about giving back to communities, having fun, and designing my own CAD projects.",
        linkedIn: "https://www.linkedin.com/in/ishan-jain-728890315/",
    },
    {
        image: Emily,
        name: "Emily Chow",
        position: "Head of Marketing",
        bio: "I'm Emily, a high school senior, musician, and rhythmic gymnastics coach who aims to create a more uplifting community!",
        linkedIn: "https://www.linkedin.com/in/emily-chow-61b4b7312/",
    },

    {
        image: Sree,
        name: "Sreevatsen Kumar",
        position: "Former Volunteer Coordinator",
        bio: "I'm Sree, a freshman in college that loves playing video games, going for runs to stay active as well as building things using CAD.",
        linkedIn: ""
    },
    {
        image: Vedanth,
        name: "Vedanth Saranath",
        position: "Former Cross-Departmental Specialist",
        bio: "I'm Vedanth, a freshman in college who is passionate about coding and photography and is always open to learn more.",
        linkedIn: "https://www.linkedin.com/in/vedanth-saranath/"
    },
        {
        image: Tej,
        name: "Tejpravin Ravikumar",
        position: "Former Volunteer Coordinator",
        bio: "I'm Tejpravin Ravikumar, and I am an enthusiastic, determined college freshman who wishes to promote goodwill.",
        linkedIn: "http://linkedin.com/in/tejpravin-ravikumar-ab5b2230b/"
    },
        {
        image: Shivam,
        name: "Shivam Goel",
        position: "Former Public Health Coordinator",
        bio: "I'm Shivam, a sophomore in college passionate about giving back to my community, helping others, and medicine.",
        linkedIn: ""
    },
        {
        image: Adam,
        name: "Adam Munch",
        position: "Former Head of Technology",
        bio: "I’m Adam, a freshman in college who loves to problem-solve and help others within our community.",
        linkedIn: "https://www.linkedin.com/in/adam-munch-78baa48b/"
    },
        {
        image: Harshith,
        name: "Harshith Mothkuri",
        position: "Former Logistics Coordinator",
        bio: "I'm Harshith, a freshman in college who enjoys communcating with people as well as helping our community and people.",
        linkedIn: ""
    },
        {
        image: Ayur,
        name: "Ayur Nikhade",
        position: "Former Logistics Coordinator",
        bio: "I'm Ayur, a student passionate about the humanities. My goal is to bring a change in the community and make the world a better place.",
        linkedIn: "https://www.linkedin.com/in/ayur-nikhade-087b2430b/"
    },
    

]




function OurTeam() {
    return (
        <div className="mainTeamParent">
            <div className="navBarCover"></div>
            <div className="teamParent">

                <div className="responsive-iner-block teamContainer">
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

                <p className="text-blk team-head-text">
                    Our Alumni
                </p>
                <div className="responsive-container-block">
                    {pastMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>

            
            </div>
              
        </div>
        </div>
    );

    
}

export default OurTeam;
