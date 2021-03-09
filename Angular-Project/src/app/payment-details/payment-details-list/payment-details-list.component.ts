import { Component, OnInit } from '@angular/core';
import {PaymentDetailService} from '../shared/payment-detail.service';
import {PaymentDetail} from '../shared/payment-detail.model';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-payment-details-list',
  templateUrl: './payment-details-list.component.html',
  styleUrls: ['./payment-details-list.component.css']
})
export class PaymentDetailsListComponent implements OnInit {

  constructor(public paymentDetails: PaymentDetailService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.paymentDetails.getPaymentDetails();
  }
  // function to populate data to input forms
  populateForm(pd: PaymentDetail): void {
    // object .assign passes pd to empty object so changes aren't reflected in list
    this.paymentDetails.formData = Object.assign({}, pd);
  }
  onDelete(PMId: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      console.log(PMId);
      this.paymentDetails.deletePaymentDetail(PMId)
        .subscribe(res => {
          this.paymentDetails.getPaymentDetails();
          this.toastr.warning('Deleted Successfully');
        },
        err => {
          console.log(err);
        });
    }
  }
}
