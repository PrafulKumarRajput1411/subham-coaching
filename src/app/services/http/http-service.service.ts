import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScHttpService {
  token: any = ''
  private headers = new Headers();
  private multipartHeaders = new Headers();
  public jsonHTTPOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'time-zone': Intl.DateTimeFormat().resolvedOptions().timeZone
      // 'token': this.token
    }
    )

    , withCredentials: false
  };
  constructor(private httpClient: HttpClient) {
    // this.headers.append('Content-Type', 'application/json');
    this.multipartHeaders.append('Content-Type', 'multipart/form-data; charset=utf-8; boundary=gc0p4Jq0M2Yt08jU534c0p');

  }

  getHttpService(url: any, data: any, header?: any) {
    let httpHeader = new HttpHeaders({
      'Content-type': 'application/json'
    })
    if (header) {
      console.log(header)
      httpHeader = httpHeader.append('token', header)
    }
    console.log(httpHeader)
    let promise = new Promise((resolve, reject) => {
      this.httpClient.get(url, { headers: httpHeader }).subscribe(

        (res: any) => {

          if (res && res["status"] === 401) {


            resolve(res);
            // this.authService.logout();
          } else {
            resolve(res);
          }
          //this.toastService.show( "Application Error", "Data loaded");
        }, error => {


          if (error.status === 400) {
            reject(error["error"])
          } else if (error.status === 401) {

            resolve(error["error"]);
          } else if (error.status === 503) {
            error["error"] = { message: "Service Unavailable." };
            reject(error["error"]);
          } else if (error.status === 0) {

            reject(error);
          } else {

            reject(error["error"]);
          }
        },
      );
    });
    return promise;
  }

  postHttpService(url: any, data: any): Promise<any> {

    let promise = new Promise((resolve, reject) => {
      this.httpClient.post(url, JSON.stringify(data), this.jsonHTTPOptions).subscribe(
        res => resolve(res),
        error => {
          if (error.status === 400) {
            reject(error["error"])
          } else if (error.status === 401) {

            reject(error["error"]["data"]);
          } else if (error.status === 503) {
            error["error"] = { message: "Service Unavailable." };
            reject(error["error"]);
          } else if (error.status === 0) {

            reject(error);
          } else {

            reject(error["error"]);
          }
        },

      );
    });
    return promise;
  }

  postFileHttpService(url: any, formdata: any) {

    let promise = new Promise((resolve, reject) => {
      this.httpClient.post(url, formdata).subscribe(
        res => resolve(res),
        error => {
          if (error.status === 400) {
            reject(error["error"])
          } else if (error.status === 401) {

            reject(error["error"]["data"]);
          } else if (error.status === 503) {
            error["error"] = { message: "Service Unavailable." };
            reject(error["error"]);
          } else if (error.status === 0) {

            reject(error);
          } else {

            reject(error["error"]);
          }
        },

      );
    });
    return promise;
  }

  putFileHttpService(url: any, formdata: any) {

    let promise = new Promise((resolve, reject) => {
      this.httpClient.put(url, formdata).subscribe(
        res => resolve(res),
        error => {
          if (error.status === 400) {
            reject(error["error"])
          } else if (error.status === 401) {

            reject(error["error"]["data"]);
          } else if (error.status === 503) {
            error["error"] = { message: "Service Unavailable." };
            reject(error["error"]);
          } else if (error.status === 0) {

            reject(error);
          } else {

            reject(error["error"]);
          }
        },

      );
    });
    return promise;
  }

  putHttpService(url: any, data: any) {

    let promise = new Promise((resolve, reject) => {
      this.httpClient.put(url, JSON.stringify(data), this.jsonHTTPOptions).subscribe(
        res => resolve(res),
        error => {
          if (error.status === 400) {
            reject(error["error"])
          } else if (error.status === 401) {

          } else if (error.status === 503) {
            error["error"] = { message: "Service Unavailable." };
            reject(error["error"]);
          } else if (error.status === 0) {

            reject(error);
          } else {

            reject(error["error"]);
          }
        },

      );
    });
    return promise;
  }
  putHttpServicemultipart(url: any, data: any) {
    this.jsonHTTPOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'multipart/form-data;',
      }
      )

      , withCredentials: false
    };
    let promise = new Promise((resolve, reject) => {
      this.httpClient.put(url, data, this.jsonHTTPOptions).subscribe(
        res => resolve(res),
        error => {
          if (error.status === 400) {
            reject(error["error"])
          } else if (error.status === 401) {

          } else if (error.status === 503) {
            error["error"] = { message: "Service Unavailable." };
            reject(error["error"]);
          } else if (error.status === 0) {

            reject(error);
          } else {

            reject(error["error"]);
          }
        },

      );
    });
    return promise;
  }

  deleteHttpService(url: any, data: any) {

    this.jsonHTTPOptions['body'] = data;
    let promise = new Promise((resolve, reject) => {
      this.httpClient.delete(url, this.jsonHTTPOptions).subscribe(
        res => resolve(res),
        error => {
          if (error.status === 400) {
            reject(error["error"])
          } else if (error.status === 401) {

          } else if (error.status === 503) {
            error["error"] = { message: "Service Unavailable." };
            reject(error["error"]);
          } else if (error.status === 0) {

            reject(error);
          } else {

            reject(error["error"]);
          }
        },

      );
    });
    return promise;
  }
  // getOrderCardDetailsById(id,tz){
  //   const myheader = new HttpHeaders().set('time-zone', tz);
  //   return this.httpClient.get( "https://shipcarte2.ebizontech.biz/shipcarte-backend/shipcarte/api/quote/getOrderMetaDataById?quoteId=" + id, { withCredentials: true,
  //     headers: myheader
  //    });
  // }
}
