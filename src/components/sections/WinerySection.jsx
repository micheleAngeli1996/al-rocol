import React from 'react';
import { images } from '../../data/siteContent.js';
import { SectionHeading } from '../common/SectionHeading.jsx';

export function WinerySection({ t }) {
  return (
    <section id="wine" className="wine section-pad dark">
      <SectionHeading kicker="02" title={t.sections.wine} text="La viticoltura eroica della famiglia diventa racconto, visita e acquisto diretto in cantina." />
      <div className="editorial">
        <figure className="image-stack editorial-image" data-reveal>
          <img src={images.cellar} alt="Cantina Al Rocol" />
          <figcaption>
            <span>Wine</span>
            <strong>Metodo Franciacorta, visite e acquisto diretto</strong>
          </figcaption>
        </figure>
        <div data-reveal>
          <h3>Franciacorta DOCG, Curtefranca e prodotti locali</h3>
          <p>
            La cantina seminterrata si trova accanto allâ€™agriturismo. I vini nascono da uve proprie coltivate sulle colline franciacortine, con vendita diretta in enoteca e percorsi di degustazione guidati.
          </p>
          <a className="text-link" href="#booking">Prenota una visita in cantina</a>
        </div>
      </div>
    </section>
  );
}
