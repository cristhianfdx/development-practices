import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from './../components/components.module';

import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';



@NgModule({
  declarations: [
    HomeComponent,
    PricingComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PagesModule { }
