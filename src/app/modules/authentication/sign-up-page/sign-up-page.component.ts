import { Component } from '@angular/core';
import { GoogleLoginService } from 'src/app/services/googlelogin/google-login.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  constructor(
    private googleSignUp: GoogleLoginService
  ) {

  }
  google() {
    // this.googleSignUp.signInWithGoogle().then((res: any) => {
    //   console.log(res)
    // }).catch((err: any) => {
    //   console.log(err)
    // })
  }
}
