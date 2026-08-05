import "./donate.css";
import donateImage from "./donateImage.png";
import PageHero from "../../PageHero.js";
import { Stagger, Reveal } from "../../motion/Reveal.js";

const DONATE_LINK =
  "https://www.zeffy.com/donation-form/caf7108e-39e1-49bc-8b2e-084bd8f3d8af";

const needs = [
  {
    group: "Nutrition and Dietary Needs",
    items: [
      {
        title: "Diversified Meal Options",
        body: "Introduce a diverse menu for the 83 families at Days Inn that recieve the same lunch and dinner everyday.",
      },
      {
        title: "Promote Healthier Snacks",
        body: "Enhance the quality and variety of nutritional snacks for the many Days Inn K-12 students that don't have access to nutritious snacks.",
      },
    ],
  },
  {
    group: "Enhancing Well-being",
    items: [
      {
        title: "Sports Equipment",
        body: "Providing sport items such as soccer goals, basketball hoops, and balls may encourage physical activity and team building.",
      },
      {
        title: "Entertainment Sponsorships",
        body: "Helping fund events such as magic shows, tournaments, and more will bring joy and excitement to the community.",
      },
      {
        title: "Vendor Partnerships",
        body: "Occasional visits from ice cream trucks or other popular vendors are a delightful treat for residents.",
      },
      {
        title: "Diverse Clothing Options",
        body: "Ensuring that students have a variety of clothing can prevent discrimination and feel confident in their skin!",
      },
    ],
  },
];

function Donate() {
  return (
    <>
      <PageHero
        eyebrow="Support our cause"
        title="Donate"
        accent="to Us!"
        lead="We welcome monetary donations to further our mission. All contributions will be directly utilized to acquire the aforementioned goods or to sponsor community-building events."
      >
        <a
          className="aw-btn aw-btn--light aw-btn--lg"
          target="_blank"
          rel="noreferrer"
          href={DONATE_LINK}
        >
          Donate Here
        </a>
      </PageHero>

      {needs.map((section) => (
        <section className="aw-section aw-section--tight donate" key={section.group}>
          <Stagger className="aw-container" gap={0.08}>
            <Reveal className="donate__head">
              <h2 className="aw-display aw-h3 donate__groupTitle">
                {section.group}
              </h2>
              <hr className="aw-rule" />
            </Reveal>

            <div className="donate__grid">
              {section.items.map((item) => (
                <Reveal
                  key={item.title}
                  className="aw-card aw-card--hover donate__card"
                >
                  <h3 className="donate__cardTitle">{item.title}</h3>
                  <p className="donate__cardBody">{item.body}</p>
                </Reveal>
              ))}
            </div>
          </Stagger>
        </section>
      ))}

      <section className="aw-section aw-tint donate__closing">
        <Stagger className="aw-container donate__closingGrid" gap={0.1}>
          <div>
            <Reveal>
              <span className="aw-eyebrow">
                <span className="aw-eyebrow-dot" />
                Financial Contributions
              </span>
            </Reveal>

            <Reveal as="h2" className="aw-display aw-h2">
              Your support makes a <em>tangible difference</em>
            </Reveal>

            <Reveal>
              <p className="aw-lead">
                We welcome monetary donations to further our mission. All
                contributions will be directly utilized to acquire the
                aforementioned goods or to sponsor community-building events.
                Your support can make a tangible difference in the lives of
                these 83 families!
              </p>
            </Reveal>

            <Reveal className="donate__actions">
              <a
                className="aw-btn aw-btn--primary aw-btn--lg"
                target="_blank"
                rel="noreferrer"
                href={DONATE_LINK}
              >
                Donate Here
              </a>
            </Reveal>
          </div>

          <Reveal scale className="donate__media">
            <img
              className="donate__image"
              src={donateImage}
              alt="Ways to support AidWorks Foundation"
            />
          </Reveal>
        </Stagger>
      </section>
    </>
  );
}

export default Donate;
