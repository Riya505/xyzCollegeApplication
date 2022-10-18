import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallfaculties',
  templateUrl: './viewallfaculties.component.html',
  styleUrls: ['./viewallfaculties.component.css']
})
export class ViewallfacultiesComponent implements OnInit {

  constructor() { }

  facultyData=[{"name":"john","department":"CS","designation":"Professor","dob":"5/7/1989","qualification":"phd","address":"tvm","mobile":"7856984548","doj":"3/7/2020"},{"name":"ema","department":"IT","designation":"HOD","dob":"14/3/1985","qualification":"phd","address":"ekm","mobile":"8943676589","doj":"2/11/2017"},{"name":"ann","department":"EC","designation":"Associate Professor","dob":"22/5/1987","qualification":"phd","address":"knr","mobile":"7569981297","doj":"4/7/2019"},{"name":"alex","department":"ME","designation":"Assistant Professor","dob":"19/9/1991","qualification":"pg","address":"klm","mobile":"8943438232","doj":"6/7/2016"},{"name":"sam","department":"EEE","designation":"Assistant Professor","dob":"9/12/1982","qualification":"pg","address":"pkd","mobile":"9845457323","doj":"29/3/2014"}]

  ngOnInit(): void {
  }

}
