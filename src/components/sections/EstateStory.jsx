import React from 'react';

export function EstateStory({ t }) {
  return (
    <section className="intro section-pad">
      <div className="section-kicker">Al Rocol</div>
      <div className="two-col">
        <h2 data-reveal>{t.introTitle}</h2>
        <p data-reveal>{t.intro}</p>
      </div>
    </section>
  );
}
