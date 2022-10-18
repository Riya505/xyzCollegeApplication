import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }

  studentName=""
  rollNo=""
  admissionNo=""
  collegeName=""
  department=""
  bloodGroup=""
  dateOfBirth=""
  parentName=""
  parentEmail=""
  guardianName=""
  guardianAddress=""

  readValue=()=>{
    let data={
      "studentName":this.studentName,
      "rollNo":this.rollNo,
      "admissionNo":this.admissionNo,
      "collegeName":this.collegeName,
      "department":this.department,
      "bloodGroup":this.bloodGroup,
      "dateOfBirth":this.dateOfBirth,
      "parentName":this.parentName,
      "parentEmail":this.parentEmail,
      "guardianName":this.guardianName,
      "guardianAddress":this.guardianAddress
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
