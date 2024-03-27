import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(
    private activatedRoutes: ActivatedRoute,
    private commanService: CommanServiceService,
    private callAPI: CallAPIService
  ) {
    this.paramValue = this.activatedRoutes.snapshot.queryParamMap.get('token');
    this.time = this.activatedRoutes.snapshot.queryParamMap.get('time');
    console.log(this.paramValue)
    let value = this.commanService.decryptToken(this.paramValue.replaceAll('acbdr87', '+'))
    console.log(value)
    if (!value) {
      history.back()
    } else {
      this.commanService.setAccessToken(value);
      this.callAPI.getListOfAvailableTimeSlot().then((res: any) => {

      }).catch((err: any) => {

      })
    }
  }
}
