export interface FigurineData {
  src: string;
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
