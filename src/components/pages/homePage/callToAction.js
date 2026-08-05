import "./callToAction.css";
import { Link } from "react-router-dom";
import { Stagger, Reveal } from "../../motion/Reveal.js";

const VOLUNTEER_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSc9_Qu3yH-YX5PXIsMJIWdHeNLmLZBP6v7hZmFe2ypopmPG0Q/viewform";

function CallToAction() {
  return (
    <section className="aw-section aw-section--tight cta">
      <div className="aw-container">
        <Stagger className="cta__panel" gap={0.09}>
          <div className="cta__glow" aria-hidden="true" />

          <Reveal as="h2" className="aw-display aw-h2 cta__title">
            Compassion <em>Creates Change</em>
          </Reveal>

          <Reveal>
            <p className="aw-lead aw-lead--onblue cta__lead">
              Help needed, volunteer today! Please donate to support our cause!
            </p>
          </Reveal>

          <Reveal className="cta__actions">
            <Link to="/donate" className="aw-btn aw-btn--light aw-btn--lg">
              Donate
            </Link>
            <a
              className="aw-btn aw-btn--glass aw-btn--lg"
              target="_blank"
              rel="noreferrer"
              href={VOLUNTEER_FORM}
            >
              Volunteer Now!
            </a>
          </Reveal>
        </Stagger>
      </div>
    </section>
  );
}

export default CallToAction;
