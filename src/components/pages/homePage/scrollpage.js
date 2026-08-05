import React from "react";
import "./scrollpage.css";

const scrollItems = [
  { label: "$10,850+ raised" },
  { label: "Help needed, volunteer today!" },
  { label: "55,000+ reached" },
  { label: "Please donate to support our cause!", modern: true },
];

/* Seamless ticker: the list is rendered twice so the loop never shows a seam. */
const InfiniteScroll = () => {
  return (
    <div className="ticker">
      <div className="ticker__track">
        {[0, 1].map((copy) => (
          <div className="ticker__group" key={copy} aria-hidden={copy === 1}>
            {scrollItems.map((item, index) => (
              <span
                className={`ticker__item${item.modern ? " ticker__item--modern" : ""}`}
                key={`${copy}-${index}`}
              >
                {item.label}
                <span className="ticker__dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
