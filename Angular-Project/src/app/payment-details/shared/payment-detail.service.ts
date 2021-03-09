import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PaymentDetail} from './payment-detail.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PaymentDetailService {
  formData!: PaymentDetail ;
  constructor(private http: HttpClient) { }
  readonly rootUrl = 'http://localhost:12348/api';
  list: PaymentDetail[] | undefined;

  getPaymentDetails(): Promise<PaymentDetail[]> {
    return this.http.get(this.rootUrl + '/PaymentDetail')
      .toPromise().then(res => this.list = res as PaymentDetail[]);
  }

  postPaymentDetail(): Observable<any> {
    return this.http.post(this.rootUrl + '/PaymentDetail', this.formData);
  }

  putPaymentDetail(): Observable<any> {
    return this.http.put(this.rootUrl + '/PaymentDetail/' + this.formData.PMId, this.formData);
  }

  deletePaymentDetail(id: number): Observable<any> {
    return this.http.delete(this.rootUrl + '/PaymentDetail/' + id);
  }
}
