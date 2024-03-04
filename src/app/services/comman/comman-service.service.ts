import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommanServiceService {

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

}
