import React from 'react';
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
  let height = isMobile ? '13%' : '22%';
  let bottom = isMobile ? '32%' : '12%';

  switch (role) {
    case 'center':
      transform = `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`;
      filter = 'none';
      opacity = 1;
      zIndex = 20;
      left = '50%';
      height = isMobile ? '60%' : '92%';
      bottom = isMobile ? '22%' : '0%';
      break;

    case 'left':
      transform = 'translateX(-50%) scale(1)';
      filter = 'blur(2px)';
      opacity = 0.85;
      zIndex = 10;
      left = isMobile ? '20%' : '30%';
      height = isMobile ? '16%' : '28%';
      bottom = isMobile ? '32%' : '12%';
      break;

    case 'right':
      transform = 'translateX(-50%) scale(1)';
      filter = 'blur(2px)';
      opacity = 0.85;
      zIndex = 10;
      left = isMobile ? '80%' : '70%';
      height = isMobile ? '16%' : '28%';
      bottom = isMobile ? '32%' : '12%';
      break;

    case 'back':
    default:
      // default values already set above
      break;
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={figurine.src}
        alt="Toon Figurine"
        className="w-full h-full object-contain object-bottom select-none"
        style={{
          imageRendering: '-webkit-optimize-contrast',
          // @ts-ignore
          imageRendering: 'crisp-edges',
          backfaceVisibility: 'hidden',
        }}
        draggable={false}
      />
    </div>
  );
};
