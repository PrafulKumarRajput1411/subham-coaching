import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommanServiceService } from '../comman/comman-service.service';
import { timeInterval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChangeTitleService {

  constructor(
    private titleService: Title,
    private commanService: CommanServiceService
  ) {
  }
  setDynamicTitle(url: any) {
    let urlArray = url.split('/');
    let title = urlArray[urlArray.length - 1];
    if (title.includes('-')) {
      title = title.replaceAll('-', ' ');
    }
    this.changeTitle(title)

  }
  changeTitle(title: any) {
    this.titleService.setTitle('Radiant Tutorials | ' + this.commanService.makeFirstCapitalOfEveryWord(title))

  }
}
