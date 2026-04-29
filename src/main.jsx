import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Button, MantineProvider, NumberInput, Select, Textarea, TextInput, createTheme } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'dayjs/locale/it';
import './styles.css';

const img = {
  hero: 'https://www.alrocol.com/wp-content/uploads/2017/02/DSC7171-1600x1000.jpg',
  cellar: 'https://www.alrocol.com/wp-content/uploads/2017/03/cantina-Al-Rocol-992x582.jpg',
  stay: 'https://www.alrocol.com/wp-content/themes/alrocol/img/alloggi-home.jpg',
  room: 'https://www.alrocol.com/wp-content/uploads/2017/02/camere-1.jpg',
  roomAlt: 'https://www.alrocol.com/wp-content/uploads/2021/01/room-15-900x900.jpg',
  tasting: 'https://www.alrocol.com/wp-content/uploads/2017/03/degustazione2-scaled.jpg',
  kitchen: 'https://www.alrocol.com/wp-content/uploads/2017/03/tagliatelle.jpg',
  trekking: 'https://www.alrocol.com/wp-content/uploads/2017/04/wine-trekking.jpg',
  family: 'https://www.alrocol.com/wp-content/uploads/2017/02/IMG_9842-1-992x582.png'
};

const copy = {
  it: {
    nav: ['Soggiornare', 'Cantina', 'Cucina', 'Esperienze', 'Eventi', 'Contatti'],
    book: 'Prenota',
    heroTitle: 'Agriturismo e cantina nel cuore della Franciacorta',
    heroText:
      'Ospitalita familiare, vini Franciacorta DOCG, cucina del territorio e camere tra vigneti, colline e castagneti a Ome.',
    primary: 'Richiedi disponibilita',
    secondary: 'Scopri le esperienze',
    trust: ['Dal 1996', '25 posti letto', '34 ettari aziendali', '9 ettari vitati'],
    introTitle: 'Una tenuta agricola dove soggiorno, vino e cucina parlano la stessa lingua.',
    intro:
      'Al Rocol e condotto dalla famiglia Vimercati Castellini, con radici agricole che risalgono al XVII secolo. La produzione di vini Franciacorta e l’attivita principale, affiancata da alloggi, ristorante, degustazioni, agricampeggio, meeting e percorsi nel territorio.',
    sections: {
      stay: 'Soggiornare',
      wine: 'Cantina ed enoteca',
      food: 'La cucina',
      exp: 'Esperienze',
      events: 'Eventi e meeting',
      contact: 'Contatto e prenotazione'
    },
    accommodation: [
      ['Camere', '15 camere con travi a vista, bagno privato, Wi-Fi, aria condizionata e arredi che uniscono antico e moderno.'],
      ['Appartamenti', 'Soluzioni da 2 a 5 persone con cucina attrezzata, soggiorno, spazio esterno privato e autonomia completa.'],
      ['Depandance', 'Bilocali tra vigneti e castagneti, con accesso ai servizi dell’agriturismo: colazione, ristorante, cantina e piscina.'],
      ['Agricampeggio', 'Otto postazioni camper tra i vigneti, con acqua, elettricita e carico/scarico.']
    ],
    tastingPlans: [
      ['Cantina', 'Visita con spiegazione del Metodo Franciacorta e degustazione guidata di 2 Franciacorta con sfiziosita.'],
      ['Territorio', '3, 4 o 5 vini in abbinamento a salumi, formaggi locali, olive e prodotti franciacortini.'],
      ['Agri', 'Aperitivo Franciacorta seguito da cena completa in agriturismo con abbinamento vini.'],
      ['Wine trekking', 'Percorso guidato di circa 2 ore in 4 tappe tra i vigneti della tenuta.']
    ],
    food:
      'Ricette della tradizione bresciana e franciacortina: casonsei, tagliatelle ai porcini, manzo all’olio di Rovato, brasati al vino rosso, crostate con marmellate fatte in casa e spiedo su prenotazione.',
    form: {
      title: 'Organizza il tuo soggiorno',
      subtitle: 'Un unico form per camere, degustazioni, ristorante, agricampeggio ed eventi.',
      fields: ['Nome e cognome', 'Email', 'Telefono', 'Data indicativa', 'Ospiti', 'Interesse'],
      interests: ['Soggiorno', 'Degustazione', 'Ristorante', 'Evento o meeting', 'Agricampeggio'],
      message: 'Messaggio',
      submit: 'Invia richiesta',
      whatsapp: 'WhatsApp'
    }
  },
  en: {
    nav: ['Stay', 'Winery', 'Restaurant', 'Experiences', 'Events', 'Contact'],
    book: 'Book',
    heroTitle: 'Farmhouse and winery in the heart of Franciacorta',
    heroText:
      'Family hospitality, Franciacorta DOCG wines, regional cuisine and vineyard stays in Ome, near Lake Iseo and Brescia.',
    primary: 'Request availability',
    secondary: 'Explore experiences',
    trust: ['Since 1996', '25 beds', '34 farm hectares', '9 vineyard hectares'],
    introTitle: 'A rural estate where stay, wine and cuisine belong together.',
    intro:
      'Al Rocol is run by the Vimercati Castellini family, with agricultural roots dating back to the 17th century. Franciacorta wine production is the heart of the estate, complemented by rooms, apartments, restaurant, tastings, camper pitches, meetings and local itineraries.',
    sections: {
      stay: 'Stay',
      wine: 'Winery and wine shop',
      food: 'Restaurant',
      exp: 'Experiences',
      events: 'Events and meetings',
      contact: 'Contact and booking'
    },
    accommodation: [
      ['Rooms', '15 rooms with exposed beams, private bathroom, Wi-Fi, air conditioning and a warm blend of old and new.'],
      ['Apartments', 'Independent stays for 2 to 5 guests with equipped kitchen, living area and private outdoor space.'],
      ['Depandance', 'Two-room apartments among vineyards and chestnut trees, with access to breakfast, restaurant, winery and pool.'],
      ['Agricamping', 'Eight camper pitches among the vineyards with water, electricity and loading/unloading service.']
    ],
    tastingPlans: [
      ['Cellar', 'Winery tour with Franciacorta Method explanation and tasting of 2 Franciacorta wines with snacks.'],
      ['Territory', '3, 4 or 5 wines paired with cured meats, local cheese, olives and Franciacorta products.'],
      ['Agri', 'Franciacorta aperitif followed by a full farmhouse dinner with wine pairing.'],
      ['Wine trekking', 'A guided two-hour, four-stop walk through the estate vineyards.']
    ],
    food:
      'Brescian and Franciacorta recipes: casonsei, porcini tagliatelle, Rovato beef in oil, red-wine braised meat, homemade jam tarts and traditional spit roast by reservation.',
    form: {
      title: 'Plan your visit',
      subtitle: 'One frictionless form for stays, tastings, restaurant, camper pitches and events.',
      fields: ['Full name', 'Email', 'Phone', 'Preferred date', 'Guests', 'Interest'],
      interests: ['Stay', 'Wine tasting', 'Restaurant', 'Event or meeting', 'Agricamping'],
      message: 'Message',
      submit: 'Send request',
      whatsapp: 'WhatsApp'
    }
  }
};

