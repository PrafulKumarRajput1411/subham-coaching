import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ConstantValues } from '../../http/urls';
import { Router } from '@angular/router';
import { CommanServiceService } from '../../comman/comman-service.service';
import { loadTranslations } from '@angular/localize';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(
    private router: Router,
    private commanService: CommanServiceService,
    private toast: ToastrService
  ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Modify the request here (e.g., add headers)

    const adminJwtToken = localStorage.getItem('radTuToAu-t-th')
    if (adminJwtToken) {
      let str = ConstantValues.authUser + ':' + ConstantValues.authPassword;
      const newRequest = request.clone({
        withCredentials: true,
        setHeaders: {
          Authorization: 'Basic ' + btoa(str),
        },
      })
      return next.handle(newRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          console.log(error)
          if (error.status === 401) {
            let value = this.commanService.decryptToken(adminJwtToken.replaceAll('acbdr87', '+'))
            if (value.user_type == 'admin') {
              this.toast.error(error.error.message)
              this.router.navigateByUrl('/authentication/admin-login')
            } else if (value.user_type == 'user') {

            }
            localStorage.removeItem('radTuToAu-t-th')

          }
          return throwError(error);
        })
      )

    } else {

      let str = ConstantValues.authUser + ':' + ConstantValues.authPassword;
      const token = localStorage.getItem('radTuToAu-t-th');
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: 'Basic ' + btoa(str),
        },

      });

      // Pass the modified request to the next handler
      return next.handle(modifiedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          const adminToken = localStorage.getItem('radTuToAu-t-th');
          const userToken = localStorage.getItem('usEe-Token_U');
          let userData;
          let adminData;
          if (adminToken) {
            adminData = this.commanService.decryptToken(adminToken.replaceAll('acbdr87', '+'))
          }
          if (userToken) {
            userData = this.commanService.decryptToken(userToken.replaceAll('acbdr87', '+'))
          }
          if (error.status == 401) {
            if (adminData) {
              localStorage.removeItem('radTuToAu-t-th');
              this.router.navigateByUrl('/authentication/admin-login')
            }
            // if(userData)  
          }
          return throwError(error);
        })
      )
    }
  }
}
