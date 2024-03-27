import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { timer } from 'rxjs';
import { AvailableDaylist, AvailableTimeSlot, BoardList, ClassList } from 'src/app/Interfaces/dataModel';
import { CallAPIService } from 'src/app/services/call-api.service';
@Component({
  selector: 'app-book-demo-session',
  templateUrl: './book-demo-session.component.html',
  styleUrls: ['./book-demo-session.component.scss']
})
export class BookDemoSessionComponent {
  bookDemoSession: FormGroup;
  classArray: Array<ClassList> = [];
  boardArry: Array<BoardList> = [];
  availableDayList: Array<AvailableDaylist> = []
  allDaysTimeSlotArray: Array<AvailableTimeSlot> = []
  timeSlotArrayAccordingToDays: any = [];
  mathsTypeArray: Array<{ id: number, title: string }> = [];
  isBoardRequired: boolean = false;
  isTypeRequired: boolean = false;
  minDate: any;
  maxDate: any;
  weekArray: any = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thrusday',
    5: 'Friday',
    6: 'Saturday'
  }
  constructor(
    private formBuilder: FormBuilder,
    private callAPi: CallAPIService,
    private toastr: ToastrService
  ) {
    this.getCurrentDate();
    this.getClassList()
    this.getBoardList()
    this.getAvailableDayList();
    // this.getListOfAvailableTimeSlot()
    this.mathsTypeArray = [
      { id: 1, title: 'Core Mathematics' },
      { id: 2, title: 'Applied Mathematics' }
    ]
    this.bookDemoSession = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.maxLength(10), Validators.minLength(10)]],
      class: ['', [Validators.required]],
      board: [''],
      type: [''],
      date: ['', [Validators.required]],
      timeSlot: ['', [Validators.required]],
      desc: ['']
    })
  }
  hasError(controlName: string, errorName: string) {
    return this.bookDemoSession.controls[controlName].hasError(errorName);
  }
  getCurrentDate() {
    // Create a new Date object
    let currentDate = new Date();
    let afterSiz = new Date();
    afterSiz.setDate(afterSiz.getDate() + 8);
    // Add one day to the current date
    currentDate.setDate(currentDate.getDate() + 1);
    let finalCurrentDate = String(currentDate.getFullYear()) + '-' + String(currentDate.getMonth() + 1).padStart(2, '0') + '-' + String(currentDate.getDate());
    let finalAfterSixDayDate = String(afterSiz.getFullYear()) + '-' + String(afterSiz.getMonth() + 1).padStart(2, '0') + '-' + String(afterSiz.getDate());
    this.minDate = finalCurrentDate
    console.log(finalAfterSixDayDate)
    this.maxDate = finalAfterSixDayDate
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
  getListOfAvailableTimeSlot(uuidOfDay?: any) {
    this.callAPi.getListOfAvailableTimeSlot().then((res: any) => {
      this.allDaysTimeSlotArray = res.data
      if (uuidOfDay) {
        this.setTimeSlot(uuidOfDay)
      }
    })
    return
  }
  setTimeSlot(uuidOfDay: any) {
    this.timeSlotArrayAccordingToDays = this.allDaysTimeSlotArray.filter((data => data.available_day_uuid == uuidOfDay));
    console.log(this.timeSlotArrayAccordingToDays)
    if (this.timeSlotArrayAccordingToDays.length == 0) {
      this.isTimeAvailable = false;
    } else {
      this.isTimeAvailable = true;
    }
  }
  getAvailableDayList() {
    this.callAPi.getAvailableDayList().then((res: any) => {
      this.availableDayList = res.data
    })
  }
  selectClass(event: any) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log(selectedValue);
    if (Number(selectedValue) <= 12) {
      this.isBoardRequired = true
      this.bookDemoSession.get('board')?.setValidators([Validators.required])
    } else {
      this.isBoardRequired = false
      this.bookDemoSession.get('board')?.clearValidators()
    }
    if (Number(selectedValue) >= 9 && Number(selectedValue) <= 12) {
      this.isTypeRequired = true;
      this.bookDemoSession.get('type')?.setValidators([Validators.required]);
    } else {
      this.isTypeRequired = false;
      this.bookDemoSession.get('type')?.clearValidators()
    }
    this.bookDemoSession.get('board')?.updateValueAndValidity();
    this.bookDemoSession.get('type')?.updateValueAndValidity();
  }
  isTimeAvailable: boolean = true;
  selectDate(e: any) {
    this.timeSlotArrayAccordingToDays = []
    let selectedDate = (e.target as HTMLSelectElement).value;
    const date = new Date(selectedDate);
    //getting a week name according to date
    let dayName = this.weekArray[date.getDay()];
    //getting the uuid of dayName from availableDayList list
    let uuidOfDay = this.availableDayList.filter((data => data.days_value == dayName))[0]['days_uuid'];
    //filter the time slot from available time slot array
    this.getListOfAvailableTimeSlot(uuidOfDay);

  }
  isRequestProcessing: boolean = false;
  submit() {
    if (this.bookDemoSession.valid) {
      this.callSaveAPI();
    } else {
      this.bookDemoSession.markAllAsTouched()
    }
  }

  callSaveAPI() {
    this.isRequestProcessing = true;
    let obj = {
      "student_name": this.bookDemoSession.get('fullName')?.value.trim(),
      "student_email": this.bookDemoSession.get('email')?.value.trim(),
      "student_phone": this.bookDemoSession.get('phone')?.value,
      "student_class": this.bookDemoSession.get('class')?.value,
      "student_board": this.bookDemoSession.get('board')?.value,
      "subject_type": this.bookDemoSession.get('type')?.value,
      "demo_date": this.bookDemoSession.get('date')?.value,
      "demo_time_slot": this.bookDemoSession.get('timeSlot')?.value,
      "demo_query": this.bookDemoSession.get('desc')?.value
    }
    this.callAPi.bookDemoSession(obj).then((res: any) => {
      this.isRequestProcessing = false;
      this.bookDemoSession.reset()
      this.toastr.success("Demo Session Booked Successfully")
    }).catch((error) => {
      this.isRequestProcessing = false;
      this.toastr.error("Something Went Wrong! Please Again Later")
    })
  }
}
