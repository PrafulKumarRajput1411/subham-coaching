import { Component } from '@angular/core';
import { CallAPIService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  imageAndDataArray = [
    // { smallHeading: 'Best Online Courses', mainHeading: 'The Best Online Learning Platform', readMore: false, joinNow: true },
    { smallHeading: 'Best Online Courses', mainHeading: 'Get Educated Online From Your Home', readMore: false, joinNow: true }
  ]
  constructor(
    private callAPI: CallAPIService
  ) {

  }
  getData() {
    this.callAPI.getData().then((res: any) => {
      console.log(res)
    }).catch((err: any) => {
      console.log(err)
    })
  }
}
