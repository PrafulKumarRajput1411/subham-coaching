import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(
    private commanService: CommanServiceService,
    private formBuilder: FormBuilder
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
    if (this.contactUsForm.invalid) {
      this.contactUsForm.markAllAsTouched()
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
