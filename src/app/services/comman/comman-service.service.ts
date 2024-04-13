import { Injectable, Renderer2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CommanServiceService {
  secretKey: any = 'kdf89KLDf098kjkjfd9-459ndsf-45nkdf8o4-dfjk4uf-eor8kdf';
  accessToken: any = ''
  headerList: any = [
    { id: 1, title: 'HOME', redirectUrl: '/home', logo: false },
    { id: 2, title: 'ABOUT', redirectUrl: '/about', logo: false },
    { id: 3, title: 'CONTACT US', redirectUrl: '/contact-us', logo: false },
  ]
  public data = new BehaviorSubject<any>({
    selectedId: 1
  })
  public currentData: any;
  constructor(
    private activatedRoutes: ActivatedRoute
  ) {
    this.currentData = this.data.asObservable();
  }
  getActivatedURLArray() {
    let url = window.location.href.split('/');
    return url;
  }
  getHeaderList() {
    return this.headerList
  }
  capitalizeFirstLetter(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  makeFirstCapitalOfEveryWord(str: any) {
    let newStr = '';
    let strArray = str.split(' ');
    strArray.forEach((element: any, index: number) => {
      if (index == 0) {
        newStr = newStr + element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
      } else {
        newStr = newStr + " " + element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
      }
    })


    return newStr;
  }
  generateToken(data: any): string {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      this.secretKey
    ).toString();
    console.log(encryptedData)
    return encryptedData.replaceAll('+', 'acbdr87');
  }
  setAccessToken(token: string) {
    this.accessToken = token
  }
  getAccessToken() {
    return this.accessToken
  }
  decryptToken(token: string): any {
    console.log(typeof token)
    try {
      const decryptedBytes = CryptoJS.AES.decrypt(token, this.secretKey);
      const decryptedData = decryptedBytes.toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedData);
    } catch (error) {
      return false
    }
  }
  getActivatedRoutes(queryParam?: any) {
    return this.activatedRoutes.snapshot.queryParamMap;
  }

}
