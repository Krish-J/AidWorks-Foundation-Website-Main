// Timeline.js
import React from "react";
import "./events.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TurkeyTrot from "./pictures/turkey_trot.jpeg"
import Garba from "./pictures/garba.jpg"


const timelineData = [
    {
        date: "November 2023",
        title: "Volunteering at Turkey Trot for the Memory",
        description: "AidWorks volunteers helped provide operational support and clean-up services at the annual Turkey Trot for the Memory 5K. This race is held on Thanksgiving Day and the proceeds go to Alzheimer's research.",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)',
        image: TurkeyTrot
    },
    {
        date: "October 2024",
        title: "Garba with Sewa USA",
        description: "AidWorks Foundation sent volunteers to Sewa USA for a garba event. We provided critcal setup, clean-up, and crowd control services.",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)',
        image: Garba
    },
    // Add more events here
];


function Timeline() {

    var events = [];

    for (var i = 0; i < timelineData.length; i++) {

        events.push(
            <VerticalTimelineElement
                contentStyle={{ background: timelineData[i].backgroundColor , color: timelineData[i].textColor }}
                contentArrowStyle={{ borderRight: '7px solid ' + timelineData[i].backgroundColor }}
                date={ timelineData[i].date }
                iconStyle={{ background: timelineData[i].backgroundColor }}
                dateClassName={ "timelineDate" }
            >
                <h3 className="vertical-timeline-element-title">{ timelineData[i].title }</h3>
                <p>
                    { timelineData[i].description }
                </p>
                <img className={ "timelineContent" } src={ timelineData[i].image }></img>
            </VerticalTimelineElement>);
    }

    return (
        <>
            <div className="mainEventsParent">
                <div className="navBarCover"> </div>
                <div className="EventsParent">
                    <div className="timelineHeader">
                        <p class="text-blk team-head-text">
                            Our Journey
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
