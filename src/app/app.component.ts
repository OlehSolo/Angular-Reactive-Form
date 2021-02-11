import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  detailForm: FormGroup;




  constructor(private fb : FormBuilder){

    this.detailForm = fb.group({
      title : new FormControl(''),
      initials: new FormControl(''),
      firstName : new FormControl(''),
      surname : new FormControl(''),
      idNumber : new FormControl(''),
      dateOfBirth : new FormControl(''),
      gender : new FormControl(''),
      contactNumber : new FormControl(''),
      cellphoneNumber : new FormControl(''),
      grossMonthlyIncome : new FormControl(''),
      relationshipToMember : new FormControl(''),
      isBenefiaryLivesSameAddress : new FormControl(''),
      city : new FormControl(''),
      nameOfGeneralPractiner : new FormControl(''),
      doctorAdddress : new FormControl(''),
      doctorContactNumber :new FormControl(''),
      numOfYearsConsulted : new FormControl(''),
      weight : new FormControl(''),
      height : new FormControl('')})

  }
  logDetailsToConsole(){

    console.log(this.detailForm.value);

  }
}
