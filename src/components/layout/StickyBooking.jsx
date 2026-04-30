import React from 'react';

export function StickyBooking({ bookLabel }) {
  return (
    <div className="sticky-booking">
      <a href="#booking">{bookLabel}</a>
      <a href="https://wa.me/393356751440" aria-label="WhatsApp">WA</a>
    </div>
  );
}
