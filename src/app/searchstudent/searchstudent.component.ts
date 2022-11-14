import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchstudent',
  templateUrl: './searchstudent.component.html',
  styleUrls: ['./searchstudent.component.css']
})
export class SearchstudentComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  input:any=""
  data={

  }

  readValue=()=>{
    if (isNaN(this.input)) {
      this.data={
        "studentName":this.input,
      "admissionNo":0
      }
      
    } else {
      this.data={
        "studentName":this.input,
      "admissionNo":this.input
      }
    }
    console.log(this.data)
    this.myapi.searchStudent(this.data).subscribe(
      (resp)=>{
        this.datas=resp
        console.log(resp)
      }
    )
  }
  
  datas:any=[
   
]

  ngOnInit(): void {
  }

}
