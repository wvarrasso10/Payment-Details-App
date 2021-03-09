import { Component, OnInit } from '@angular/core';
import {PaymentDetailService} from '../shared/payment-detail.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.css']
})
export class PaymentDetailComponent implements OnInit {

  constructor(public service: PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
// initialize payment detail interface
  resetForm(form?: NgForm): any{
    if (form != null) {
    form.resetForm();
    }
    this.service.formData = {
      PMId: 0,
      CardOwnerName: '',
      CardNumber: '',
      ExpirationDate: '',
      CVV: ''
    };
  }

  onSubmit(form: NgForm): void {
    // check if pmid == zero if not its and update not post
    if (this.service.formData.PMId === 0) {
        this.insertRecord(form);
      } else {
        console.log(this.service.formData.PMId);
        this.updateRecord(form);
      }
  }
  insertRecord(form: NgForm): void {
    this.service.postPaymentDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Submitted Successfully');
        this.service.getPaymentDetails();
      },
      err => {
        console.log(err);
      }
    );
  }

  updateRecord(form: NgForm): void {
    console.log(this.service.formData.PMId);
    this.service.putPaymentDetail().subscribe(
      res => {
        this.resetForm();
        this.toastr.success('Updated Successfully');
        this.service.getPaymentDetails();
      },
      err => {
        console.log(err);
      }
    );
  }
}
