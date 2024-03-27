import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnviourmentConstants, ServerUrls } from './http/urls';
import { ScHttpService } from './http/http-service.service';
import { CommanServiceService } from './comman/comman-service.service';

@Injectable({
  providedIn: 'root'
})
export class CallAPIService {
  mainURl: any = ''
  constructor(
    private http: HttpClient,
    private httpService: ScHttpService,
    private commanService: CommanServiceService
  ) {
    this.mainURl = EnviourmentConstants.DOMAINPATH;
  }

  sendContactUsEmail(data: any) {
    let url = this.mainURl + ServerUrls.sendContactUsEmail.url;
    return this.httpService.postHttpService(url, data)

  }
  getData() {
    let url = this.mainURl + ServerUrls.getData.url;
    return this.httpService.getHttpService(url, '')
  }
  getClassList() {
    let url = this.mainURl + ServerUrls.getClassList.url;
    return this.httpService.getHttpService(url, '');
  }
  getBoardList() {
    let url = this.mainURl + ServerUrls.getBoardList.url;
    return this.httpService.getHttpService(url, '')
  }
  getAvailableDayList() {
    let url = this.mainURl + ServerUrls.getAvailableDayList.url;
    return this.httpService.getHttpService(url, '');
  }
  getListOfAvailableTimeSlot() {
    let token = this.commanService.getAccessToken();

    console.log(token)
    let url = this.mainURl + ServerUrls.getListOfAvailableTimeSlot.url;
    return this.httpService.getHttpService(url, '', token)
  }
  bookDemoSession(data: any) {
    let url = this.mainURl + ServerUrls.bookDemoSession.url;
    return this.httpService.postHttpService(url, data)
  }
  login(data: any) {
    let url = this.mainURl + ServerUrls.login.url;
    return this.httpService.postHttpService(url, data);
  }
}
