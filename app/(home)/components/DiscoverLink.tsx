import React from 'react';
import { ArrowRight } from 'lucide-react';

export const DiscoverLink: React.FC = () => {
  return (
    <div id="discover-link-container" className="absolute bottom-6 right-4 sm:bottom-20 sm:right-10 z-60 pointer-events-auto">
      <a
        href="#"
        className="group flex items-center gap-2 sm:gap-3 text-white no-underline uppercase opacity-95 transition-opacity duration-[200ms] hover:opacity-100 select-none"
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(20px, 4vw, 56px)',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1,
        }}
      >
        <span>DISCOVER IT</span>
        <ArrowRight
          className="w-5 h-5 sm:w-8 sm:h-8 transition-transform duration-200 group-hover:translate-x-1"
          strokeWidth={2.25}
        />
      </a>
    </div>
  );
};
