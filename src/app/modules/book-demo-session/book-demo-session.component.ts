import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-demo-session',
  templateUrl: './book-demo-session.component.html',
  styleUrls: ['./book-demo-session.component.scss']
})
export class BookDemoSessionComponent {
  bookDemoSession: FormGroup;
  classArray: any;
  boardArry: any;
  mathsTypeArray: any;
  isBoardRequired: boolean = false;
  isTypeRequired: boolean = false
  constructor(
    private formBuilder: FormBuilder
  ) {

    this.classArray = [
      { id: 1, value: '6', title: 'Class 6' },
      { id: 2, value: '7', title: 'Class 7' },
      { id: 3, value: '8', title: 'Class 8' },
      { id: 4, value: '9', title: 'Class 9' },
      { id: 5, value: '10', title: 'Class 10' },
      { id: 6, value: '11', title: 'Class 11' },
      { id: 7, value: '12', title: 'Class 12' },
      { id: 8, value: 'CA Foundation', title: 'CA Foundation' },
      { id: 9, value: 'CMA', title: 'CMA' },
      { id: 10, value: 'NDA', title: 'NDA' },
    ]
    this.boardArry = [
      { id: 1, title: 'CBSE' },
      { id: 2, title: 'ICSE' }
    ]
    this.mathsTypeArray = [
      { id: 1, title: 'Core Mathematics' },
      { id: 2, title: 'Applied Mathematics' }
    ]
    this.bookDemoSession = this.formBuilder.group({
      fullName: [''],
      email: [''],
      phone: [''],
      class: [''],
      board: [''],
      type: [''],
      desc: ['']
    })
  }
  selectClass(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    if (Number(selectedValue) < 8) {
      this.isBoardRequired = true
    } else {
      this.isBoardRequired = false
    }
    if (Number(selectedValue) >= 4 && Number(selectedValue) <= 7) {
      this.isTypeRequired = true;
    } else {
      this.isTypeRequired = false
    }

  }
  submit() {
    console.log(this.bookDemoSession)
  }
}
