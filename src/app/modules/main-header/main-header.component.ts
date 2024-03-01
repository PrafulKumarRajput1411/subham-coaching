import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';
import { ConstantValues } from 'src/app/services/http/urls';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  selectedPageId: any = 1
  sharedData: any;
  headerList = [
    { id: 1, title: 'HOME', redirectUrl: '/home', logo: false },
    { id: 2, title: 'ABOUT', redirectUrl: '/about', logo: false },
    { id: 3, title: 'CONTACT US', redirectUrl: '/contact-us', logo: false },
    // { id: 4, title: 'CHAT', redirectUrl: 'https://api.whatsapp.com/send?phone=6398276273', logo: true }
  ]
  constructor(
    private router: Router,
    private commanService: CommanServiceService,
  ) {

    this.commanService.currentData.subscribe((data: any) => {
      this.sharedData = data
    })
    this.setTabId();
  }
  setTabId() {
    console.log(Object.values(this.headerList[0]))
    let url = this.commanService.getActivatedURLArray()
    this.headerList.forEach((element) => {
      if (element['redirectUrl'].includes(url[url.length - 1])) {
        // this.selectedPageId = element.id
        this.sharedData.selectedId = element.id
      }
    })
    console.log(url)
  }
  gotoAbout() {
    this.router.navigateByUrl('/about')
  }
  changePage(id: any, url: any) {
    // console.log(data)
    // console.log(data['redirectURL'])
    this.sharedData.selectedId = id
    if (id == 4) {
    } else {
      this.router.navigateByUrl(url)
    }
  }
  gotoWhatsApp() {
    window.open('https://api.whatsapp.com/send?phone=' + ConstantValues.whatsAppNumber, '_blank');
  }
}
