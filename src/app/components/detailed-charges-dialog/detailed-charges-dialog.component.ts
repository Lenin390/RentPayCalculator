import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detailed-charges-dialog',
  templateUrl: './detailed-charges-dialog.component.html',
  styleUrls: ['./detailed-charges-dialog.component.scss']
})
export class DetailedChargesDialogComponent implements OnInit {
baseamont: number = 0;
fee: string = '0';
gst: string = '0';
fee_gst: string = '0';
total: string = '0';
  

  constructor(public dialogRef: MatDialogRef<DetailedChargesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { amount: number, fee: number, gst:number}) { }

  ngOnInit(): void {
    this.baseamont = this.data.amount;
    let feez = (this.data.amount) * (this.data.fee/100);
    this.fee = feez.toFixed(2);
    let gstt = (feez) * (this.data.gst/100);
    this.gst = gstt.toFixed(2);
    this.fee_gst = (feez+gstt).toFixed(2) ;
    let tot = this.baseamont+feez+gstt;
    this.total = tot.toFixed(2);
  }

}
