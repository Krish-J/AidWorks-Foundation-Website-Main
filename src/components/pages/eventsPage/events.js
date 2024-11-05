// Timeline.js
import React from "react";
import "./events.css";

const timelineData = [
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event"
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event"
    },
    {
        date: "Date of Event",
        title: "Name of Event",
        description: "Description of Event"
    },
    // Add more events here
];

function Timeline() {
    return (
        <>

            <div className="mainEventsParent">
            <div className="navBarCover"> </div>
            <div className="EventsParent">
            <div className="timelineHeader">
            <p class="text-blk team-head-text">
                    Our Journey
                </p>
                <center><p>Should I have smth here?</p></center>
            </div>

            <section className="timeline">
                <div className="container">
                    {timelineData.map((event, index) => (
                        <div key={index} className="timelineItem">
                            <h2 className="timelineDate">{event.date}</h2>
                            <div className="timelineContent">
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            </div>
            </div>
        </>
    );
}

export default Timeline;
