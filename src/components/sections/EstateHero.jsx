import React from 'react';
import { images } from '../../data/siteContent.js';

export function EstateHero({ t }) {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img src={images.hero} alt="" />
        <div className="vineyard-depth layer-one"></div>
        <div className="vineyard-depth layer-two"></div>
      </div>
      <div className="hero-content" data-reveal>
        <p className="eyebrow">Ome, Franciacorta</p>
        <h1 id="hero-title">{t.heroTitle}</h1>
        <p>{t.heroText}</p>
        <div className="hero-cta">
          <a className="btn primary" href="#booking">{t.primary}</a>
          <a className="btn ghost" href="#experiences">{t.secondary}</a>
        </div>
      </div>
      <div className="trust-strip" aria-label="Punti di forza">
        {t.trust.map(item => <span key={item}>{item}</span>)}
      </div>
    </section>
  );
}
