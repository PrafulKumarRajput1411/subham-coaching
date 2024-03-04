import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbToastHeader } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { CallAPIService } from 'src/app/services/call-api.service';
import { CommanServiceService } from 'src/app/services/comman/comman-service.service';
import { ConstantValues } from 'src/app/services/http/urls';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  contactUsForm: FormGroup;
  phoneNumber: any = ''
  email: any = ''
  requestIsProcessing: boolean = false;
  constructor(
    private commanService: CommanServiceService,
    private formBuilder: FormBuilder,
    private callAPI: CallAPIService,
    private toastr: ToastrService
  ) {
    this.phoneNumber = ConstantValues.whatsAppNumber
    this.email = ConstantValues.email
    this.contactUsForm = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      phoneNumber: ['', [Validators.pattern(/^[0-9]+$/), Validators.maxLength(10), Validators.minLength(10)]],
      subject: ['', [Validators.required]],
      message: ['', [Validators.required]]
    })
  }
  submitForm() {
    // this.commanService.showSuccessMessage('succssMessage')
    if (this.contactUsForm.invalid) {
      this.contactUsForm.markAllAsTouched()
    } else {
      let obj = {
        "phone": this.contactUsForm.get('phoneNumber')?.value,
        "name": this.contactUsForm.get('fullName')?.value,
        "email": this.contactUsForm.get('email')?.value,
        "message": this.contactUsForm.get('message')?.value,
        "subject": this.contactUsForm.get('subject')?.value
      }
      this.requestIsProcessing = true;
      this.callAPI.sendContactUsEmail(obj).then((res: any) => {
        this.toastr.success("Mail Sent Successfully");
        this.contactUsForm.reset()
        this.requestIsProcessing = false;
      }).catch((err: any) => {
        this.requestIsProcessing = false
        console.log("Please Try Again Later!")
      })
    }
  }
  openGoogleMap() {
    // 29.910908, 78.132224
    window.open('https://www.google.com/maps?q=29.910908,78.132224')
  }
  hasError(controlName: string, errorName: string) {
    return this.contactUsForm.controls[controlName].hasError(errorName);
  }
}
