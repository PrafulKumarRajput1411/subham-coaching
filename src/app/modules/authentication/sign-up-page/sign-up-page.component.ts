import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleLoginService } from 'src/app/services/googlelogin/google-login.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent {
  user: any;
  constructor(
    private googleSignUp: GoogleLoginService,
    private router: Router
  ) {
    this.google()
  }
  goToLogin() {
    this.router.navigateByUrl('/authentication/login')
  }
  google() {
    this.googleSignUp.signInWithGoogle().subscribe((res: any) => {
      this.user = res
      // debugger
      alert(this.user?.name + " " + this.user?.email)
    })
  }
}
