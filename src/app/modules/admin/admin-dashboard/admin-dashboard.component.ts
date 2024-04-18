import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, fromEvent, map } from 'rxjs';
import { CallAPIService } from 'src/app/services/call-api.service';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {
  paramValue: any = ''
  time: any = ''
  sideBarUrl: any;
  activeLinkId: any = 1
  sideBarIsOpen: boolean = true;
  constructor(
    private callAPI: CallAPIService,
    private router: Router,
    private commanService: CommanServiceService
  ) {
    fromEvent(window, 'resize')
      .pipe(
        map(() => window.innerWidth),

      )
      .subscribe((width: number) => {
        if (width < 1024) {
          this.sideBarIsOpen = false;
        } else {
          this.sideBarIsOpen = true
        }
        // Additional logic based on the width change
      });
    this.setTabId()
    this.sideBarUrl = [
      { id: 1, title: 'Class', url: 'assets/images/img/presentation.png' },
      { id: 2, title: 'Time Slot', url: 'assets/images/img/clock.png' },
      { id: 3, title: 'Add Blog', url: 'assets/images/img/writing.png' },
      { id: 4, title: 'Testimonials', url: 'assets/images/img/testimonial.png' }
    ]
    this.callAPI.testing().then((res: any) => {

    })
    this.checkingWidthOfWindow()
  }

  checkingWidthOfWindow() {
    let widht = window.innerWidth;
    console.log(widht)
    if (widht < 1024) {
      this.sideBarIsOpen = false
    }
  }
  goto(id: number) {
    if (id == 1) {
      this.router.navigateByUrl('/admin/detail/home/admin-dashboard/add-blog')
    } else if (id == 2) {
      this.router.navigateByUrl('/admin/detail/home/admin-dashboard/add-time-slot')
    }
  }
  setTabId() {
    let url = window.location.href.split('/');
    if (url[url.length - 1] == 'class') {
      this.activeLinkId = 1
    } else if (url[url.length - 1] == 'add-time-slot') {
      this.activeLinkId = 2
    } else if (url[url.length - 1] == 'add-blog') {
      this.activeLinkId = 3
    } else if (url[url.length - 1] == 'testimonials') {
      this.activeLinkId = 4
    }
  }
  changeTab(id: number) {
    this.activeLinkId = id
    if (id == 1) {
      this.router.navigateByUrl('/admin/detail/home/admin-dashboard/class')
    } else if (id == 2) {
      this.router.navigateByUrl('/admin/detail/home/admin-dashboard/add-time-slot')
    } else if (id == 3) {
      this.router.navigateByUrl('/admin/detail/home/admin-dashboard/add-blog')
    } else if (id == 4) {
      this.router.navigateByUrl('/admin/detail/home/admin-dashboard/testimonials')
    }
  }
  closeSideBar() {
    this.sideBarIsOpen = !this.sideBarIsOpen
  }
  logout() {
    this.commanService.logout()
    this.router.navigateByUrl('/authentication/admin-login')
  }
}
