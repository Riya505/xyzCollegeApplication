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
  deleteStudent=(id:any)=>{
    let data={"id":id
  }
  this.myapi.deleteStudent(data).subscribe(
    (respo)=>{
      alert("Deleted")
    }
  )
  this.fetchData()
  }

  studentData:any=[]

  ngOnInit(): void {
  }

}
