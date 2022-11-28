import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {SlideComponent} from "./slide/slide.component";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit{

  // @ts-ignore
  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;
  private activeTemplateIndex = 0;

  // @ts-ignore
  component : any;

  constructor() {
  }

  ngOnInit() {
  }

  next() {
    if (this.activeTemplateIndex < this.slides.length - 1) {
      this.activeTemplateIndex++;
      this.component = this.slides.toArray()[this.activeTemplateIndex];
    } else {
      this.activeTemplateIndex = 0;
      this.component = this.slides.first;
    }
  }

  previous() {
    if (this.activeTemplateIndex > 0) {
      this.activeTemplateIndex--;
      this.component = this.slides.toArray()[this.activeTemplateIndex];
    } else {
      this.activeTemplateIndex = 0;
      this.component = this.slides.last;
    }
  }

  ngAfterContentInit(): void {
    this.component = this.slides.first;
  }
}
