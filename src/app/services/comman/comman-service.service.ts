import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommanServiceService {

  constructor() { }
  getActivatedURLArray() {
    let url = window.location.href.split('/');
    return url;
  }
}
