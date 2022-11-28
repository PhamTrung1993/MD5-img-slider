import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImgSliderComponent } from './img-slider.component';
import { SlideComponent } from './slide/slide.component';
import {SliderService} from "../service/slider.service";



@NgModule({
  declarations: [
    ImgSliderComponent,
    SlideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ImgSliderComponent, SlideComponent],
  providers: [SliderService]
})
export class ImgSliderModule { }
