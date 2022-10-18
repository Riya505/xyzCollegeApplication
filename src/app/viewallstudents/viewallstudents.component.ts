import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewallstudents',
  templateUrl: './viewallstudents.component.html',
  styleUrls: ['./viewallstudents.component.css']
})
export class ViewallstudentsComponent implements OnInit {

  constructor() { }

  studentData=[{"name":"ann","rollNo":"1","admissionNo":"7656","collegeName":"GEC Idukki","department":"CS","bloodGroup":"A+","dob":"23/6/2000","parentName":"sam","parentEmail":"sam@gmail.com","guardianName":"daniel","guardianAddress":"daniel,ekm"},{"name":"zara","rollNo":"2","admissionNo":"7643","collegeName":"GEC palakkad","department":"EC","bloodGroup":"B+","dob":"2/7/2000","parentName":"david","parentEmail":"david@gmail.com","guardianName":"jhon","guardianAddress":"david,pkd"},{"name":"kripa","rollNo":"3","admissionNo":"8676","collegeName":"CET","department":"EEE","bloodGroup":"O-","dob":"4//121999","parentName":"alex","parentEmail":"alex@gmail.com","guardianName":"henry","guardianAddress":"abc,tvm"},{"name":"abi","rollNo":"4","admissionNo":"6783","collegeName":"TKM","department":"Civil","bloodGroup":"AB+","dob":"13/7/2000","parentName":"emma","parentEmail":"emma@gmail.com","guardianName":"james","guardianAddress":"klm"},{"name":"surya","rollNo":"5","admissionNo":"7232","collegeName":"CET","department":"ME","bloodGroup":"B-","dob":"5/2/1998","parentName":"joseph","parentEmail":"jo@gmail.com","guardianName":"william","guardianAddress":"tvm"}]

  ngOnInit(): void {
  }

}