const theme = createTheme({
  fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  primaryColor: 'wine',
  colors: {
    wine: ['#fff3f5', '#f4dce4', '#e3b8c6', '#d090a8', '#bd6688', '#9f3d64', '#731732', '#5d172a', '#45111f', '#2d0b14']
  },
  radius: {
    md: '16px',
    lg: '22px',
    xl: '28px'
  }
});

function App() {
  const [lang, setLang] = useState('it');
  const [themeMode, setThemeMode] = useState(() => localStorage.getItem('theme-mode') || 'light');
  const t = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = themeMode;
    localStorage.setItem('theme-mode', themeMode);
  }, [themeMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.15 }
    );
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Richiesta dal nuovo sito Al Rocol');
    return `mailto:info@alrocol.com?subject=${subject}`;
  }, []);

  return (
    <>
      <Header t={t} lang={lang} setLang={setLang} themeMode={themeMode} setThemeMode={setThemeMode} />
      <main>
        <Hero t={t} />
        <Intro t={t} />
        <Stay t={t} />
        <Wine t={t} />
        <Food t={t} />
        <Experiences t={t} />
        <Events t={t} />
        <Contact t={t} mailto={mailto} />
      </main>
      <Footer />
      <div className="sticky-booking">
        <a href="#booking">{t.book}</a>
        <a href="https://wa.me/393356751440" aria-label="WhatsApp">WA</a>
      </div>
    </>
  );
}

