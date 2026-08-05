import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "./aidworksLogo.png";
import { Stagger, Reveal } from "./motion/Reveal.js";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61561200076591&mibextid=JRoKGi",
    icon: <FaFacebookF />,
    modifier: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/aidworks-foundation/",
    icon: <FaLinkedinIn />,
    modifier: "linkedin",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aidworksfoundation/",
    icon: <FaInstagram />,
    modifier: "instagram",
  },
];

function Footer() {
  return (
    <footer className="awFooter">
      <div className="awFooter__glow" aria-hidden="true" />

      <Stagger className="aw-container awFooter__inner" gap={0.07}>
        <Reveal className="awFooter__brand">
          <div className="awFooter__brandRow">
            <img
              className="awFooter__logo"
              src={logo}
              alt="AidWorks Foundation logo"
            />
            <span className="awFooter__brandName">AidWorks Foundation</span>
          </div>
          <p className="awFooter__tagline">Compassion Creates Change</p>
          <div className="awFooter__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                className={`awFooter__social awFooter__social--${social.modifier}`}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal className="awFooter__col">
          <h4 className="awFooter__colTitle">Explore</h4>
          <a
            className="awFooter__link"
            href="https://aidworksdailyorg.wordpress.com/"
            target="_blank"
            rel="noreferrer"
          >
            Our Blog
          </a>
          <Link className="awFooter__link" to="/ourteam">
            Our Team
          </Link>
          <Link className="awFooter__link" to="/events">
            Past Events
          </Link>
        </Reveal>

        <Reveal className="awFooter__col">
          <h4 className="awFooter__colTitle">Get Involved</h4>
          <Link className="awFooter__link" to="/donate">
            Donate
          </Link>
          <a
            className="awFooter__link"
            href="https://docs.google.com/forms/d/e/1FAIpQLSc9_Qu3yH-YX5PXIsMJIWdHeNLmLZBP6v7hZmFe2ypopmPG0Q/viewform"
            target="_blank"
            rel="noreferrer"
          >
            Volunteer Now!
          </a>
          <Link className="awFooter__link" to="/contact">
            Contact Us
          </Link>
        </Reveal>

        <Reveal className="awFooter__col awFooter__col--cta">
          <h4 className="awFooter__colTitle">Support our cause</h4>
          <p className="awFooter__ctaText">
            Please donate to support our cause!
          </p>
          <a
            className="aw-btn aw-btn--light"
            href="https://www.zeffy.com/donation-form/caf7108e-39e1-49bc-8b2e-084bd8f3d8af"
            target="_blank"
            rel="noreferrer"
          >
            Donate Here
          </a>
        </Reveal>
      </Stagger>

      <div className="aw-container awFooter__bar">
        <p className="awFooter__copy">&copy; AidWorks Foundation 2025</p>
        <p className="awFooter__copy awFooter__copy--dim">
          A student-led nonprofit based in Shrewsbury, Massachusetts
        </p>
      </div>
    </footer>
  );
}

export default Footer;
