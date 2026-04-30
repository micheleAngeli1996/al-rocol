import React from 'react';
import { images } from '../../data/siteContent.js';

export function RestaurantSection({ t }) {
  return (
    <section id="food" className="section-pad food">
      <div className="split">
        <div data-reveal>
          <p className="eyebrow">Cucina del territorio</p>
          <h2>{t.sections.food}</h2>
          <p>{t.food}</p>
          <a className="btn primary" href="#booking">Richiedi un tavolo</a>
        </div>
        <figure className="image-stack" data-reveal>
          <img src={images.kitchen} alt="Tagliatelle della cucina Al Rocol" />
          <figcaption>
            <span>Cucina</span>
            <strong>Ricette bresciane, prodotti locali e menu su richiesta</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
