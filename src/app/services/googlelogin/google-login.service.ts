import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from '@abacritt/angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  constructor(
    private authService: SocialAuthService

  ) { }
  signInWithGoogle() {
    return this.authService.authState;
    // return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)

  }
}
