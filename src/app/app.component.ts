import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import {DetailedChargesDialogComponent} from './components/detailed-charges-dialog/detailed-charges-dialog.component';


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
  url:any;
  // matcher = new MyErrorStateMatcher();
  RentpayData = [
    {
      "id": 1,
      "name": "Redgirraffe",
      "slug": "redgirraffe",
      "logo": "https://redgirraffe.com/assets/images/RGVector.svg",
      "fee": 0.39,
      "GST": 18,
      "RentalDocs": 50000,
      "link": "https://redgirraffe.com/"
    },
    {
      "id": 2,
      "name": "NoBroker",
      "slug": "nobroker",
      "logo": "https://assets.nobroker.in/static/img/logos/nb_logo_new_trans.svg",
      "fee": 1.1,
      "GST": 18,
      "RentalDocs": 50000,
      "link": "https://play.google.com/store/apps/details?id=com.nobroker.app&gl=US"
    },
    {
      "id": 3,
      "name": "CRED",
      "slug": "cred",
      "logo": "https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo-horizontal.png",
      "fee": 1.525,
      "GST": 18,
      "RentalDocs": 8333.33,
      "link": "https://play.google.com/store/apps/details?id=com.dreamplug.androidapp&pli=1"
    },
    {
      "id": 4,
      "name": "MagicBricks",
      "slug": "magicbricks",
      "logo": "https://img.staticmb.com/mbcontent/images/uploads/2015/7/MB%20Logo.JPG",
      "fee": 1.49,
      "GST": 18,
      "RentalDocs": 50000,
      "link": "https://play.google.com/store/apps/details?id=com.timesgroup.magicbricks"
    },
    {
      "id": 5,
      "name": "Paytm",
      "slug": "paytm",
      "logo": "https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png",
      "fee": 1.865,
      "GST": 18,
      "RentalDocs": 50000,
      "link": "https://play.google.com/store/apps/details?id=net.one97.paytm"
    },
    {
      "id": 6,
      "name": "PhonePe",
      "slug": "phone",
      "logo": "https://www.logo.wine/a/logo/PhonePe/PhonePe-Logo.wine.svg",
      "fee": 1.695,
      "GST": 18,
      "RentalDocs": 50000,
      "link": "https://play.google.com/store/apps/details?id=com.phonepe.app"
    },
    {
      "id": 7,
      "name": "FreeCharge",
      "slug": "freecharge",
      "logo": "https://pwa-cdn.freecharge.in/pwa-static/pwa/images/header/fc-logo-rebranded.png",
      "fee": 1.15,
      "GST": 18,
      "RentalDocs": 50000,
      "link": "https://play.google.com/store/apps/details?id=com.freecharge.android"
    },
    {
      "id": 8,
      "name": "Mobikwik",
      "slug": "mobikwik",
      "logo": "https://www.mobikwik.com/blog/wp-content/uploads/2021/07/Mobikwik-blog-logo-312-x-70-1.png",
      "fee": 2,
      "GST": 18,
      "RentalDocs": 50000,
      "link": "https://play.google.com/store/apps/details?id=com.mobikwik_new"
    },
  ];

  constructor(public dialog: MatDialog, public router : Router) { }


  calculate(fc: AbstractControl){
    console.log(fc.value);
    this.Rentamount = Number(fc.value);
  }

  openDialog(amount:number,fee:number,gst:number): void {
    let dialogRef = this.dialog.open(DetailedChargesDialogComponent, {
      width: 'auto',
      data: { amount: amount, fee: fee, gst:gst}
    });
  
    dialogRef.afterClosed().subscribe();
  }

  OpenSiteURL(url:any) : any {
    window.open(url, '_blank');
  }
}
