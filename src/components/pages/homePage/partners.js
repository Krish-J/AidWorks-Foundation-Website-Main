import "./partners.css";
import labl from "../../companyLogos/labl.jpg";
import smoc from "../../companyLogos/smoc.png";
import unitedWay from "../../companyLogos/unitedWay.png";
import wegmans from "../../companyLogos/wegmans.png";
import { Stagger, Reveal } from "../../motion/Reveal.js";

const partners = [
  { src: smoc, alt: "SMOC" },
  { src: unitedWay, alt: "United Way" },
  { src: labl, alt: "Light A Better Light" },
  { src: wegmans, alt: "Wegmans" },
];

function Partners() {
  return (
    <section className="aw-section partners">
      <Stagger className="aw-container partners__grid" gap={0.09}>
        <div className="partners__copy">
          <Reveal>
            <span className="aw-eyebrow">
              <span className="aw-eyebrow-dot" />
              Partners &amp; Sponsors
            </span>
          </Reveal>

          <Reveal as="h2" className="aw-display aw-h2">
            Our Partners and <em>Sponsors</em>
          </Reveal>

          <Reveal>
            <p className="aw-lead partners__description">
              Our partners and sponsors play an instrumental role in
              facilitating our support to families across Shrewsbury and its
              neighboring areas. Without the backing of these esteemed
              institutions, many individuals would grapple with significant
              integration challenges in the U.S. At Aidworks Foundation, we are
              profoundly grateful for the opportunity to work alongside our
              dedicated partners and sponsors, together turning aspirations into
              realities.
            </p>
          </Reveal>
        </div>

        <div className="partners__logos">
          {partners.map((partner) => (
            <Reveal
              key={partner.alt}
              className="aw-card aw-card--hover partners__logoCard"
            >
              <img src={partner.src} alt={partner.alt} />
            </Reveal>
          ))}
        </div>
      </Stagger>
    </section>
  );
}

export default Partners;
