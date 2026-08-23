'use client';

import React, { useState, useRef, useEffect } from 'react';
import IntroOverlay from '@/components/IntroOverlay';
import MusicPlayer from '@/components/MusicPlayer';
import HeartClickEffect from '@/components/HeartClickEffect';
import HeroSection from '@/components/HeroSection';
import DetailsSection from '@/components/DetailsSection';
import ScratchCountdownSection from '@/components/ScratchCountdownSection';
import EventsSection from '@/components/EventsSection';
import RSVPSection from '@/components/RSVPSection';
import ComplimentsSection from '@/components/ComplimentsSection';
import ThankYouSection from '@/components/ThankYouSection';

export default function WeddingInvitationPage() {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create background audio instance
    const audio = new Audio('/media/music2.mp3');
    audio.loop = true;
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const handleOpen = () => {
    setIsOpened(true);
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio auto-play prevented:', err);
        });
    }
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn('Audio playback error:', err);
        });
    }
  };

  return (
    <main style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Intro Curtain Overlay */}
      <IntroOverlay isOpen={isOpened} onOpen={handleOpen} />

      {/* Floating Interactive Hearts on Click */}
      <HeartClickEffect />

      {/* Floating Audio Controller */}
      <MusicPlayer isPlaying={isPlaying} onToggle={toggleMusic} />

      {/* Sections */}
      <HeroSection isOpen={isOpened} />
      <DetailsSection />
      <ScratchCountdownSection />
      <EventsSection />
      <RSVPSection />
      <ComplimentsSection />
      <ThankYouSection />
    </main>
  );
}