function Header({ t, lang, setLang, themeMode, setThemeMode }) {
  const [open, setOpen] = useState(false);
  const ids = ['stay', 'wine', 'food', 'experiences', 'events', 'booking'];
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Al Rocol home">
        <BrandMark />
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">
        <span></span><span></span>
      </button>
      <nav id="main-nav" className={open ? 'open' : ''} aria-label="Navigazione principale">
        {t.nav.map((item, i) => <a key={item} href={`#${ids[i]}`} onClick={() => setOpen(false)}>{item}</a>)}
      </nav>
      <div className="header-actions">
        <a href="tel:+390306852542">+39 030 6852542</a>
        <button
          className="theme-toggle"
          onClick={() => setThemeMode(themeMode === 'light' ? 'dark' : 'light')}
          aria-label={themeMode === 'light' ? 'Attiva tema scuro' : 'Attiva tema chiaro'}
          title={themeMode === 'light' ? 'Tema scuro' : 'Tema chiaro'}
        >
          <span aria-hidden="true"></span>
        </button>
        <button onClick={() => setLang(lang === 'it' ? 'en' : 'it')}>{lang === 'it' ? 'EN' : 'IT'}</button>
      </div>
    </header>
  );
}

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 210 178" role="img" aria-labelledby="brand-title">
      <title id="brand-title">Al Rocol Franciacorta</title>
      <g className="brand-crest" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path d="M105 10c31 0 57 21 57 49 0 22-14 39-31 49-10 6-19 11-26 19-7-8-16-13-26-19-17-10-31-27-31-49 0-28 26-49 57-49Z" strokeWidth="5" />
        <path d="M84 60c11-18 31-21 45-10 9 7 13 18 9 31" strokeWidth="5" />
        <path d="M103 113V55" strokeWidth="5" />
        <path d="M103 75 78 55M103 83l30-22M103 96 78 82M103 102l28-12" strokeWidth="4" />
        <path d="M67 96c-17 11-33 17-46 14 5-14 17-25 37-31" strokeWidth="4" />
        <path d="M143 96c17 11 33 17 46 14-5-14-17-25-37-31" strokeWidth="4" />
      </g>
      <text x="105" y="150" textAnchor="middle" className="brand-word">AL ROCOL</text>
      <text x="105" y="171" textAnchor="middle" className="brand-place">Franciacorta</text>
    </svg>
  );
}

