import React from 'react';
import Image from 'next/image';
import { Figurine } from '../models/Figurine';
import { FigurineRole } from '../types';

interface CarouselItemProps {
  figurine: Figurine;
  role: FigurineRole;
  isMobile: boolean;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ figurine, role, isMobile }) => {
  // Compute styling based on the active role and responsive flag
  let transform = 'translateX(-50%) scale(1)';
  let filter = 'blur(4px)';
  let opacity = 1;
  let zIndex = 5;
  let left = '50%';
  let height = isMobile ? '20%' : '22%';
  let bottom = isMobile ? '32%' : '12%';

  if (isMobile) {
    // Mobile Layout: Only show center figurine. Others fade out behind.
    if (role === 'center') {
      transform = 'translateX(-50%) scale(1.15)';
      filter = 'none';
      opacity = 1;
      zIndex = 20;
      left = '50%';
      height = '50%';
      bottom = '32%';
    } else {
      transform = 'translateX(-50%) scale(0.6)';
      filter = 'blur(8px)';
      opacity = 0;
      zIndex = 5;
      left = '50%';
      height = '20%';
      bottom = '32%';
    }
  } else {
    // Desktop Layout: Horizontal carousel
    switch (role) {
      case 'center':
        transform = 'translateX(-50%) scale(1.68)';
        filter = 'none';
        opacity = 1;
        zIndex = 20;
        left = '50%';
        height = '92%';
        bottom = '0%';
        break;

      case 'left':
        transform = 'translateX(-50%) scale(1)';
        filter = 'blur(2px)';
        opacity = 0.85;
        zIndex = 10;
        left = '30%';
        height = '28%';
        bottom = '12%';
        break;

      case 'right':
        transform = 'translateX(-50%) scale(1)';
        filter = 'blur(2px)';
        opacity = 0.85;
        zIndex = 10;
        left = '70%';
        height = '28%';
        bottom = '12%';
        break;

      case 'back':
      default:
        // default values set above
        break;
    }
  }

  return (
    <div
      className="absolute transition-all duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
      style={{
        aspectRatio: '0.6 / 1',
        transform,
        filter,
        opacity,
        zIndex,
        left,
        height,
        bottom,
        willChange: 'transform, filter, opacity',
      }}
    >
      {/* Sci-Fi Glassmorphic Card Background */}
      <div
        className="absolute inset-x-4 top-8 bottom-4 rounded-[32px] border border-white/20 transition-all duration-[650ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col justify-between p-4 overflow-hidden"
        style={{
          backgroundColor: figurine.panel + '18', // 10% opacity hex
          backdropFilter: role === 'center' ? 'blur(16px)' : 'blur(4px)',
          boxShadow: role === 'center'
            ? `0 24px 48px -12px rgba(0, 0, 0, 0.25), inset 0 1px 2px rgba(255, 255, 255, 0.25), 0 0 35px ${figurine.panel}45`
            : 'none',
          opacity: role === 'center' ? 0.9 : 0,
          transform: role === 'center' ? 'scale(1.04)' : 'scale(0.9)',
          zIndex: 1,
        }}
      >
        {/* Tech Card HUD Header */}
        <div className="flex justify-between items-start text-[8px] sm:text-[9px] font-mono tracking-widest text-white/60">
          <div>TOON_{figurine.sub}</div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>ONLINE</span>
          </div>
        </div>

        {/* Tech Card HUD Bottom */}
        <div className="flex justify-between items-end text-[7px] sm:text-[8px] font-mono tracking-widest text-white/50 border-t border-white/10 pt-2">
          <div>SCALE 1:6</div>
          <div>EDITION 1.00</div>
        </div>
      </div>

      {/* figurine image */}
      <Image
        src={figurine.src}
        alt="Toon Figurine"
        className={`relative w-full h-full object-contain object-bottom select-none z-10 transition-transform duration-300 ${
          role === 'center' ? 'animate-bob' : ''
        }`}
        style={{
          imageRendering: '-webkit-optimize-contrast',
          // @ts-ignore
          imageRendering: 'crisp-edges',
          backfaceVisibility: 'hidden',
          mixBlendMode: 'multiply',
        }}
        draggable={false}
        priority={role === 'center' || role === 'left' || role === 'right'}
      />
    </div>
  );
};
