import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallAPIService } from 'src/app/services/call-api.service';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';

@Component({
  selector: 'app-main-slider',
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss']
})
export class MainSliderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  sharedData: any;
  imageAndDataArray = [
    { smallHeading: 'Best Online Courses', mainHeading: 'The Best Online Learning Platform', readMore: false, joinNow: true },
    { smallHeading: 'Best Online Courses', mainHeading: 'Get Educated Online From Your Home', readMore: false, joinNow: true }
  ]
  constructor(
    private callAPI: CallAPIService,
    private commanService: CommanServiceService,
    private router: Router
  ) {
    this.commanService.currentData.subscribe((data: any) => {
      this.sharedData = data
    })
  }
  getData() {
    this.sharedData.selectedId = 3
    this.router.navigateByUrl('/contact-us')
  }
}
