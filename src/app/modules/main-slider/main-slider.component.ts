import { Component } from '@angular/core';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  imageAndDataArray = [
    { smallHeading: 'Best Online Courses', mainHeading: 'The Best Online Learning Platform', readMore: false, joinNow: true },
    { smallHeading: 'Best Online Courses', mainHeading: 'Get Educated Online From Your Home', readMore: false, joinNow: true }
  ]
  constructor() {

  }

}
