import React from 'react';

const ParagraphDisplay = ({ text, imageUrl }) => {
  return (
    <div className="paragraph-display">
      <img src={imageUrl} alt="Weather" />
      <p>{text}</p>
    </div>
  );
};

export default ParagraphDisplay;
