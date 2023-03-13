import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyOrderPaymentComponent } from './verify-order-payment.component';

describe('VerifyOrderPaymentComponent', () => {
  let component: VerifyOrderPaymentComponent;
  let fixture: ComponentFixture<VerifyOrderPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyOrderPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyOrderPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
