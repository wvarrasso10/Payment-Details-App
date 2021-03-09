import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PaymentDetailsComponent} from './payment-details/payment-details.component';

const routes: Routes = [
  { path: '', component: PaymentDetailsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ]
})
export class AppRoutingModule { }
