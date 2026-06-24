import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Figurine } from '../models/Figurine';

interface InfoSectionProps {
  figurines: Figurine[];
  activeIndex: number;
  onNavigate: (direction: 'next' | 'prev') => void;
  onSelect: (index: number) => void;
  isMobile: boolean;
}

export const InfoSection: React.FC<InfoSectionProps> = ({
  figurines,
  activeIndex,
  onNavigate,
  onSelect,
  isMobile,
}) => {
  if (isMobile) {
    return (
      <div
        id="info-section-mobile"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-60 w-full px-4 flex flex-col items-center gap-4 animate-fade-in"
        style={{ maxWidth: '360px' }}
      >
        {/* Title */}
        <p className="font-bold uppercase text-[15px] tracking-wider text-white opacity-95 text-center mb-0">
          TOONHUB FIGURINES
        </p>

        {/* Gamified HUD Controller: ArrowLeft -> Thumbnails -> ArrowRight */}
        <div className="flex items-center gap-2 pointer-events-auto bg-black/25 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 shadow-lg">
          {/* Arrow Left */}
          <button
            onClick={() => onNavigate('prev')}
            aria-label="Previous Figurine"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 bg-transparent text-white cursor-pointer transition-all hover:bg-white/10 active:scale-90"
          >
            <ArrowLeft size={16} strokeWidth={2.25} />
          </button>

          {/* Figurine Thumbnails */}
          <div className="flex gap-2">
            {figurines.map((fig, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  onClick={() => onSelect(index)}
                  className="relative w-10 h-10 rounded-full overflow-hidden border-2 cursor-pointer transition-all duration-300 active:scale-90"
                  style={{
                    borderColor: isActive ? fig.panel : 'rgba(255, 255, 255, 0.25)',
                    backgroundColor: fig.panel + '20',
                    boxShadow: isActive ? `0 0 10px ${fig.panel}` : 'none',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={fig.src}
                    alt={fig.label}
                    className="w-full h-full object-contain object-bottom"
                    style={{
                      mixBlendMode: 'multiply',
                      imageRendering: '-webkit-optimize-contrast',
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Arrow Right */}
          <button
            onClick={() => onNavigate('next')}
            aria-label="Next Figurine"
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/30 bg-transparent text-white cursor-pointer transition-all hover:bg-white/10 active:scale-90"
          >
            <ArrowRight size={16} strokeWidth={2.25} />
          </button>
        </div>
      </div>
    );
  }

  // Desktop Layout
  return (
    <div
      id="info-section"
      className="absolute bottom-6 left-4 sm:bottom-20 sm:left-24 z-60 w-full"
      style={{ maxWidth: '320px' }}
    >
      <p
        className="font-bold uppercase mb-2 sm:mb-3 text-base sm:text-[22px] text-white opacity-95"
        style={{ letterSpacing: '0.02em' }}
      >
        TOONHUB FIGURINES
      </p>

      <p className="hidden sm:block text-xs sm:text-sm text-white opacity-85 leading-1.6 mb-4 sm:mb-5">
        The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.
      </p>

      <div className="flex gap-3 sm:gap-4 pointer-events-auto">
        <button
          onClick={() => onNavigate('prev')}
          aria-label="Previous Figurine"
          className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white bg-transparent text-white cursor-pointer transition-all duration-150 ease-out hover:scale-108 hover:bg-[rgba(255,255,255,0.12)] active:scale-95"
        >
          <ArrowLeft size={26} strokeWidth={2.25} />
        </button>

        <button
          onClick={() => onNavigate('next')}
          aria-label="Next Figurine"
          className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white bg-transparent text-white cursor-pointer transition-all duration-150 ease-out hover:scale-108 hover:bg-[rgba(255,255,255,0.12)] active:scale-95"
        >
          <ArrowRight size={26} strokeWidth={2.25} />
        </button>
      </div>
    </div>
  );
};
