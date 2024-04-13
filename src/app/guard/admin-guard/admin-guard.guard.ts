import { Injectable } from '@angular/core';
import { loadTranslations } from '@angular/localize';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(
    private commanService: CommanServiceService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let authToken = localStorage.getItem('radTuToAu-t-th') ?? '';
    // debugger
    if (authToken) {
      let authData = this.commanService.decryptToken(authToken.replaceAll('acbdr87', '+'))
      if (authData) {
        if (authData.user_type == 'admin') {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      // this.router.navigateByUrl('/authentication/admin-login');
      return false;


    }
    return true

  }

}
