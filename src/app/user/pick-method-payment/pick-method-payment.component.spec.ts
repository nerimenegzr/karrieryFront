import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickMethodPaymentComponent } from './pick-method-payment.component';

describe('PickMethodPaymentComponent', () => {
  let component: PickMethodPaymentComponent;
  let fixture: ComponentFixture<PickMethodPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PickMethodPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickMethodPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
