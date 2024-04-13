import { Component } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CallAPIService } from 'src/app/services/call-api.service';

@Component({
  selector: 'app-add-time-slot',
  templateUrl: './add-time-slot.component.html',
  styleUrls: ['./add-time-slot.component.scss']
})
export class AddTimeSlotComponent {
  slotForm: FormGroup;
  hours: any = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  minutes: any = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];
  amPM: any = [
    'AM', 'PM'
  ]
  constructor(
    private formBuilder: FormBuilder,
    private callAPI: CallAPIService
  ) {
    this.slotForm = this.formBuilder.group({
      days: this.formBuilder.array([])
    })
    this.getDayList()
  }
  getDayList() {
    this.callAPI.getAvailableDayList().then((res: any) => {
      console.log(res)
      if (res.data.length > 0) {
        res.data.forEach((element: any, index: any) => {
          (<FormArray>this.slotForm.get('days')).push(this.formBuilder.group({
            day: [element.days_value],
            uuid: [element.days_uuid],
            time: this.formBuilder.array([this.addTime()])
          }))
        })
      }
      // this.getItemArray()
      console.log((this.slotForm.get('days') as FormArray).controls)
      let item = this.getItemArray().controls;
      console.log(item)
      item.forEach((element: any, index: any) => {
        // console.log(element)
        // console.log(this.getSubArray(element))
      })
      this.getData()


    })
  }
  getData() {
    // this.getItemArray().push(this.addTime())
    console.log(this.slotForm.get('days'))
    console.log(this.getSubArray(0))
  }
  getSubArray(index: number) {
    // return element.get('time') as FormArray
    return ((this.slotForm.get('days') as FormArray).controls).at(index)?.get('time') as FormArray
  }
  getItemArray() {
    return this.slotForm.get('days') as FormArray;
  }
  addDay() {
    return this.formBuilder.group({
      day: [''],
      uuid: [''],
      time: this.formBuilder.array([this.addTime()])
    })
  }
  addTime() {
    return this.formBuilder.group({
      uuid: [''],
      dayUuid: [''],
      startHours: ['12'],
      startMins: ['00'],
      startIsAm: ['AM'],
      endHours: ['12'],
      endMins: ['00'],
      endIsAm: ['AM'],
    })
  }
  addItemSlot(index: number) {
    ((this.slotForm.get('days') as FormArray).at(index).get('time') as FormArray).push(this.addTime())
  }
  removeIcon(innerIndex: number, outerIndex: number) {
    ((this.slotForm.get('days') as FormArray).at(outerIndex).get('time') as FormArray).removeAt(innerIndex)
  }
}
