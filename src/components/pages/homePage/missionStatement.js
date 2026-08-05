import "./missionStatement.css";
import { Stagger, Reveal } from "../../motion/Reveal.js";

function MissionStatement() {
  return (
    <section className="aw-section mission">
      <div className="mission__aura" aria-hidden="true" />

      <Stagger className="aw-container mission__inner" gap={0.1}>
        <Reveal>
          <span className="aw-eyebrow">
            <span className="aw-eyebrow-dot" />
            Our Mission
          </span>
        </Reveal>

        <Reveal as="p" className="aw-display mission__text">
          AidWorks Foundation, a student-led nonprofit, is dedicated to
          enhancing the lives of children in foster care by providing essential
          resources, emotional support, and advocacy.{" "}
          <em>
            Our mission is to empower foster families and ensure that every
            child experiences stability, love, and the opportunity to thrive.
          </em>
        </Reveal>
      </Stagger>
    </section>
  );
}

export default MissionStatement;
