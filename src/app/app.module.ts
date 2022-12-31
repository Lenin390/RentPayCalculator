import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DetailedChargesDialogComponent} from './components/detailed-charges-dialog/detailed-charges-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    DetailedChargesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
  ],
  exports: [
    // MatDialogModule
  ],
  providers: [],
  bootstrap: [ AppComponent]
})
export class AppModule { }
