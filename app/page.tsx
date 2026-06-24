"use client";

import { useEffect, useState, useMemo } from 'react';
import { Figurine } from './(home)/models/Figurine';
import { CarouselState } from './(home)/models/CarouselState';
import { BrandLabel } from './(home)/components/BrandLabel';
import { Carousel } from './(home)/components/Carousel';
import { InfoSection } from './(home)/components/InfoSection';
import { DiscoverLink } from './(home)/components/DiscoverLink';
import { GrainOverlay } from './components/common/GrainOverlay';

const IMAGES_DATA = [
  {
    src: '/character-1.png',
    bg: '#F4845F',
    panel: '#F79B7F',
    label: 'NEO RED',
    sub: 'RED_JACKET',
  },
  {
    src: '/character-2.png',
    bg: '#6BBF7A',
    panel: '#85CC92',
    label: 'JADE SAGE',
    sub: 'BROWN_EAST',
  },
  {
    src: '/character-3.png',
    bg: '#E882B4',
    panel: '#ED9DC4',
    label: 'CYBER CODE',
    sub: 'BLACK_BINARY',
  },
  {
    src: '/character-4.png',
    bg: '#6EB5FF',
    panel: '#8DC4FF',
    label: 'DEEP BLUE',
    sub: 'JEANS_CROSS',
  },
];

export default function Home() {
  // Instantiate figurines (OOP models)
  const figurines = useMemo(() => IMAGES_DATA.map((data) => new Figurine(data)), []);

  // Preload all 4 figurines on mount
  useEffect(() => {
    figurines.forEach((f) => {
      f.preload().catch((err) => {
        console.error('Failed to preload figurine image:', f.src, err);
      });
    });
  }, [figurines]);

  // Carousel state managed by OOP Controller
  const [carouselState, setCarouselState] = useState(() => new CarouselState(0, false, figurines.length));
  const [isMobile, setIsMobile] = useState(false);

  // Resize handler for isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = (direction: 'next' | 'prev') => {
    if (carouselState.isAnimating) return;

    // Transition state to next role indices, locking input
    setCarouselState((prev) => prev.navigate(direction));

    // Release animation lock after 650ms transition
    setTimeout(() => {
      setCarouselState((prev) => prev.finishAnimation());
    }, 650);
  };

  const activeFigurine = figurines[carouselState.activeIndex];
  const roles = carouselState.getRoles();

  return (
    <div
      className="relative w-full overflow-hidden transition-colors duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        backgroundColor: activeFigurine.bg,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* 1. Grain overlay */}
        <GrainOverlay />

        {/* 2. Giant ghost text */}
        <div
          id="ghost-text-container"
          className="absolute inset-x-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{
            zIndex: 2,
            top: '18%',
            height: 'clamp(100px, 30vw, 400px)',
          }}
        >
          {figurines.map((fig, idx) => (
            <div
              key={idx}
              className="absolute text-white uppercase tracking-[-0.02em] whitespace-nowrap leading-none transition-all duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: 'clamp(90px, 28vw, 380px)',
                fontWeight: 900,
                opacity: carouselState.activeIndex === idx ? 0.95 : 0,
                transform: carouselState.activeIndex === idx
                  ? 'scale(1) translateY(0)'
                  : carouselState.activeIndex === (idx + 1) % 4
                    ? 'scale(0.85) translateY(60px)'
                    : 'scale(0.85) translateY(-60px)',
              }}
            >
              {fig.label}
            </div>
          ))}
        </div>

        {/* 3. Top-left brand label "TOONHUB" */}
        <BrandLabel />

        {/* 4. Carousel of Figurines */}
        <Carousel figurines={figurines} roles={roles} isMobile={isMobile} />

        {/* 5. Bottom-left text + nav buttons */}
        <InfoSection onNavigate={navigate} />

        {/* 6. Bottom-right link "DISCOVER IT" */}
        <DiscoverLink />
      </div>
    </div>
  );
}
