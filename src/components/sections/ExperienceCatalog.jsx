import React from 'react';
import { images } from '../../data/siteContent.js';
import { SectionHeading } from '../common/SectionHeading.jsx';

const experienceImages = [images.tasting, images.family, images.trekking, images.trekking];

export function ExperienceCatalog({ t }) {
  return (
    <section id="experiences" className="section-pad experiences">
      <SectionHeading kicker="03" title={t.sections.exp} text="Pacchetti comprensibili e prenotabili, non semplici pagine sparse." />
      <div className="experience-grid">
        {t.tastingPlans.map(([title, text], i) => (
          <div className="experience" key={title} data-reveal>
            <img src={experienceImages[i]} alt="" />
            <div>
              <span>0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
