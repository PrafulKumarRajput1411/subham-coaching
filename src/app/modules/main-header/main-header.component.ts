import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';
import { ConstantValues } from 'src/app/services/http/urls';
import { ChangeTitleService } from 'src/app/services/titleService/change-title.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  selectedPageId: any = 1
  sharedData: any;
  headerList: any;
  constructor(
    private router: Router,
    private commanService: CommanServiceService,
    private changeTitle: ChangeTitleService
  ) {
    this.headerList = this.commanService.getHeaderList()
    this.commanService.currentData.subscribe((data: any) => {
      this.sharedData = data
    })
    this.setTabId();
  }
  setTabId() {
    let url = this.commanService.getActivatedURLArray()
    this.headerList.forEach((element: any) => {
      if (url[url.length - 1] != '') {
        if (element['redirectUrl'].includes(url[url.length - 1])) {
          this.sharedData.selectedId = element.id
        }
      }
    })
  }
  changePage(id: any, url: any) {
    this.sharedData.selectedId = id;
    this.router.navigateByUrl(url)
  }
  gotoWhatsApp() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    if (w < 1440) {
      window.open('https://api.whatsapp.com/send?phone=' + ConstantValues.whatsAppNumber, '_blank');
    } else {
      window.open('https://web.whatsapp.com/send?phone=' + ConstantValues.whatsAppNumber, '_blank');
    }
  }
}
