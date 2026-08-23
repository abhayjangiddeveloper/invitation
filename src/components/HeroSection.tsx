"use client";

import { CARD_INFO } from "@/utils/constant";
import { MouseEvent, useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  isOpen?: boolean;
}

export default function HeroSection({ isOpen = false }: HeroSectionProps) {
  // Hooks
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Local States
  const [isVideoEnded, setIsVideoEnded] = useState(false);

  // Functions
  const scrollToDetails = (e: MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("detailsSection");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Effects
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isOpen) {
      video.play().catch((err) => {
        console.warn("Video playback error:", err);
      });
    } else {
      video.pause();
      video.currentTime = 0;
      setIsVideoEnded(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsVideoEnded(true);
      }, 4000);
    }
  }, [isOpen]);

  return (
    <section className="hero-section" id="heroSection">
      <div className="hero-bg-container">
        <video
          ref={videoRef}
          muted
          playsInline
          className="hero-bg-image hero-bg-video"
          poster="/assets/bg-CjJQzhxh.jpg"
        >
          <source src="/assets/curtain-video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-vignette" />
      </div>

      <div className={`hero-content ${isVideoEnded ? "revealed" : ""}`}>
        <h1 className="hero-names-cursive">{CARD_INFO.groomName}</h1>
        <span className="hero-ampersand">&amp;</span>
        <h1 className="hero-names-cursive">{CARD_INFO.brideName}</h1>

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
        className={`scroll-down-box ${isVideoEnded ? "revealed" : ""}`}
        id="scrollDownBtn"
      >
        <span>Scroll Down</span>
        <span className="scroll-arrow">↓</span>
      </a>
    </section>
  );
}
