import { Injectable } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  constructor(
    private authService: SocialAuthService

  ) { }
  signInWithGoogle() {
    return this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)

  }
}
