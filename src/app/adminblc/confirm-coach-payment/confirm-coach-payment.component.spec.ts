import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmCoachPaymentComponent } from './confirm-coach-payment.component';

describe('ConfirmCoachPaymentComponent', () => {
  let component: ConfirmCoachPaymentComponent;
  let fixture: ComponentFixture<ConfirmCoachPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmCoachPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmCoachPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
