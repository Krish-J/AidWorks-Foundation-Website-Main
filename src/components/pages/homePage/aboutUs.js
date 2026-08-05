import "./aboutUs.css";
import { Link } from "react-router-dom";
import teamPhoto from "../../../assets/mosaic/teamPhoto2.jpg";
import teamPhotoAlt from "../../../assets/mosaic/teamPhoto.jpg";
import { Stagger, Reveal } from "../../motion/Reveal.js";

function AboutUs() {
  return (
    <section className="aw-section aw-tint about">
      <Stagger className="aw-container about__grid" gap={0.1}>
        <div className="about__copy">
          <Reveal>
            <span className="aw-eyebrow">
              <span className="aw-eyebrow-dot" />
              Who We Are
            </span>
          </Reveal>

          <Reveal as="h2" className="aw-display aw-h2">
            A group of students, <em>lending a hand</em>
          </Reveal>

          <Reveal>
            <p className="aw-lead">
              We are a group of passionate and dedicated high schoolers and
              college students committed to making a positive impact in our
              community. Through our collective efforts, we aim to lend a
              helping hand to those in need, foster connections, and create a
              better environment for everyone.
            </p>
          </Reveal>

          <Reveal className="about__actions">
            <Link to="/ourteam" className="aw-btn aw-btn--primary">
              Meet Our Team
            </Link>
            <Link to="/events" className="aw-btn aw-btn--ghost">
              Past Events
            </Link>
          </Reveal>
        </div>

        <Reveal scale className="about__media">
          <img
            className="about__photo about__photo--main"
            src={teamPhoto}
            alt="The AidWorks Foundation team"
          />
          <img
            className="about__photo about__photo--inset"
            src={teamPhotoAlt}
            alt="AidWorks volunteers"
          />
        </Reveal>
      </Stagger>
    </section>
  );
}

export default AboutUs;
