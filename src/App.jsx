import React, { useEffect, useMemo, useState } from 'react';
import { copy } from './data/siteContent.js';
import { SiteHeader } from './components/layout/SiteHeader.jsx';
import { SiteFooter } from './components/layout/SiteFooter.jsx';
import { StickyBooking } from './components/layout/StickyBooking.jsx';
import { EstateHero } from './components/sections/EstateHero.jsx';
import { EstateStory } from './components/sections/EstateStory.jsx';
import { HospitalitySection } from './components/sections/HospitalitySection.jsx';
import { WinerySection } from './components/sections/WinerySection.jsx';
import { RestaurantSection } from './components/sections/RestaurantSection.jsx';
import { ExperienceCatalog } from './components/sections/ExperienceCatalog.jsx';
import { EventsMeetingSection } from './components/sections/EventsMeetingSection.jsx';
import { BookingSection } from './components/sections/BookingSection.jsx';

export default function App() {
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
      <SiteHeader t={t} lang={lang} setLang={setLang} themeMode={themeMode} setThemeMode={setThemeMode} />
      <main>
        <EstateHero t={t} />
        <EstateStory t={t} />
        <HospitalitySection t={t} />
        <WinerySection t={t} />
        <RestaurantSection t={t} />
        <ExperienceCatalog t={t} />
        <EventsMeetingSection t={t} />
        <BookingSection t={t} lang={lang} mailto={mailto} />
      </main>
      <SiteFooter />
      <StickyBooking bookLabel={t.book} />
    </>
  );
}
