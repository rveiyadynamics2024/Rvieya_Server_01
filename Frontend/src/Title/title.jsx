import React from 'react';
import './title.css';

function Title({ text, underline }) {
  const underlineIndex = text.indexOf(underline);

  if (underlineIndex === -1) {
    // If underline text is not found, render normally
    return (
      <div className="title">
        <p>{text}</p>
      </div>
    );
  }

  const before = text.slice(0, underlineIndex);
  const afterUnderline = text.slice(underlineIndex + underline.length);

  return (
    <div className="title">
      <p>
        {before}
        <span>{underline}</span>
        {afterUnderline}
      </p>
    </div>
  );
}

export default Title;



