import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CommanServiceService } from '../services/comman/comman-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  value: any = ''
  constructor(
    private commanService: CommanServiceService
  ) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.value = localStorage.getItem('radTuToAu-t-th')
    let item = this.commanService.decryptToken(this.value.replaceAll('acbdr87', "+"))
    console.log(item)
    if (!item) {
      return false;
    } else {
      if (item.user_type == 'admin') {
        return true;
      } else {
        return false;
      }
    }
  }

}
