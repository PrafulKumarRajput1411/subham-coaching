import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent {
  selectedPageId: any = 1
  headerList = [
    { id: 1, title: 'HOME', redirectUrl: '/home' },
    { id: 2, title: 'ABOUT', redirectUrl: '/about' },
    { id: 3, title: 'COURSES', redirectUrl: '/courses' },
    { id: 4, title: 'CONTACT', redirectUrl: '/contact-us' }
  ]
  constructor(
    private router: Router,
    private commanService: CommanServiceService
  ) {
    this.setTabId();
  }
  setTabId() {
    console.log(Object.values(this.headerList[0]))
    let url = this.commanService.getActivatedURLArray()
    this.headerList.forEach((element) => {
      if (element['redirectUrl'].includes(url[url.length - 1])) {
        this.selectedPageId = element.id
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
    this.selectedPageId = id
    this.router.navigateByUrl(url)
  }
}
