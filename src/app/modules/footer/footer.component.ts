import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';
import { ConstantValues } from 'src/app/services/http/urls';
import { ChangeTitleService } from 'src/app/services/titleService/change-title.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  sharedData: any;
  phoneNumber: any = '';
  email: any = ''
  constructor(
    private router: Router,
    private commanServie: CommanServiceService,
    private changeTitle: ChangeTitleService
  ) {
    this.phoneNumber = ConstantValues.whatsAppNumber;
    this.email = ConstantValues.email
    this.commanServie.currentData.subscribe((data: any) => {
      this.sharedData = data
    })
  }
  changeTab(id: any) {
    if (id == 2) {
      this.router.navigateByUrl('/about')
    } else if (id == 3) {
      this.router.navigateByUrl('/contact-us')
    }
    this.sharedData.selectedId = id
  }
  bookDemoSession() {
    this.changeTitle.changeTitle('Book Demo Session');
    this.router.navigateByUrl('/book-demo-session')
  }
  goToAdminLogin() {
    this.router.navigateByUrl('/authentication/admin-login')
  }
  goToContactUsPage() {
    this.sharedData.selectedId = 3;
    this.router.navigateByUrl('/contact-us')
  }
}
