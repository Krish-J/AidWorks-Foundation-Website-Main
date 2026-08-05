import "./PageHero.css";
import React from "react";
import { Stagger, Reveal } from "./motion/Reveal.js";

/**
 * Shared blue masthead for interior pages — a compact echo of the home hero.
 */
function PageHero({ eyebrow, title, accent, lead, children }) {
  return (
    <header className="pageHero">
      <div className="pageHero__glow" aria-hidden="true" />

      <Stagger className="aw-container pageHero__inner" onMount delay={0.15}>
        {eyebrow && (
          <Reveal>
            <span className="aw-eyebrow aw-eyebrow--onblue">
              <span className="aw-eyebrow-dot" />
              {eyebrow}
            </span>
          </Reveal>
        )}

        <Reveal as="h1" className="aw-display aw-h1 pageHero__title">
          {title} {accent && <em>{accent}</em>}
        </Reveal>

        {lead && (
          <Reveal>
            <p className="aw-lead aw-lead--onblue pageHero__lead">{lead}</p>
          </Reveal>
        )}

        {children && <Reveal className="pageHero__actions">{children}</Reveal>}
      </Stagger>
    </header>
  );
}

export default PageHero;
