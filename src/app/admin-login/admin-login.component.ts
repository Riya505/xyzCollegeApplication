import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private myrouter:Router) { }

  userName=""
  password=""

  readValue=()=>{
    let data={
      "userName":this.userName,
      "password":this.password
    }
    if (this.userName=="admin" && this.password=="admin") {
      alert("login successfull")
      this.myrouter.navigate(["/dashboard"])
    } else {
      alert("invalid credential")
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
