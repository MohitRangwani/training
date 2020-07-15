import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ],
  exports :[
    DashboardComponent
  ]
})
export class AnalyticsModule {
  constructor(){
    console.log("Analytics mod loaded");
  }
 }
