import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RentPayCalculator';
  amountFormControl = new FormControl('', [Validators.required, Validators.maxLength(8)]);
  Rentamount:number = 0;
  // matcher = new MyErrorStateMatcher();
  RentpayData = [
    {
      "id": 1,
      "name": "Redgirraffe",
      "slug": "redgirraffe",
      "logo": "https://redgirraffe.com/assets/images/RGVector.svg",
      "fee": 0.39,
      "GST": 18,
      "RentalDocs": "10000"
    },
  ];

  constructor(public dialog: MatDialog) { }


  calculate(fc: AbstractControl){
    console.log(fc.value);
    this.Rentamount = Number(fc.value);
  }
}
