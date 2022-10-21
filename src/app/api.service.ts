import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewStudents=()=>{
    return this.http.get("http://localhost:8080/viewStudents")
  }
  addStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/studentEntry",data)
  }
  deleteStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/deletestudent",data)
  }
  searchStudent=(data:any)=>{
    return this.http.post("http://localhost:8080/searchStudent",data)
  }
  viewFaculty=()=>{
    return this.http.get("http://localhost:8080/viewFaculty")
  }
  addFaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/facultyEntry",data)
  }
  deleteFaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteFaculty",data)
  }
  searchFaculty=(data:any)=>{
    return this.http.post("http://localhost:8080/searchFaculty",data)
  }
}
