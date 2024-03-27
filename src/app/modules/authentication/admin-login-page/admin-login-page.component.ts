import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CallAPIService } from 'src/app/services/call-api.service';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';

@Component({
  selector: 'app-admin-login-page',
  templateUrl: './admin-login-page.component.html',
  styleUrls: ['./admin-login-page.component.scss']
})
export class AdminLoginPageComponent {
  loginForm: FormGroup;
  isProcessing: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private callAPI: CallAPIService,
    private toast: ToastrService,
    private commanService: CommanServiceService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  login() {
    console.log(this.loginForm)
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.isProcessing = true;
      let obj = {
        "id": this.loginForm.get('id')?.value,
        "password": this.loginForm.get('password')?.value
      }
      this.callAPI.login(obj).then((res: any) => {
        this.isProcessing = false;
        if (!res.status) {
          this.toast.error(res.message ? res.message : "Something went Wrong!");
        } else {
          let currentTime = new Date();
          res.data['loginTime'] = currentTime.getTime()
          let token = this.commanService.generateToken(res.JJ_lt_tok);
          this.router.navigateByUrl('/admin/detail/home/admin-dashboard?token=' + token + '&time=' + currentTime.getTime())
        }
      }).catch((err: any) => {
        this.isProcessing = false;
        this.toast.error("Something Went Wrong!")
      })
    }
  }
  hasError(error: any, field: any) {
    return this.loginForm.get(field)?.hasError(error);
  }
}
