import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';
import { ConstantValues } from 'src/app/services/http/urls';

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
    private commanServie: CommanServiceService
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
    console.log(this.commanServie.currentData)
  }
  goToContactUsPage() {
    this.sharedData.selectedId = 3;
    this.router.navigateByUrl('/contact-us')
  }
}
