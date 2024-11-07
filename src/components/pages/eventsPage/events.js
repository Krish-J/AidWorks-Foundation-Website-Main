// Timeline.js
import React from "react";
import "./events.css";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


const timelineData = [
    {
        date: "Today",
        title: "Info about the timeline",
        description: "You guys can change the timelineData section to add in the events. Free free to add as many events as you want, the timeline will auto create the new events on the timeline.",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)'
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)'
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)'
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)'
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)'
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)'
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)'
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)'
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event",
        backgroundColor: 'rgb(33, 150, 243)',
        textColor: 'rgb(255, 255, 255)'
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
                dateClassName={ "date" }
            >
                <h3 className="vertical-timeline-element-title">{ timelineData[i].title }</h3>
                <p>
                    { timelineData[i].description }
                </p>
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
                {events}
            </VerticalTimeline>

        </>
    );
}


export default Timeline;
