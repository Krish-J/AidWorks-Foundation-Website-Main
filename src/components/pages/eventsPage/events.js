// Timeline.js
import React from "react";
import "./events.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TurkeyTrot from "./pictures/turkey_trot.jpeg";
import Garba from "./pictures/garba.jpg";
import Gummere from "./pictures/gummere.jpg";
import FoodDrive from "./pictures/food_drive.jpg";
import ChristmasFD from "./pictures/christmasFD.jpg";

const timelineData = [
    {
        date: "November 2023",
        title: "Volunteering at Turkey Trot for the Memory",
        description: "AidWorks volunteers helped provide operational support and clean-up services at the annual Turkey Trot for the Memory 5K. This race is held on Thanksgiving Day and the proceeds go to Alzheimer's research.",
        backgroundColor: '#3772ff',
        textColor: 'rgb(255, 255, 255)',
        image: TurkeyTrot
    },
    {
        date: "December 2023",
        title: "Christmas Food Drive",
        description: "AidWorks Foundation hosted a food drive at Shrewsbury High School with donations heading towards individuals in the community.",
        backgroundColor: '#3772ff',
        textColor: 'rgb(255, 255, 255)',
        image: FoodDrive
    },
    {
        date: "July 2024",
        title: "Cleaning Gummere Forest Trail",
        description: "AidWorks Foundation collaborated with Light A Better Light Inc. to help pick up trash and clean up the Gummere Forest Trail. ",
        backgroundColor: '#3772ff',
        textColor: 'rgb(255, 255, 255)',
        image: Gummere
    },
    {
        date: "October 2024",
        title: "Garba with Sewa USA",
        description: "AidWorks Foundation sent volunteers to Sewa USA for a garba event. We provided critcal setup, clean-up, and crowd control services.",
        backgroundColor: '#3772ff',
        textColor: 'rgb(255, 255, 255)',
        image: Garba
    },
    {
        date: "December 2024",
        title: "Restocking Shrewsbury Community Fridge",
        description: "AidWorks Foundation restocked the community fridge located in Shrewsbury to help families in our town during the holiday season.",
        backgroundColor: '#3772ff',
        textColor: 'rgb(255, 255, 255)',
        image: ChristmasFD
    },
    // Add more events here
];


function Timeline() {

    const events = [];

    for (let i = timelineData.length - 1; i >= 0; i--) {

        events.push(
            <VerticalTimelineElement
                contentStyle={{ background: timelineData[i].backgroundColor , color: timelineData[i].textColor }}
                contentArrowStyle={{ borderRight: '7px solid ' + timelineData[i].backgroundColor }}
                date={ timelineData[i].date }
                iconStyle={{ background: timelineData[i].backgroundColor }}
                dateClassName={ "timelineDate" }
            >

                <div className="timelineItem">
                    <h3 className="vertical-timeline-element-title">{ timelineData[i].title }</h3>
                    <p> { timelineData[i].description } </p>
                    <img className="timelineContent" src={ timelineData[i].image }></img>
                </div>
            </VerticalTimelineElement>);
    }

    return (
        <>
            <div className="mainEventsParent">
                <div className="navBarCover"> </div>
                <div className="EventsParent">
                    <div className="timelineHeader">
                        <p class="text-blk team-head-text">
                            Our Events
                        </p>
                    </div>
                </div>
            </div>

            <VerticalTimeline
                lineColor={ 'black' }
            >
                { events }
            </VerticalTimeline>

        </>
    );
}


export default Timeline;
