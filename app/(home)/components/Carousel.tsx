import React from 'react';
import { Figurine } from '../models/Figurine';
import { CarouselRoles, FigurineRole } from '../types';
import { CarouselItem } from './CarouselItem';

interface CarouselProps {
  figurines: Figurine[];
  roles: CarouselRoles;
  isMobile: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({ figurines, roles, isMobile }) => {
  return (
    <div id="carousel-container" className="absolute inset-0 z-3 select-none pointer-events-none">
      {figurines.map((figurine, index) => {
        let role: FigurineRole = 'back';
        if (index === roles.center) {
          role = 'center';
        } else if (index === roles.left) {
          role = 'left';
        } else if (index === roles.right) {
          role = 'right';
        } else if (index === roles.back) {
          role = 'back';
        }

        return (
          <CarouselItem
            key={index}
            figurine={figurine}
            role={role}
            isMobile={isMobile}
          />
        );
      })}
    </div>
  );
};
