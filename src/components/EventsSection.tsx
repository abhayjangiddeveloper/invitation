'use client';

import React from 'react';

export default function EventsSection() {
  return (
    <section className="venue-section" id="eventsSection">
      <div className="section-tagline">Program Details</div>
      <h2 className="section-main-heading">Events &amp; Venues</h2>

      <div className="event-cards-container">
        {/* Card 1: Nikah Ceremony */}
        <div className="event-card">
          <div className="event-badge">🕌 Nikah Ceremony</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/masjid-CpSqpTFh.png"
            alt="Masjid-e-Ilahi"
            className="event-image"
          />
          <h3 className="event-date-text">Friday, 18th September 2026</h3>
          <p className="event-time-text">⏰ After Namaz-e-Asar</p>
          <p className="event-venue-name">📍 Masjid-e-Ilahi</p>
          <p className="event-address">Shobha Nagar, Nanded</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Masjid-e-Ilahi+Shobha+Nagar+Nanded"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            <span>📍 View Location on Google Maps</span>
          </a>
        </div>

        {/* Card 2: Nikah Dinner */}
        <div className="event-card">
          <div className="event-badge light">☕ Nikah Dinner</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/venue-DNGKp-8E.png"
            alt="Prince Lawns Function Hall"
            className="event-image"
          />
          <h3 className="event-date-text">Friday, 18th September 2026</h3>
          <p className="event-time-text">⏰ 8:00 PM</p>
          <p className="event-venue-name">📍 Prince Lawns Function Hall</p>
          <p className="event-address">Maltekdi, Opp. Fruit Market, Nanded</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Prince+Lawns+Function+Hall+Maltekdi+Nanded"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn-cream"
          >
            <span>📍 View Location on Google Maps</span>
          </a>
        </div>

        {/* Card 3: Valima Dinner */}
        <div className="event-card dashed-border">
          <div className="event-badge light">👑 ✦ Valima Dinner ✦</div>
          <h3 className="event-date-text">Sunday, 20th September 2026</h3>
          <p className="event-time-text">⏰ 9:00 PM</p>
          <p className="event-venue-name">📍 Nizam Palace Function Hall</p>
          <p className="event-address">Bodhan Road, Nizamabad</p>
        </div>
      </div>
    </section>
  );
}
