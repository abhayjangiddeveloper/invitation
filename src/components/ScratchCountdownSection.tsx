'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import confetti from 'canvas-confetti';

interface HeartItem {
  id: string;
  text: string;
  isLong?: boolean;
}

const hearts: HeartItem[] = [
  { id: 'heart-1', text: '18th' },
  { id: 'heart-2', text: 'September', isLong: true },
  { id: 'heart-3', text: '2026' },
];

export default function ScratchCountdownSection() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const canvasRefs = useRef<{ [key: string]: HTMLCanvasElement | null }>({});
  const isDrawing = useRef<{ [key: string]: boolean }>({});
  const scratchedPixels = useRef<{ [key: string]: number }>({});

  const triggerConfetti = useCallback(() => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e5a0ae', '#ff758c', '#ffd700', '#ffffff'],
      });
    } catch {
      // ignore
    }
  }, []);

  const revealAll = useCallback(() => {
    setIsRevealed(true);
    hearts.forEach((h) => {
      const canvas = canvasRefs.current[h.id];
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        canvas.style.display = 'none';
      }
    });
    triggerConfetti();
  }, [triggerConfetti]);

  // Initialize Canvas scratch overlays
  useEffect(() => {
    hearts.forEach((h) => {
      const canvas = canvasRefs.current[h.id];
      if (!canvas) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = (rect.width || 115) * dpr;
      canvas.height = (rect.height || 115) * dpr;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.scale(dpr, dpr);

      // Create shimmering gold/silver gradient for scratch surface
      const gradient = ctx.createLinearGradient(0, 0, rect.width || 115, rect.height || 115);
      gradient.addColorStop(0, '#c7a365');
      gradient.addColorStop(0.3, '#ebd49d');
      gradient.addColorStop(0.5, '#fff6d6');
      gradient.addColorStop(0.7, '#d4af37');
      gradient.addColorStop(1, '#997a38');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, rect.width || 115, rect.height || 115);

      // Draw subtle scratch hint text or icon
      ctx.fillStyle = 'rgba(100, 70, 20, 0.45)';
      ctx.font = 'bold 12px Montserrat, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('SCRATCH', (rect.width || 115) / 2, (rect.height || 115) / 2);
    });
  }, []);

  const scratch = (id: string, clientX: number, clientY: number) => {
    const canvas = canvasRefs.current[id];
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 16, 0, Math.PI * 2, false);
    ctx.fill();

    scratchedPixels.current[id] = (scratchedPixels.current[id] || 0) + 1;
    if (scratchedPixels.current[id] > 28 && !isRevealed) {
      revealAll();
    }
  };

  // Countdown timer to September 18, 2026 16:30:00
  useEffect(() => {
    const targetDate = new Date('2026-09-18T16:30:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="scratch-section" id="scratchSection">
      {/* SVG Heart Clip definition */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.5, 0.85 C 0.5, 0.85 0.08, 0.58 0.02, 0.35 C -0.05, 0.12 0.12, 0.0 0.32, 0.0 C 0.43, 0.0 0.48, 0.07 0.5, 0.14 C 0.52, 0.07 0.57, 0.0 0.68, 0.0 C 0.88, 0.0 1.05, 0.12 0.98, 0.35 C 0.92, 0.58 0.5, 0.85 0.5, 0.85 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="scratch-content">
        <div className="discover-text">Scratch to discover the date</div>

        <div className="heart-scratch-container">
          {hearts.map((h) => (
            <div key={h.id} className="heart-scratch-card">
              <div className="heart-border">
                <div className="heart-shape">
                  <span className={`scratch-date ${h.isLong ? 'long-title' : ''}`}>
                    {h.text}
                  </span>
                  <canvas
                    ref={(el) => {
                      canvasRefs.current[h.id] = el;
                    }}
                    className="heart-canvas"
                    onPointerDown={(e) => {
                      isDrawing.current[h.id] = true;
                      scratch(h.id, e.clientX, e.clientY);
                    }}
                    onPointerMove={(e) => {
                      if (isDrawing.current[h.id]) {
                        scratch(h.id, e.clientX, e.clientY);
                      }
                    }}
                    onPointerUp={() => {
                      isDrawing.current[h.id] = false;
                    }}
                    onPointerLeave={() => {
                      isDrawing.current[h.id] = false;
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-btn-container">
          <button
            type="button"
            className="premium-reveal-btn"
            onClick={revealAll}
            disabled={isRevealed}
          >
            <span className="btn-icon">✨</span>
            <span>{isRevealed ? 'Date Revealed' : 'Reveal Date'}</span>
          </button>
        </div>

        {/* Revealed Countdown Section */}
        <div className={`hidden-countdown ${isRevealed ? 'show' : ''}`}>
          <div className="save-the-date-label">Save the date</div>
          <div className="wedding-date-highlight">18 . 09 . 2026</div>

          <div className="timer-container">
            <div className="time-block">
              <span className="time-number">{timeLeft.days}</span>
              <p className="time-label">Days</p>
            </div>
            <div className="time-block">
              <span className="time-number">{timeLeft.hours}</span>
              <p className="time-label">Hours</p>
            </div>
            <div className="time-block">
              <span className="time-number">{timeLeft.minutes}</span>
              <p className="time-label">Minutes</p>
            </div>
            <div className="time-block">
              <span className="time-number">{timeLeft.seconds}</span>
              <p className="time-label">Secs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
