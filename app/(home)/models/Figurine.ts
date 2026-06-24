import { FigurineData } from '../types';

export class Figurine {
  public readonly src: string;
  public readonly bg: string;
  public readonly panel: string;
  public readonly label: string;
  public readonly sub: string;

  constructor(data: FigurineData) {
    this.src = data.src;
    this.bg = data.bg;
    this.panel = data.panel;
    this.label = data.label;
    this.sub = data.sub;
  }

  /**
   * Preload the figurine image.
   */
  public preload(): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      if (typeof window === 'undefined') {
        resolve({} as HTMLImageElement);
        return;
      }
      const img = new Image();
      img.src = this.src;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    });
  }
}
