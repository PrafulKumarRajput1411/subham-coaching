import { Component } from '@angular/core';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {
  listOfCourses: any = [
    { title: 'Foundation Mathematics', desc: '(Class:- 6,7,8 for CBSE,ICSE)' },
    { title: 'Board Class', desc: '(Class:- 9,10,11,12 for Core and Applied Mathematics)' },
    { title: 'CA Foundation', desc: 'Mathematics' },
    { title: 'CMA', desc: 'Mathematics' },
    { title: 'NDA', desc: 'Mathematics' },


  ]

  isItAboutPage: boolean = false;
  constructor(
    private commanService: CommanServiceService
  ) {
    let urlArray = this.commanService.getActivatedURLArray();
    if (urlArray[urlArray.length - 1] == 'home') {
      this.isItAboutPage = false;
    } else {
      this.isItAboutPage = true;
    }
  }

}
