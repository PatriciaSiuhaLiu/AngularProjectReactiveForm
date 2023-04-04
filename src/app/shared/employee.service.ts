import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http:HttpClient) { }

  year=['2028','2027','2026','2025','2024','2023'];
  mnth=['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

 postPayment(data:any):Observable<any>{
return this._http.post('http://localhost:8000/api/v1/payment',data);
 }

 getYearList():Array<string>{
  return this.year;
 }

 getMnthList():Array<string>{
  return this.mnth;
 }
}
