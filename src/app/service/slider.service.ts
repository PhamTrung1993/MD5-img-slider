import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor() {
  }

  private defLink = 'https://via.placeholder.com/1280x420/e91e63/ffffff';
  private width = 1280;
  private height = 420;
  private color = 'ffffff';

  autoIncrementLinkGenerator(max: number): string[] {
    const out: string[] = [];
    for (let i = 1; i < max + 1; i++) {
      out.push(this.defLink + '?text=' + i);
    }
    return out;
  }

  // @ts-ignore
  setImgGobalStyle(width: number, height: number, color: string): boolean {
    if (typeof width !== 'number'
      ||
      typeof height !== 'number'
      ||
      typeof color !== 'string'
      ||
      !color.match(/^\w{6}$/)) {
      return false;
    }
    this.defLink = 'https://via.placeholder.com/' + width + 'x' + height + '/e91e63/' + color;
  }
}
