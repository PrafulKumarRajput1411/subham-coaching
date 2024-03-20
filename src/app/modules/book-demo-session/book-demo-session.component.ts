import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BoardList, ClassList } from 'src/app/Interfaces/dataModel';
import { CallAPIService } from 'src/app/services/call-api.service';
@Component({
  selector: 'app-book-demo-session',
  templateUrl: './book-demo-session.component.html',
  styleUrls: ['./book-demo-session.component.scss']
})
export class BookDemoSessionComponent {
  bookDemoSession: FormGroup;
  classArray: Array<ClassList> = [];
  boardArry: Array<BoardList> = []
  mathsTypeArray: Array<{ id: number, title: string }> = [];
  isBoardRequired: boolean = false;
  isTypeRequired: boolean = false;
  timeSlotArray: Array<{}> = [];
  constructor(
    private formBuilder: FormBuilder,
    private callAPi: CallAPIService
  ) {
    this.getClassList()
    this.getBoardList()
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

  getClassList() {
    this.callAPi.getClassList().then((res: any) => {
      console.log(res)
      if (res.data.length > 0) {
        this.classArray = res.data;
      }
    })
  }
  getBoardList() {
    console.log("hel")
    this.callAPi.getBoardList().then((res: any) => {
      if (res.data.length > 0) {
        this.boardArry = res.data
      }
    })
  }
  selectClass(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    if (Number(selectedValue) <= 12) {
      this.isBoardRequired = true
    } else {
      this.isBoardRequired = false
    }
    if (Number(selectedValue) >= 9 && Number(selectedValue) <= 12) {
      this.isTypeRequired = true;
    } else {
      this.isTypeRequired = false
    }

  }
  submit() {
    console.log(this.bookDemoSession)
  }
}
