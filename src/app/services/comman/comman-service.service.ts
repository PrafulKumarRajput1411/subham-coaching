import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanServiceService {
  headerList: any = [
    { id: 1, title: 'HOME', redirectUrl: '/home', logo: false },
    { id: 2, title: 'ABOUT', redirectUrl: '/about', logo: false },
    { id: 3, title: 'CONTACT US', redirectUrl: '/contact-us', logo: false },
  ]
  public data = new BehaviorSubject<any>({
    selectedId: 1
  })
  public currentData: any;
  constructor(

  ) {
    this.currentData = this.data.asObservable();
  }
  getActivatedURLArray() {
    let url = window.location.href.split('/');
    return url;
  }
  getHeaderList() {
    return this.headerList
  }
  capitalizeFirstLetter(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  makeFirstCapitalOfEveryWord(str: any) {
    let newStr = '';
    let strArray = str.split(' ');
    strArray.forEach((element: any, index: number) => {
      if (index == 0) {
        newStr = newStr + element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
      } else {
        newStr = newStr + " " + element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
      }
    })
    return newStr;
  }

}
