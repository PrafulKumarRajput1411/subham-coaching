import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginPageComponent } from './admin-login-page/admin-login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AdminGuardGuard } from 'src/app/guard/admin-guard/admin-guard.guard';
const router: Routes = [
  { path: '', redirectTo: '/authentication/sign-up', pathMatch: 'full' },
  // { path: 'login', component: LoginPageComponent },
  // { path: 'sign-up', component: SignUpPageComponent },
  // { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'admin-login', component: AdminLoginPageComponent }
]


@NgModule({
  declarations: [
    LoginPageComponent,
    SignUpPageComponent,
    ForgotPasswordComponent,
    AdminLoginPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router),
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule { }
