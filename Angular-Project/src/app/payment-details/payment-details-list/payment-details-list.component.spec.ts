import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailsListComponent } from './payment-details-list.component';

describe('PaymentDetailsListComponent', () => {
  let component: PaymentDetailsListComponent;
  let fixture: ComponentFixture<PaymentDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
