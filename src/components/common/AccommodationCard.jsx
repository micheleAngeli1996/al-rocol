import React from 'react';

export function AccommodationCard({ title, text }) {
  return (
    <article className="article-card" data-reveal>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#booking" aria-label={`Richiedi informazioni per ${title}`}>Richiedi</a>
    </article>
  );
}
