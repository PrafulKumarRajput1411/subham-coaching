import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommanServiceService } from '../comman/comman-service.service';

@Injectable({
  providedIn: 'root'
})
export class ChangeTitleService {

  constructor(
    private titleService: Title,
    private commanService: CommanServiceService
  ) {
  }
  setDynamicTitle(id: any) {
    let titleName = this.commanService.getHeaderList().filter((data: any) => {
      return data.id == id;
    })
    this.changeTitle(titleName[0].title)
  }
  changeTitle(title: any) {
    this.titleService.setTitle('Radiant Tutorials | ' + this.commanService.capitalizeFirstLetter(title))

  }
}
