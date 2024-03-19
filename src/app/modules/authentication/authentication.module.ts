import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { GoogleSigninButtonModule, SocialLoginModule } from '@abacritt/angularx-social-login';
const router: Routes = [
  { path: '', redirectTo: '/authentication/sign-up', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'sign-up', component: SignUpPageComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent }
]


@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    // SocialLoginModule,
    GoogleSigninButtonModule,
    RouterModule.forChild(router)
  ]
})
export class AuthenticationModule { }
