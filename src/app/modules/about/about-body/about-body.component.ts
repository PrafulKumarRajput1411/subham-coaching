import { Component } from '@angular/core';

@Component({
  selector: 'app-about-body',
  templateUrl: './about-body.component.html',
  styleUrls: ['./about-body.component.scss']
})
export class AboutBodyComponent {
  listOfCourses: any = [
    { title: 'Foundation Mathematics', desc: '(Class:- 6,7,8 for CBSE,ICSE)' },
    { title: 'Board Class', desc: '(Class:- 9,10,11,12 for Core and Applied Mathematics)' },
    { title: 'CA Foundation', desc: 'Mathematics' },
    { title: 'CMA', desc: 'Mathematics' },
    { title: 'NDA', desc: 'Mathematics' },


  ]
  constructor() { }
}
