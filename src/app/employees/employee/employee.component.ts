import { Component } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import {FormGroup, FormControl, FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  paymentformGroup:FormGroup ;
  yearList:Array<string> | undefined;
  mnthList:Array<string> | undefined;
  constructor(private service: EmployeeService, private formBuilder:FormBuilder){

    // this.paymentformGroup = new FormGroup(
    //   {
    //     $key: new FormControl(null),
    //     cardNumber : new FormControl(''),
    //     cardHolder: new FormControl(''),
    //     expireMonth: new FormControl(''),
    //     expireYear: new FormControl(''),
    //     amount: new FormControl(''),
    //     cvv: new FormControl(''),
  
    //   }
    // );

    this.yearList = service.getYearList();
    this.mnthList = service.getMnthList();
    this.paymentformGroup = this.formBuilder.group(
      {
        $key:[null],
        cardNumber :[''],
        cardHolder:[''],
        expireMonth:[''],
        expireYear:[''],
        amount:[''],
        cvv:['']
  
      }
    );
  }

  ngOnInit(){}

  onFormSubmit(){
    if(this.paymentformGroup.valid){
      console.log(this.paymentformGroup.value);
      this.service.postPayment(this.paymentformGroup.value).subscribe({
        next:(val:any)=>{
          alert('Paymnet success')
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }
  }
}