function Hero({ t }) {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <img src={img.hero} alt="" />
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

function Intro({ t }) {
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

function Stay({ t }) {
  return (
    <section id="stay" className="section-pad stay">
      <SectionTitle kicker="01" title={t.sections.stay} text="Camere, appartamenti, depandance e agricampeggio: la scelta diventa chiara prima della richiesta." />
      <div className="stay-grid">
        <figure className="image-stack" data-reveal>
          <img className="feature-img" src={img.room} alt="Camera di Al Rocol con arredi in legno" />
          <figcaption>
            <span>Stay</span>
            <strong>Camere e appartamenti tra i vigneti</strong>
          </figcaption>
        </figure>
        <div className="cards">
          {t.accommodation.map(([title, text]) => <ArticleCard key={title} title={title} text={text} />)}
        </div>
      </div>
    </section>
  );
}

function Wine({ t }) {
  return (
    <section id="wine" className="wine section-pad dark">
      <SectionTitle kicker="02" title={t.sections.wine} text="La viticoltura eroica della famiglia diventa racconto, visita e acquisto diretto in cantina." />
      <div className="editorial">
        <figure className="image-stack editorial-image" data-reveal>
          <img src={img.cellar} alt="Cantina Al Rocol" />
          <figcaption>
            <span>Wine</span>
            <strong>Metodo Franciacorta, visite e acquisto diretto</strong>
          </figcaption>
        </figure>
        <div data-reveal>
          <h3>Franciacorta DOCG, Curtefranca e prodotti locali</h3>
          <p>
            La cantina seminterrata si trova accanto all’agriturismo. I vini nascono da uve proprie coltivate sulle colline franciacortine, con vendita diretta in enoteca e percorsi di degustazione guidati.
          </p>
          <a className="text-link" href="#booking">Prenota una visita in cantina</a>
        </div>
      </div>
    </section>
  );
}

function Food({ t }) {
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
          <img src={img.kitchen} alt="Tagliatelle della cucina Al Rocol" />
          <figcaption>
            <span>Cucina</span>
            <strong>Ricette bresciane, prodotti locali e menu su richiesta</strong>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function Experiences({ t }) {
  return (
    <section id="experiences" className="section-pad experiences">
      <SectionTitle kicker="03" title={t.sections.exp} text="Pacchetti comprensibili e prenotabili, non semplici pagine sparse." />
      <div className="experience-grid">
        {t.tastingPlans.map(([title, text], i) => (
          <div className="experience" key={title} data-reveal>
            <img src={[img.tasting, img.family, img.trekking, img.trekking][i]} alt="" />
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

function Events({ t }) {
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

function Contact({ t, mailto }) {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <section id="booking" className="section-pad booking">
      <div className="booking-panel" data-reveal>
        <div>
          <p className="eyebrow">Direct booking</p>
          <h2>{t.form.title}</h2>
          <p>{t.form.subtitle}</p>
          <div className="contact-lines">
            <a href="tel:+390306852542">+39 030 6852542</a>
            <a href="https://wa.me/393356751440">{t.form.whatsapp}</a>
            <a href={mailto}>info@alrocol.com</a>
          </div>
        </div>
        <form className="booking-form" action="mailto:info@alrocol.com" method="post" encType="text/plain">
          <TextInput name="name" label={t.form.fields[0]} required />
          <TextInput name="email" label={t.form.fields[1]} type="email" required />
          <TextInput name="phone" label={t.form.fields[2]} type="tel" />
          <DatePickerInput
            name="date"
            label={t.form.fields[3]}
            value={selectedDate}
            onChange={setSelectedDate}
            valueFormat="DD/MM/YYYY"
            placeholder="Seleziona una data"
            locale={document.documentElement.lang === 'en' ? 'en' : 'it'}
            clearable
            popoverProps={{ withinPortal: true, position: 'bottom-start' }}
          />
          <NumberInput
            name="guests"
            label={t.form.fields[4]}
            min={1}
            max={30}
            clampBehavior="strict"
            allowDecimal={false}
            placeholder="2"
          />
          <Select
            name="interest"
            label={t.form.fields[5]}
            data={t.form.interests}
            defaultValue={t.form.interests[0]}
            allowDeselect={false}
          />
          <Textarea className="wide" name="message" label={t.form.message} minRows={5} autosize />
          <Button className="mantine-submit wide" type="submit" radius="xl">{t.form.submit}</Button>
        </form>
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="section-title" data-reveal>
      <span>{kicker}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function ArticleCard({ title, text }) {
  return (
    <article className="article-card" data-reveal>
      <h3>{title}</h3>
      <p>{text}</p>
      <a href="#booking" aria-label={`Richiedi informazioni per ${title}`}>Richiedi</a>
    </article>
  );
}

function Footer() {
  return (
    <footer>
      <BrandMark />
      <p>Via Provinciale 79, 25050 Ome, Brescia · P.IVA 03419070176</p>
      <p>© 2026 Al Rocol di Vimercati Castellini</p>
    </footer>
  );
}

createRoot(document.getElementById('root')).render(
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);
