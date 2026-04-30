import React, { useState } from 'react';
import { Button, NumberInput, Select, Textarea, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

export function BookingSection({ t, lang, mailto }) {
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
            locale={lang}
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
