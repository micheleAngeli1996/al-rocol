import React from 'react';
import { images } from '../../data/siteContent.js';
import { AccommodationCard } from '../common/AccommodationCard.jsx';
import { SectionHeading } from '../common/SectionHeading.jsx';

export function HospitalitySection({ t }) {
  return (
    <section id="stay" className="section-pad stay">
      <SectionHeading kicker="01" title={t.sections.stay} text="Camere, appartamenti, depandance e agricampeggio: la scelta diventa chiara prima della richiesta." />
      <div className="stay-grid">
        <figure className="image-stack" data-reveal>
          <img className="feature-img" src={images.room} alt="Camera di Al Rocol con arredi in legno" />
          <figcaption>
            <span>Stay</span>
            <strong>Camere e appartamenti tra i vigneti</strong>
          </figcaption>
        </figure>
        <div className="cards">
          {t.accommodation.map(([title, text]) => <AccommodationCard key={title} title={title} text={text} />)}
        </div>
      </div>
    </section>
  );
}
