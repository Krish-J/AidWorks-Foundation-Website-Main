// Timeline.js
import React from "react";
import "./events.css";
import PageHero from "../../PageHero.js";
import { Stagger, Reveal } from "../../motion/Reveal.js";
import TurkeyTrot from "./pictures/turkey_trot.jpeg";
import Garba from "./pictures/garba.jpg";
import Gummere from "./pictures/gummere.jpg";
import FoodDrive from "./pictures/food_drive.jpg";
import ChristmasFD from "./pictures/christmasFD.jpg";
import BBall from "./pictures/bball.webp";

const timelineData = [
  {
    date: "November 2023",
    title: "Volunteering at Turkey Trot for the Memory",
    description:
      "AidWorks volunteers helped provide operational support and clean-up services at the annual Turkey Trot for the Memory 5K. This race is held on Thanksgiving Day and the proceeds go to Alzheimer's research.",
    image: TurkeyTrot,
  },
  {
    date: "December 2023",
    title: "Christmas Food Drive",
    description:
      "AidWorks Foundation hosted a food drive at Shrewsbury High School with donations heading towards individuals in the community.",
    image: FoodDrive,
  },
  {
    date: "July 2024",
    title: "Cleaning Gummere Forest Trail",
    description:
      "AidWorks Foundation collaborated with Light A Better Light Inc. to help pick up trash and clean up the Gummere Forest Trail. ",
    image: Gummere,
  },
  {
    date: "October 2024",
    title: "Garba with Sewa USA",
    description:
      "AidWorks Foundation sent volunteers to Sewa USA for a garba event. We provided critcal setup, clean-up, and crowd control services.",
    image: Garba,
  },
  {
    date: "December 2024",
    title: "Restocking Shrewsbury Community Fridge",
    description:
      "AidWorks Foundation restocked the community fridge located in Shrewsbury to help families in our town during the holiday season.",
    image: ChristmasFD,
  },
  {
    date: "August 2025",
    title: "Basketball Tournament Fundraiser",
    description:
      "AidWorks hosted this event to raise funds to provide resources for children in the foster care system.",
    image: BBall,
  },

  // Add more events here
];

function Timeline() {
  // Newest first.
  const events = [...timelineData].reverse();

  return (
    <div className="eventsPage">
      <PageHero
        eyebrow="What we've been up to"
        title="Our"
        accent="Events"
        lead="From food drives and trail clean-ups to fundraisers — a look back at the work our volunteers have done across Shrewsbury and its neighboring areas."
      />

      <section className="aw-section timeline">
        <div className="aw-container">
          <div className="timeline__line" aria-hidden="true" />

          {events.map((event, index) => (
            <Stagger
              className={`timeline__row ${
                index % 2 === 0 ? "timeline__row--left" : "timeline__row--right"
              }`}
              key={event.title}
              gap={0.08}
              amount={0.2}
            >
              <Reveal className="timeline__marker">
                <span className="timeline__dot" />
              </Reveal>

              <Reveal scale className="aw-card aw-card--hover timeline__card">
                <div className="timeline__media">
                  <img src={event.image} alt={event.title} loading="lazy" />
                </div>
                <div className="timeline__body">
                  <span className="timeline__date">{event.date}</span>
                  <h3 className="aw-display timeline__title">{event.title}</h3>
                  <p className="timeline__text">{event.description}</p>
                </div>
              </Reveal>
            </Stagger>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Timeline;
