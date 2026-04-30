import React from 'react';

export function EventsMeetingSection({ t }) {
  return (
    <section id="events" className="section-pad events dark">
      <div className="two-col">
        <div data-reveal>
          <p className="eyebrow">Aziende, gruppi, ricorrenze</p>
          <h2>{t.sections.events}</h2>
        </div>
        <div data-reveal>
          <p>Una sala meeting attrezzata con lavagna a fogli mobili, schermo, videoproiettore, connessione internet, cancelleria e coffee break.</p>
          <p>Team building con corsi di cucina, wine trekking, escursioni in bicicletta e menu personalizzati con prodotti tipici.</p>
        </div>
      </div>
    </section>
  );
}
