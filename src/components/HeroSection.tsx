'use client';

import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById('detailsSection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="heroSection">
      <div className="hero-bg-container">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/bg-CjJQzhxh.jpg"
          alt="Wedding Background"
          className="hero-bg-image"
        />
        <div className="hero-vignette" />
      </div>

      <div className="hero-content">
        <h1 className="hero-names-cursive">Syed Saima Tasneem</h1>
        <span className="hero-ampersand">&amp;</span>
        <h1 className="hero-names-cursive">Syed Nizamuddin</h1>

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/ring1-Zb6HDysx.png"
          alt="Wedding Rings"
          className="hero-ring"
        />
      </div>

      <a
        href="#detailsSection"
        onClick={scrollToDetails}
        className="scroll-down-box"
        id="scrollDownBtn"
      >
        <span>Scroll Down</span>
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}
