import React from 'react';
import { useState } from 'react';
import { navSectionIds } from '../../data/siteContent.js';
import { AlRocolBrandMark } from '../brand/AlRocolBrandMark.jsx';

export function SiteHeader({ t, lang, setLang, themeMode, setThemeMode }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Al Rocol home">
        <AlRocolBrandMark />
      </a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav">
        <span></span><span></span>
      </button>
      <nav id="main-nav" className={open ? 'open' : ''} aria-label="Navigazione principale">
        {t.nav.map((item, i) => <a key={item} href={`#${navSectionIds[i]}`} onClick={() => setOpen(false)}>{item}</a>)}
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
