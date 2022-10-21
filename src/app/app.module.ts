import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ViewallstudentsComponent } from './viewallstudents/viewallstudents.component';
import { AddfacultiesComponent } from './addfaculties/addfaculties.component';
import { ViewallfacultiesComponent } from './viewallfaculties/viewallfaculties.component';
import {HttpClientModule} from '@angular/common/http';
import { SearchstudentComponent } from './searchstudent/searchstudent.component';
import { SearchfacultyComponent } from './searchfaculty/searchfaculty.component';



const appRoutes:Routes=[
  {
    path:"",component:AdminLoginComponent
  },
  {
    path:"dashboard",component:AddstudentComponent
  },
  {
    path:"viewstudent",component:ViewallstudentsComponent
  },
  {
    path:"addfaculties",component:AddfacultiesComponent
  },
  {
    path:"viewfaculties",component:ViewallfacultiesComponent
  },
  {
    path:"searchstudent",component:SearchstudentComponent
  },
  {
    path:"searchfaculty",component:SearchfacultyComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NavbarComponent,
    AddstudentComponent,
    ViewallstudentsComponent,
    AddfacultiesComponent,
    ViewallfacultiesComponent,
    SearchstudentComponent,
    SearchfacultyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
