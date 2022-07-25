import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WarningAlert} from "./WarningAlert/WarningAlert";
import { SuccessAlertComponent } from './success-alert/success-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    WarningAlert,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
