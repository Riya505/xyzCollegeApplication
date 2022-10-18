import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addfaculties',
  templateUrl: './addfaculties.component.html',
  styleUrls: ['./addfaculties.component.css']
})
export class AddfacultiesComponent implements OnInit {

  constructor() { }

  name=""
  department=""
  designation=""
  dob=""
  qualification=""
  address=""
  mobile=""
  doj=""

  readValue=()=>{
    let data={
      "name":this.name,
      "department":this.department,
      "designation":this.designation,
      "dob":this.dob,
      "qualification":this.qualification,
      "address":this.address,
      "mobile":this.mobile,
      "doj":this.doj
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
