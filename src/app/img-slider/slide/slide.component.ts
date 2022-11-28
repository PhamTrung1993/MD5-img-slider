import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit{
  // @ts-ignore
  @ViewChild('template') template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }
}
