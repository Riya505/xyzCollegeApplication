import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchfaculty',
  templateUrl: './searchfaculty.component.html',
  styleUrls: ['./searchfaculty.component.css']
})
export class SearchfacultyComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""

  readValue=()=>{
    let data={
      "name":this.name
    }
    console.log(data)
    this.myapi.searchFaculty(data).subscribe(
      (resp)=>{
        this.data=resp
      }
    )
  }

  data:any=[]
  ngOnInit(): void {
  }

}
