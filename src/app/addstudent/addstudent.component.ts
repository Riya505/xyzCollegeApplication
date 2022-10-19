import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }
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
    this.myapi.addStudent(data).subscribe(
      (response)=>{
        console.log(response)
        alert("added")
      }
    )
  }

  ngOnInit(): void {
  }

}
