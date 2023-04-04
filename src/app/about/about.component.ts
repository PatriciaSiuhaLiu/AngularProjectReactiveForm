import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  paymentformGroup:FormGroup = new FormGroup(
    {
      $key: new FormControl(null),
      cardNumber : new FormControl('45'),
      cardHolder: new FormControl('555'),
      expireMonth: new FormControl('1'),
      expireYear: new FormControl('11'),
      amount: new FormControl('22'),
      cvv: new FormControl('sd'),

    }
  );
}
