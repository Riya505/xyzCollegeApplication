import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  studentName=""
  admissionNo=""

  readValue=()=>{
    let data={
      "studentName":this.studentName,
      "admissionNo":this.admissionNo
    }
    console.log(data)
    this.myapi.searchStudent(data).subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  
  data:any=[
   
]

  ngOnInit(): void {
  }

}
