import React from 'react';
import './scrollpage.css';

const InfiniteScroll = () => {
  const scrollItems = [
    <p>$10,850+ raised</p>,
    <p>55,000+ reached</p>,
    //<p>Improving Access to Healthcare</p>,
    //<p>Educating for a Better Future</p>,
    // Add more items if needed
  ];
  const duplicatedItems = [...scrollItems, ...scrollItems];

  return (
    <div className="infinite-scroll">
      <div className="scroll-content">
        {scrollItems.map((item, index) => (
          <div className="scroll-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};


export default InfiniteScroll;

