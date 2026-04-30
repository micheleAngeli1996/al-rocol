import React from 'react';

export function SectionHeading({ kicker, title, text }) {
  return (
    <div className="section-title" data-reveal>
      <span>{kicker}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
