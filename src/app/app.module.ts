import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Fix issue in matInput
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';

import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

//Service
import { EmployeeService } from './shared/employee.service'; 

//Import for reactuve form
import {ReactiveFormsModule} from "@angular/forms";

//For API Calls 
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Adding custom material module
    MaterialModule,
    //Adding reactive form module
    ReactiveFormsModule,
//Fix issue in matInput
    BrowserAnimationsModule,
//For API Calls 
HttpClientModule
  ],
  providers: [
    EmployeeService //Add service inside the providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
