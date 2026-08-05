import "./landingPage.css";
import { Stagger, Reveal } from "../../motion/Reveal.js";

import teamPhoto2 from "../../../assets/mosaic/teamPhoto2.jpg";
import garba from "../../../assets/mosaic/garba.jpg";
import turkeyTrot from "../../../assets/mosaic/turkey_trot.jpg";
import foodDrive from "../../../assets/mosaic/food_drive.jpg";
import gummere from "../../../assets/mosaic/gummere.jpg";
import christmasFD from "../../../assets/mosaic/christmasFD.jpg";
import bball from "../../../assets/mosaic/bball.webp";
import fiveK from "../../../assets/mosaic/aidWorks5kPhoto.jpg";
import teamPhoto from "../../../assets/mosaic/teamPhoto.jpg";

const VOLUNTEER_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSc9_Qu3yH-YX5PXIsMJIWdHeNLmLZBP6v7hZmFe2ypopmPG0Q/viewform";

const partnerLogos = [
  { label: "SMOC", cls: "hero__partnerName--smoc" },
  { label: "United Way", cls: "hero__partnerName--united" },
  { label: "Light A Better Light", cls: "hero__partnerName--labl" },
  { label: "Wegmans", cls: "hero__partnerName--wegmans" },
];

/* The collage that stands in for a product screenshot: a mix of photos from
   across the site — team, food drives, trail clean-ups, garba, the 5K. */
const mosaic = [
  { src: teamPhoto2, alt: "AidWorks volunteers together", cls: "m-lead" },
  { src: garba, alt: "Garba event with Sewa USA", cls: "m-a" },
  { src: turkeyTrot, alt: "Turkey Trot for the Memory 5K", cls: "m-b" },
  { src: foodDrive, alt: "Christmas food drive", cls: "m-c" },
  { src: gummere, alt: "Cleaning Gummere Forest Trail", cls: "m-d" },
  { src: christmasFD, alt: "Restocking the community fridge", cls: "m-e" },
  { src: bball, alt: "Basketball tournament fundraiser", cls: "m-f" },
  { src: fiveK, alt: "AidWorks 5K", cls: "m-g" },
  { src: teamPhoto, alt: "AidWorks team", cls: "m-h" },
];

function LandingPage() {
  return (
    <header className="hero">
      <div className="hero__sky" aria-hidden="true">
        <svg className="hero__heart hero__heart--one" viewBox="0 0 100 100">
          <g className="hero__mark">
            <path d="M50 96C50 96 4 66 4 34 4 15 18 3 33 3c8 0 14 4 17 10 3-6 9-10 17-10 15 0 29 12 29 31 0 32-46 62-46 62z" />
          </g>
        </svg>
        <svg className="hero__heart hero__heart--two" viewBox="0 0 100 100">
          <g className="hero__mark hero__mark--two">
            <path d="M50 96C50 96 4 66 4 34 4 15 18 3 33 3c8 0 14 4 17 10 3-6 9-10 17-10 15 0 29 12 29 31 0 32-46 62-46 62z" />
          </g>
        </svg>
      </div>

      <div className="aw-container hero__inner">
      <Stagger className="hero__content" onMount delay={0.18} gap={0.12}>
          <Reveal as="h1" className="aw-display hero__title">
            Compassion
            <br />
            <em>Creates Change</em>
          </Reveal>

          <Reveal>
            <p className="hero__lead">
              AidWorks Foundation, a student-led nonprofit, is dedicated to
              enhancing the lives of children in foster care.
            </p>
          </Reveal>

          <Reveal className="hero__actions">
            <a
              className="hero__cta"
              target="_blank"
              rel="noreferrer"
              href={VOLUNTEER_FORM}
            >
              Volunteer Now!
            </a>
          </Reveal>

          <Reveal className="hero__logos">
            <div className="hero__logosTrack">
              {[0, 1].map((copy) => (
                <ul
                  className="hero__logosGroup"
                  key={copy}
                  aria-hidden={copy === 1}
                >
                  {partnerLogos.map((logo) => (
                    <li className="hero__logoChip" key={`${copy}-${logo.label}`}>
                      <span className={`hero__partnerName ${logo.cls}`}>
                        {logo.label}
                      </span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Reveal>
        </Stagger>
      </div>

      <Stagger className="hero__panelWrap" onMount delay={0.78}>
        <Reveal scale className="hero__panel">
          <div className="hero__mosaic">
            {mosaic.map((photo) => (
              <div key={photo.alt} className={`hero__tile ${photo.cls}`}>
                <img src={photo.src} alt={photo.alt} />
              </div>
            ))}

            <div className="hero__chip hero__chip--one">
              <span className="hero__chipValue">$10,850+</span>
              <span className="hero__chipLabel">raised</span>
            </div>
            <div className="hero__chip hero__chip--two">
              <span className="hero__chipValue">55,000+</span>
              <span className="hero__chipLabel">reached</span>
            </div>
          </div>
        </Reveal>
      </Stagger>

      {/* Progressive blur + light-blue haze that the collage dissolves into. */}
      <div className="hero__haze hero__haze--soft" aria-hidden="true" />
      <div className="hero__haze hero__haze--deep" aria-hidden="true" />
      <div className="hero__haze hero__haze--tint" aria-hidden="true" />
    </header>
  );
}

export default LandingPage;
