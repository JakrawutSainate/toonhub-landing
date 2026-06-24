import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface InfoSectionProps {
  onNavigate: (direction: 'next' | 'prev') => void;
}

export const InfoSection: React.FC<InfoSectionProps> = ({ onNavigate }) => {
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
