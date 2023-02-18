import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OthersRoutingModule } from './others-routing.module';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorPage1Component } from './error-page/error-page1/error-page1.component';
import { ErrorPage2Component } from './error-page/error-page2/error-page2.component';
import { ErrorPage3Component } from './error-page/error-page3/error-page3.component';
import { ErrorPage4Component } from './error-page/error-page4/error-page4.component';
import { ErrorPage5Component } from './error-page/error-page5/error-page5.component';


@NgModule({
  declarations: [
    ErrorPageComponent,
    ErrorPage1Component,
    ErrorPage2Component,
    ErrorPage3Component,
    ErrorPage4Component,
    ErrorPage5Component
  ],
  imports: [
    CommonModule,
    OthersRoutingModule
  ]
})
export class OthersModule { }
