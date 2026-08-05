import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import logo from "./aidworksLogo.png";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";

const links = [
  { label: "Home", to: "/" },
  {
    label: "Our Blog",
    href: "https://aidworksdailyorg.wordpress.com/",
    external: true,
  },
  { label: "Our Team", to: "/ourteam" },
  { label: "Past Events", to: "/events" },
  { label: "Donate", to: "/donate" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY >= 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile sheet whenever the route changes.
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <motion.nav
      className={`awNav ${scrolled ? "awNav--scrolled" : ""}`}
      initial={{ opacity: 0, y: -18, filter: "blur(12px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
    >
      <div className={`awNav__pill ${open ? "awNav__pill--open" : ""}`}>
        <Link to="/" className="awNav__brand" aria-label="AidWorks Foundation — home">
          <img
            className="awNav__logo"
            src={logo}
            alt="AidWorks Foundation logo"
          />
        </Link>

        <div className="awNav__links">
          {links.map((link) =>
            link.external ? (
              <a
                key={link.label}
                className="awNav__link"
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                className={`awNav__link ${
                  location.pathname === link.to ? "awNav__link--active" : ""
                }`}
                to={link.to}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="awNav__actions">
          <Link to="/contact" className="aw-btn aw-btn--primary awNav__cta">
            Contact Us
          </Link>

          <button
            className={`awNav__burger ${open ? "awNav__burger--open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="aw-mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        id="aw-mobile-nav"
        className={`awNav__sheet ${open ? "awNav__sheet--open" : ""}`}
        aria-hidden={!open}
        hidden={!open}
      >
        {links.map((link) =>
          link.external ? (
            <a
              key={link.label}
              className="awNav__sheetLink"
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.label}
              className="awNav__sheetLink"
              to={link.to}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
        <Link
          to="/contact"
          className="aw-btn aw-btn--primary awNav__sheetCta"
          onClick={() => setOpen(false)}
        >
          Contact Us
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar;
