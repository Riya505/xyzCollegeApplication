import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallstudents',
  templateUrl: './viewallstudents.component.html',
  styleUrls: ['./viewallstudents.component.css']
})
export class ViewallstudentsComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewStudents().subscribe(
      (data)=>{
        this.studentData=data
      }
    )
  }

  studentData:any=[]

  ngOnInit(): void {
  }

}
