import { CarouselRoles } from '../types';

export class CarouselState {
  public readonly activeIndex: number;
  public readonly isAnimating: boolean;
  public readonly totalItems: number;

  constructor(activeIndex: number = 0, isAnimating: boolean = false, totalItems: number = 4) {
    this.activeIndex = activeIndex;
    this.isAnimating = isAnimating;
    this.totalItems = totalItems;
  }

  /**
   * Derive the index for each role based on the current activeIndex.
   */
  public getRoles(): CarouselRoles {
    const center = this.activeIndex;
    const left = (this.activeIndex + this.totalItems - 1) % this.totalItems;
    const right = (this.activeIndex + 1) % this.totalItems;
    const back = (this.activeIndex + 2) % this.totalItems;
    return { center, left, right, back };
  }

  /**
   * Transition to a new active index, locking input.
   */
  public navigate(direction: 'next' | 'prev'): CarouselState {
    if (this.isAnimating) return this;
    const nextIndex = direction === 'next' 
      ? (this.activeIndex + 1) % this.totalItems
      : (this.activeIndex + this.totalItems - 1) % this.totalItems;
    return new CarouselState(nextIndex, true, this.totalItems);
  }

  /**
   * Release the animation lock.
   */
  public finishAnimation(): CarouselState {
    return new CarouselState(this.activeIndex, false, this.totalItems);
  }
}
