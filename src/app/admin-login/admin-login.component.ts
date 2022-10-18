import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor() { }

  userName=""
  password=""

  readValue=()=>{
    let data={
      "userName":this.userName,
      "password":this.password
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
