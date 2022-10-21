import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallfaculties',
  templateUrl: './viewallfaculties.component.html',
  styleUrls: ['./viewallfaculties.component.css']
})
export class ViewallfacultiesComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }
  fetchData=()=>{
    this.myapi.viewFaculty().subscribe(
      (data)=>{
        this.facultyData=data
      }
    )
  }

  deleteFaculty=(id:any)=>{
    let data={
      "id":id
    }
    this.myapi.deleteFaculty(data).subscribe(
      (respo)=>{
        alert("Deleted!")
      }
    )
    this.fetchData()
  }

  facultyData:any=[]

  ngOnInit(): void {
  }

}
