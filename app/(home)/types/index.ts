import { StaticImageData } from 'next/image';

export interface FigurineData {
  src: string | StaticImageData;
  bg: string;
  panel: string;
  label: string;
  sub: string;
}

export type FigurineRole = 'center' | 'left' | 'right' | 'back';

export interface CarouselRoles {
  center: number;
  left: number;
  right: number;
  back: number;
}
